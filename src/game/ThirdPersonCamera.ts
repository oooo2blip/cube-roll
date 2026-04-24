import * as THREE from 'three'

export default class ThirdPersonCamera {
  private camera: THREE.PerspectiveCamera
  private target: THREE.Object3D | null = null
  private currentPosition: THREE.Vector3
  private targetPosition: THREE.Vector3
  private smoothingFactor: number
  private baseDistance: number
  private baseHeightOffset: number
  private angleOffset: number
  private minHeight: number
  private heightAdjustThreshold: number
  private distanceIncreaseFactor: number
  private heightOffsetDecreaseFactor: number
  private maxDistanceMultiplier: number
  private minHeightOffsetMultiplier: number

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera
    this.currentPosition = new THREE.Vector3()
    this.targetPosition = new THREE.Vector3()
    this.smoothingFactor = 0.08
    this.baseDistance = 12
    this.baseHeightOffset = 8
    this.angleOffset = Math.PI / 4
    this.minHeight = 5
    this.heightAdjustThreshold = 2
    this.distanceIncreaseFactor = 1.5
    this.heightOffsetDecreaseFactor = 0.3
    this.maxDistanceMultiplier = 2.5
    this.minHeightOffsetMultiplier = 0.3

    this.currentPosition.copy(camera.position)
  }

  setTarget(target: THREE.Object3D | null): void {
    this.target = target
  }

  setSmoothingFactor(factor: number): void {
    this.smoothingFactor = factor
  }

  setDistance(distance: number): void {
    this.baseDistance = distance
  }

  setHeightOffset(offset: number): void {
    this.baseHeightOffset = offset
  }

  update(): void {
    if (!this.target) return

    const targetWorldPos = new THREE.Vector3()
    this.target.getWorldPosition(targetWorldPos)

    const { distance, heightOffset } = this.calculateDynamicParams(targetWorldPos.y)

    const angle = this.angleOffset
    const offsetX = Math.sin(angle) * distance
    const offsetZ = Math.cos(angle) * distance

    const cameraY = targetWorldPos.y + heightOffset

    this.targetPosition.set(
      targetWorldPos.x + offsetX,
      Math.max(cameraY, this.minHeight),
      targetWorldPos.z + offsetZ
    )

    this.currentPosition.lerp(this.targetPosition, this.smoothingFactor)

    this.camera.position.copy(this.currentPosition)
    this.camera.lookAt(targetWorldPos)
  }

  private calculateDynamicParams(targetY: number): { distance: number; heightOffset: number } {
    let distance = this.baseDistance
    let heightOffset = this.baseHeightOffset

    if (targetY > this.heightAdjustThreshold) {
      const heightDelta = targetY - this.heightAdjustThreshold

      distance = this.baseDistance + heightDelta * this.distanceIncreaseFactor
      distance = Math.min(distance, this.baseDistance * this.maxDistanceMultiplier)

      heightOffset = this.baseHeightOffset - heightDelta * this.heightOffsetDecreaseFactor
      heightOffset = Math.max(heightOffset, this.baseHeightOffset * this.minHeightOffsetMultiplier)
    }

    return { distance, heightOffset }
  }

  getCameraPosition(): THREE.Vector3 {
    return this.currentPosition.clone()
  }

  reset(): void {
    if (this.target) {
      const targetWorldPos = new THREE.Vector3()
      this.target.getWorldPosition(targetWorldPos)

      const angle = this.angleOffset
      const offsetX = Math.sin(angle) * this.baseDistance
      const offsetZ = Math.cos(angle) * this.baseDistance

      this.currentPosition.set(
        targetWorldPos.x + offsetX,
        targetWorldPos.y + this.baseHeightOffset,
        targetWorldPos.z + offsetZ
      )

      this.targetPosition.copy(this.currentPosition)
      this.camera.position.copy(this.currentPosition)
      this.camera.lookAt(targetWorldPos)
    }
  }
}
