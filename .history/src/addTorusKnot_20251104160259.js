import * as THREE from 'three'

export const addTorusKnot = (xPos = 0, yPos = 0, zPos = 0) => {
	const geometry = new THREE.TorusKnotGeometry(0.4, 0.1, 100, 8)
	const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
	const mesh = new THREE.Mesh(geometry, material)
	mesh.position.set(xPos, yPos, zPos)
	return mesh
}
