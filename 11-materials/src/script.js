import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'

/**
 * Debug
 */
const gui = new GUI();

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Texture
 */
const textureLoader = new THREE.TextureLoader();

const doorColorTexture = textureLoader.load('./textures/door/color.jpg')
const doorAlphaTexture = textureLoader.load('./textures/door/alpha.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('./textures/door/ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('./textures/door/height.jpg')
const doorNormalTexture = textureLoader.load('./textures/door/normal.jpg')
const doorMetalnessTexture = textureLoader.load('./textures/door/metalness.jpg')
const doorRoughnessTexture = textureLoader.load('./textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('./textures/matcaps/3.png')
const gradientTexture = textureLoader.load('./textures/gradients/3.jpg')

doorColorTexture.colorSpace = THREE.SRGBColorSpace;
matcapTexture.colorSpace = THREE.SRGBColorSpace;


/**
 * Objects
 */
// MeshBasicMaterial
// const material = new THREE.MeshBasicMaterial();
// material.map = doorColorTexture;
// material.color = new THREE.Color('skyblue')
// material.wireframe = true;
// material.transparent = true;
// material.opacity = 0.2
// material.alphaMap = doorAlphaTexture;
// material.side = THREE.DoubleSide; // 双面

/**
 * MeshNormalMaterial
 */
// const material = new THREE.MeshNormalMaterial()
// material.flatShading = true

// MeshMatcapMaterial
// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcapTexture;

// MeshDepthMaterial
// const material = new THREE.MeshDepthMaterial();

// MeshLambertMaterial
// const material = new THREE.MeshLambertMaterial();

// MeshPhongMaterial
// const material = new THREE.MeshPhongMaterial();

// material.shininess = 100
// material.specular = new THREE.Color(0x1188ff)


// MeshToonMaterial 卡通着色效果
// const material = new THREE.MeshToonMaterial(); 
// // 当渐变纹理是一个非常小的纹理时，卡通效果不生效，gpu会将它进行拉伸
// gradientTexture.minFilter = THREE.NearestFilter
// gradientTexture.magFilter = THREE.NearestFilter
// gradientTexture.generateMipmaps = false

// // 用于卡通着色的渐变贴图
// material.gradientMap = gradientTexture;

// MeshStandardMaterial
// const material = new THREE.MeshStandardMaterial();
// material.metalness = 1 // 金属
// material.roughness = 1 // 粗糙度
// material.map = doorColorTexture; // 材料贴图
// material.aoMap = doorAmbientOcclusionTexture; // 环境光遮蔽图
// material.aoMapIntensity = 1 // 环境光遮蔽强度
// material.displacementMap = doorHeightTexture // 置换贴图
// material.displacementScale = 0.1 // 置换贴图对网格影响程度
// material.metalnessMap = doorMetalnessTexture; // 改变材料金属质感
// material.roughnessMap = doorRoughnessTexture; // 改变材料粗糙度
// material.normalMap = doorNormalTexture; // 法线贴图
// material.normalScale.set(0.5, 0.5);
// material.transparent = true;
// material.alphaMap = doorAlphaTexture; // 透明

// MeshPhysicalMaterial
const material = new THREE.MeshPhysicalMaterial();
material.metalness = 0 // 金属
material.roughness = 0 // 粗糙度
// material.map = doorColorTexture; // 材料贴图
// material.aoMap = doorAmbientOcclusionTexture; // 环境光遮蔽图
// material.aoMapIntensity = 1 // 环境光遮蔽强度
// material.displacementMap = doorHeightTexture // 置换贴图
// material.displacementScale = 0.1 // 置换贴图对网格影响程度
// material.metalnessMap = doorMetalnessTexture; // 改变材料金属质感
// material.roughnessMap = doorRoughnessTexture; // 改变材料粗糙度
// material.normalMap = doorNormalTexture; // 法线贴图
// material.normalScale.set(0.5, 0.5);
// material.transparent = true;
// material.alphaMap = doorAlphaTexture; // 透明

gui.add(material, 'metalness').min(0).max(1).step(0.0001);
gui.add(material, 'roughness').min(0).max(1).step(0.0001);

// Clearcoat
// material.clearcoat=1 // 清漆强度
// material.clearcoatRoughness = 0; // 粗糙度

// gui.add(material,'clearcoat').min(0).max(1).step(0.0001);
// gui.add(material,'clearcoatRoughness').min(0).max(1).step(0.0001);

// Sheen
// material.sheen = 1; // 光泽强度 常用于布料或针织材料
// material.sheenRoughness = 0.25 // 粗糙度
// material.sheenColor.set(1, 1, 1)

// gui.add(material,'sheen').min(0).max(1).step(0.0001);
// gui.add(material,'sheenRoughness').min(0).max(1).step(0.0001);

// Iridescence 彩虹、激光影碟等
// material.iridescence = 1 // 虹彩层的强度
// material.iridescenceIOR = 1 // 虹彩RGB颜色偏移效果的强度，用折射率表示。介于1.0至之间2.333。
// material.iridescenceThicknessRange = [100, 800] //包含两个元素的数组，分别指定虹彩层的最小和最大厚度

// Transmission
material.transmission = 1
material.ior = 1.5
material.thickness = 0.5

gui.add(material, 'transmission').min(0).max(1).step(0.0001)
gui.add(material, 'ior').min(1).max(10).step(0.0001)
gui.add(material, 'thickness').min(0).max(1).step(0.0001)

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    material,
);

sphere.position.x = -1.5;

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1, 100, 100),
    material,
);

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 64, 128),
    material,
);
torus.position.x = 1.5;
scene.add(sphere, plane, torus);

/**
 * Lights
 */
// const ambientLight = new THREE.AmbientLight(0xffffff, 1) // 均匀照亮场景所有物体，没有阴影
// scene.add(ambientLight);

// // 一种从单点向四面八方发光的光源。其常见用途是模拟裸露灯泡发出的光。
// const pointLight = new THREE.PointLight(0xffffff, 30)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

/**
 * 场景图
 */
const rgbeLoader = new RGBELoader()
rgbeLoader.load('./textures/environmentMap/2k.hdr', (environmentMap) => {
    environmentMap.mapping = THREE.EquirectangularReflectionMapping;

    scene.background = environmentMap;
    scene.environment = environmentMap
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()

    sphere.rotation.y = 0.1 * elapsedTime;
    plane.rotation.y = 0.1 * elapsedTime;
    torus.rotation.y = 0.1 * elapsedTime;

    sphere.rotation.x = 0.15 * elapsedTime;
    plane.rotation.x = 0.15 * elapsedTime;
    torus.rotation.x = 0.15 * elapsedTime;

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()