// 设置设备像素比，默认配置 只要写threejs都加上这个
renderer.setPixelRatio(window.devicePixelRatio);

// 抗锯齿 antialias
var renderer = new THREE.WebGLRenderer({
    antialias: true // 这里开启就行
});
