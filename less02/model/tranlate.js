import * as THREE from "three";

const geometry = new THREE.BoxGeometry(100,100,100);

const material = new THREE.MeshLambertMaterial({
	color: 0xffff00,
	// wireframe: true
});

const mesh = new THREE.Mesh(geometry, material);

// 这里改变了geometry模型的旋转坐标，本来是围绕中心旋转，现在将旋转的中心在x轴上向外移动了50
// 这里还有一点必须注意：就是改变的是geometry的translate而不是mesh网格模型的偏移量
geometry.translate(100/2, 0,0)

export default mesh;