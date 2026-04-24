import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Renderer {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private controls: OrbitControls
  private container: HTMLElement
  private objects: Map<string, THREE.Object3D> = new Map()
  private materials: Map<string, THREE.Material> = new Map()

  constructor(container: HTMLElement) {
    this.container = container
    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color(0x0a0a1a)
    this.scene.fog = new THREE.Fog(0x0a0a1a, 50, 200)

    const aspect = container.clientWidth / container.clientHeight
    this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000)
    this.camera.position.set(15, 20, 15)

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setSize(container.clientWidth, container.clientHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.2
    container.appendChild(this.renderer.domElement)

    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    this.controls.maxPolarAngle = Math.PI / 2.5
    this.controls.minDistance = 10
    this.controls.maxDistance = 50
    this.controls.enablePan = false

    this.setupLights()

    window.addEventListener('resize', this.onResize.bind(this))
  }

  private setupLights(): void {
    const ambientLight = new THREE.AmbientLight(0x404060, 0.5)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
    directionalLight.position.set(10, 20, 10)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 100
    directionalLight.shadow.camera.left = -30
    directionalLight.shadow.camera.right = 30
    directionalLight.shadow.camera.top = 30
    directionalLight.shadow.camera.bottom = -30
    this.scene.add(directionalLight)

    const fillLight = new THREE.DirectionalLight(0x4cc9f0, 0.5)
    fillLight.position.set(-10, 10, -10)
    this.scene.add(fillLight)

    const rimLight = new THREE.DirectionalLight(0xf72585, 0.3)
    rimLight.position.set(0, 10, -20)
    this.scene.add(rimLight)
  }

  getScene(): THREE.Scene {
    return this.scene
  }

  getCamera(): THREE.PerspectiveCamera {
    return this.camera
  }

  getRenderer(): THREE.WebGLRenderer {
    return this.renderer
  }

  getControls(): OrbitControls {
    return this.controls
  }

  addObject(id: string, object: THREE.Object3D): void {
    this.objects.set(id, object)
    this.scene.add(object)
  }

  removeObject(id: string): void {
    const object = this.objects.get(id)
    if (object) {
      this.scene.remove(object)
      this.objects.delete(id)
    }
  }

  getObject(id: string): THREE.Object3D | undefined {
    return this.objects.get(id)
  }

  setCameraPosition(x: number, y: number, z: number, target?: { x: number; y: number; z: number }): void {
    this.camera.position.set(x, y, z)
    if (target) {
      this.controls.target.set(target.x, target.y, target.z)
    }
    this.controls.update()
  }

  render(): void {
    this.controls.update()
    this.renderer.render(this.scene, this.camera)
  }

  private onResize(): void {
    const width = this.container.clientWidth
    const height = this.container.clientHeight
    
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
  }

  clearScene(): void {
    this.objects.forEach((object) => {
      this.scene.remove(object)
    })
    this.objects.clear()
  }

  dispose(): void {
    window.removeEventListener('resize', this.onResize.bind(this))
    this.clearScene()
    this.controls.dispose()
    this.renderer.dispose()
    this.container.removeChild(this.renderer.domElement)
  }
}
