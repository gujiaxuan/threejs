## 调试面板

### lil-gui
https://lil-gui.georgealways.com

### add
参数：
- Object
- object中的属性名
- min
- max
- step

### addColor
处理颜色稍微复杂一些。我们来尝试修改该color属性material。

首先，我们需要使用 ` addColor(...)T` 而不是`T`，add(...)因为该color属性不是字符串、布尔值或数字。它是一个包含各种属性的对象，因为它是 Three.js Color类的一个实例。这些属性包括 `color` r、 `color`g和b`color`

### 从面板中获取颜色值并应用到color属性颜色不一样
这是因为 Three.js 为了优化渲染效果，应用了一些颜色管理机制。因此，调整设置中显示的颜色值与内部使用的颜色值并不相同。

1、https://threejs.org/docs/?q=color#Color.getHexString 
2、引用一个外部对象。