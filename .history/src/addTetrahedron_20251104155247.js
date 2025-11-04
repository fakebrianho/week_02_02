import * as THREE from 'three'

export const addSphereMeshes = () => {
	const geometry = new THREE.TetrahedronGeometry()

	const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
	const mesh = new THREE.Mesh(geometry, material)
	return mesh
}
