import * as THREE from "three";

const geometry = new THREE.SphereGeometry(50, 32, 16);

const texLoader = new THREE.TextureLoader();
// 11 .load（）方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('/less02/assets/erth2.jpg');

console.log("texture:", texture);
const material = new THREE.MeshLambertMaterial({
    // color: 0x00ffff,
    // 设置纹理贴图：Texture对象作为材质map属性的属性值
    // map: texture,//map表示材质的颜色贴图属性
    // wireframe: true
})

// geometry.translate(200, 100, 0);

material.map = texture;
const mesh = new THREE.Mesh(geometry, material);
export default mesh;