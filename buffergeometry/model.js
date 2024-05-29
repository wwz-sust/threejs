import * as THREE from "three";

const geometry = new THREE.BufferGeometry();

const vertices = new Float32Array([
    0,0,0,
    200,0,0,
    0,200,0,
    0,0,200,
    200,200,200
]);

const attribute = new THREE.BufferAttribute(vertices, 3);

geometry.setAttribute("position", attribute);


const material = new THREE.PointsMaterial({
    color: 0x0000ff,
    size: 10
});

const points = new THREE.Points(geometry,material);


export default points;