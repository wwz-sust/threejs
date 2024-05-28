import * as THREE from "three";

const material = new THREE.LineBasicMaterial({color: 0x00ffff});

const points = [];
points.push(new THREE.Vector3(-100, -70, 0));
points.push(new THREE.Vector3(0, 100, 0));
points.push(new THREE.Vector3(100, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

export default line;