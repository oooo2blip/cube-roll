import * as THREE from 'three'

export default class ThirdPersonCamera {
  private camera: THREE.PerspectiveCamera
  private target: THREE.Object3D | null = null
  private currentPosition: THREE.Vector3
  private targetPosition: THREE.Vector3
  private smoothingFactor: number
  private distance: number
  private heightOffset: number
  private angleOffset: number
  private minHeight: number
  private heightAdaptationThreshold: number
  private heightAdaptationSpeed: number

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera
    this.currentPosition = new THREE.Vector3()
    this.targetPosition = new THREE.Vector3()
    this.smoothingFactor = 0.08
    this.distance = 12
    this.heightOffset = 8
    this.angleOffset = Math.PI / 4
    this.minHeight = 5
    this.heightAdaptationThreshold = 3
    this.heightAdaptationSpeed = 0.1

    this.currentPosition.copy(camera.position)
  }

  setTarget(target: THREE.Object3D | null): void {
    this.target = target
  }

  setSmoothingFactor(factor: number): void {
    this.smoothingFactor = factor
  }

  setDistance(distance: number): void {
    this.distance = distance
  }

  setHeightOffset(offset: number): void {
    this.heightOffset = offset
  }

  update(): void {
    if (!this.target) return

    const targetWorldPos = new THREE.Vector3()
    this.target.getWorldPosition(targetWorldPos)

    const angle = this.angleOffset
    const offsetX = Math.sin(angle) * this.distance
    const offsetZ = Math.cos(angle) * this.distance

    const baseHeight = targetWorldPos.y + this.heightOffset
    const adaptedHeight = this.calculateAdaptedHeight(targetWorldPos.y)

    this.targetPosition.set(
      targetWorldPos.x + offsetX,
      Math.max(baseHeight, adaptedHeight, this.minHeight),
      targetWorldPos.z + offsetZ
    )

    this.currentPosition.lerp(this.targetPosition, this.smoothingFactor)

    this.camera.position.copy(this.currentPosition)
    this.camera.lookAt(targetWorldPos)
  }

  private calculateAdaptedHeight(targetY: number): number {
    const cameraCurrentY = this.currentPosition.y
    const targetHeight = targetY + this.heightOffset

    if (targetY > this.heightAdaptationThreshold) {
      const additionalHeight = (targetY - this.heightAdaptationThreshold) * 0.8
      return targetHeight + additionalHeight
    }

    return targetHeight
  }

  getCameraPosition(): THREE.Vector3 {
    return this.currentPosition.clone()
  }

  reset(): void {
    if (this.target) {
      const targetWorldPos = new THREE.Vector3()
      this.target.getWorldPosition(targetWorldPos)

      const angle = this.angleOffset
      const offsetX = Math.sin(angle) * this.distance
      const offsetZ = Math.cos(angle) * this.distance

      this.currentPosition.set(
        targetWorldPos.x + offsetX,
        targetWorldPos.y + this.heightOffset,
        targetWorldPos.z + offsetZ
      )

      this.targetPosition.copy(this.currentPosition)
      this.camera.position.copy(this.currentPosition)
      this.camera.lookAt(targetWorldPos)
    }
  }
}
