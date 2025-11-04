import * as THREE from 'three'

export const addTorusKnot = () => {
	const geometry = new THREE.TorusKnotGeometry(0.2, 3, 10, 8)
	const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}
