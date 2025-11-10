## 纹理


### PDR原则
PBR是Physically Based Rendering（基于物理的渲染）的缩写。它整合了许多旨在遵循现实规律以获得逼真效果的技术。
- https://marmoset.co/posts/basic-theory-of-physically-based-rendering/
- https://marmoset.co/posts/physically-based-rendering-and-you-can-too/

### TextureLoader
纹理加载器，一个实例可加载多个纹理

### LoadingManager 监听加载的数据
https://threejs.org/docs/index.html?q=loadingM#LoadingManager

### UV展开
你可以想象成把折纸或糖纸展开成平面。每个顶点都会在一个平面（通常是正方形）上有一个二维坐标。
```geometry.attributes.uv``` 可以拿到uv坐标

### 为什么放大纹理会模糊？
这是由于filtering和 mipmapping 造成的。

Mipmapping（或“mip mapping”，中间留一个空格）是一种技术，它通过不断创建纹理的缩小一半，直到得到一个 1x1 的纹理。所有这些纹理变体都会被发送到 GPU，GPU 会选择最合适的纹理版本。

Three.js 和 GPU 已经处理了所有这些，你只需要设置要使用的过滤算法即可。过滤算法有两种类型：缩小过滤和放大过滤。

### minFilter
当纹理的像素小于渲染表面的像素时，就会触发缩小滤镜。换句话说，纹理对于它所覆盖的表面来说太大了。

你可以使用该属性更改纹理的缩小过滤器minFilter。

共有 6 个可能的值：

THREE.NearestFilter
THREE.LinearFilter
THREE.NearestMipmapNearestFilter
THREE.NearestMipmapLinearFilter
THREE.LinearMipmapNearestFilter
THREE.LinearMipmapLinearFilter


仅对属性使用 mipmap minFilter。如果您使用的是THREE.NearestFilter，则不需要 mipmap，您可以使用以下命令禁用它们colorTexture.generateMipmaps = false;

这样可以稍微减轻GPU的负担。

### maxFilter
放大滤镜的工作原理与缩小滤镜类似，但适用于纹理的像素大于渲染对象的像素的情况。换句话说，就是纹理对于它所覆盖的表面来说太小了。

### 尺寸
你的纹理宽度和高度必须是 2 的幂。这是强制性的，因为 Three.js 需要将纹理大小除以 2。如果您使用的纹理的宽度或高度不是 2 的幂次方值，Three.js 将尝试将其拉伸到最接近的 2 的幂次方，这可能会产生视觉效果不佳的结果，并且您还会在控制台中收到警告。