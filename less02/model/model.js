import * as THREE from "three";

const geometry = new THREE.SphereGeometry(50, 32, 16);

const material = new THREE.MeshLambertMaterial({
	color: 0xffff00,
	wireframe: true
});

const mesh = new THREE.Mesh(geometry, material);

mesh.material.color.set(0xff00ff)

const mesh2 = mesh.clone();
mesh2.position.set(200, 100, 0);

// const mesh3 = mesh2.copy(mesh)
export { mesh, mesh2 };