## 实现全屏和自适应画布及兼容safair

### document.fullscreenElement
是否有元素全屏

### requestFullscreen 
进入全屏

### exitFullscreen
退出

### 设置像素比
setPixelRatio
使用window.devicePixelRatio获取当前显示器像素比
通过Math.min设置自适应像素比，通常最大给2就可以了

### 更新相机矩阵
在更新宽高比之后调用updateProjectionMatrix更新相机矩阵
通常初始化之后修改相机任何属性都要使用updateProjectionMatrix更新。