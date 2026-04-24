import * as CANNON from 'cannon-es'

export default class PhysicsEngine {
  private world: CANNON.World
  private bodies: Map<string, CANNON.Body> = new Map()
  private timeStep: number = 1 / 60

  constructor() {
    this.world = new CANNON.World()
    this.world.gravity.set(0, -20, 0)
    this.world.broadphase = new CANNON.NaiveBroadphase()
    this.world.solver.iterations = 10
    this.world.defaultContactMaterial.contactEquationStiffness = 1e6
    this.world.defaultContactMaterial.contactEquationRelaxation = 3
  }

  getWorld(): CANNON.World {
    return this.world
  }

  createGround(id: string, size: { x: number; y: number; z: number }, position: { x: number; y: number; z: number }): CANNON.Body {
    const shape = new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2))
    const body = new CANNON.Body({
      mass: 0,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      shape
    })
    
    this.world.addBody(body)
    this.bodies.set(id, body)
    return body
  }

  createCube(id: string, size: number, position: { x: number; y: number; z: number }, mass: number = 1): CANNON.Body {
    const shape = new CANNON.Box(new CANNON.Vec3(size / 2, size / 2, size / 2))
    const body = new CANNON.Body({
      mass,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      shape
    })
    
    this.world.addBody(body)
    this.bodies.set(id, body)
    return body
  }

  createStaticBox(id: string, size: { x: number; y: number; z: number }, position: { x: number; y: number; z: number }): CANNON.Body {
    const shape = new CANNON.Box(new CANNON.Vec3(size.x / 2, size.y / 2, size.z / 2))
    const body = new CANNON.Body({
      mass: 0,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      shape
    })
    
    this.world.addBody(body)
    this.bodies.set(id, body)
    return body
  }

  removeBody(id: string): void {
    const body = this.bodies.get(id)
    if (body) {
      this.world.removeBody(body)
      this.bodies.delete(id)
    }
  }

  getBody(id: string): CANNON.Body | undefined {
    return this.bodies.get(id)
  }

  update(deltaTime: number): void {
    this.world.step(this.timeStep, deltaTime, 3)
  }

  reset(): void {
    this.bodies.forEach((body) => {
      this.world.removeBody(body)
    })
    this.bodies.clear()
  }

  dispose(): void {
    this.reset()
  }
}
