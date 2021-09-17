import * as THREE from 'three'

export class Board {
    private readonly scene: THREE.Scene
    private readonly camera: THREE.PerspectiveCamera
    private readonly renderer: THREE.WebGLRenderer

    private readonly cube: THREE.Mesh

    constructor(width: number, height: number) {
        this.scene = new THREE.Scene()
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setSize(width, height)
        this.animate = this.animate.bind(this)

        const geometry = new THREE.BoxGeometry(1, 1, 1)
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        this.cube = new THREE.Mesh(geometry, material)
        this.scene.add(this.cube)
        this.camera.position.z = 5
    }

    update(): void {
        this.cube.rotation.x += 0.01
        this.cube.rotation.y += 0.01
    }

    resize(width: number, height: number): void {
        this.camera.aspect = width / height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize(width, height)
    }

    getRendererDomElement(): HTMLCanvasElement {
        return this.renderer.domElement
    }

    animate(): void {
        requestAnimationFrame(this.animate)
        this.update()
        this.renderer.render(this.scene, this.camera)
    }
}