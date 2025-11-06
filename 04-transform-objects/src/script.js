import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// // mesh.position.x = 0.7
// // mesh.position.y = -0.6
// // mesh.position.z = 1

// mesh.position.set(0.7, -0.6, 1)

// // Scale
// // mesh.scale.x = 2
// // mesh.scale.y = 0.5
// // mesh.scale.z = 0.5
// mesh.scale.set(2, 0.5, 0.5)

// // Rotation
// mesh.rotation.reorder('YXZ') // 万向节锁定，因为旋转轴顺序会导致某两个轴重合，无法独立旋转；
// mesh.rotation.x = Math.PI * 0.25
// mesh.rotation.y = Math.PI * 0.25

// scene.add(mesh)

const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'red' })
)

group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
cube3.position.x = 2;
group.add(cube3);

// mesh.position.normalize()
// 展示坐标轴  x=>red  y=>green  z=>blue
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.y = 1
// camera.position.x = 1
// camera.lookAt(mesh.position)

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)