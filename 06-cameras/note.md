## 使用透视相机、正交相机、鼠标控制相机朝向、内置控件

### PerspectiveCamera 透视相机
参数：
- 视野，垂直幅度，角度较小就会产生长焦效果，角度较广就会禅师鱼眼效应，会压缩或拉伸画布
- 长宽比
- 后两个参数用来设置相机可视范围。

### OrthographicCamera 正交相机
- 无论物体与相机距离如何，物体的大小都相同。
- left，right，top，bottom。

### 实现相机围绕几何体旋转一周
在三维空间想要水平旋转实际上是改变x轴和z轴，如果只改变x轴看起就是左右移动而已。
圆周长 ➗ 直径 = π；
周长 = 2πr(2*π*半径);
```js
 Math.sin(cursor.x * Math.PI * 2) * 3
```

#### 内置控件 OrbitControls
https://threejs.org/docs/?q=OrbitControls#OrbitControls
这个就是我们上面实现的效果。

#### 阻尼效果
设置enableDamping为true，要记得在每一帧动画前update