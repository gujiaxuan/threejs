## 创建几何体和群组、调整位置等。

### 创建一个几何体

我们需要几样东西：
- 场景 scene
- 网格 mesh
- 相机 camera

### Group
我们可以创建一个群组，放入多个几何体，比如想要旋转它们的时候不需要一个一个去操作，直接操作group就行。

### 万向节锁定
在旋转几何体时，可能会出现两条轴重合的情况，导致不能调整重合中的某一条轴。
```js
    // 可以通过reorder来指定操作轴顺序
    mesh.rotation.reorder('YXZ') 
```

### 展示坐标轴
```js
// 展示坐标轴  x => red  y => green  z => blue
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
```