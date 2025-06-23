import * as THREE from 'three';

// Очистити попередні Mesh'і (на всяк випадок)
if (window.currentMeshes) {
    window.currentMeshes.forEach(obj => { if (obj.mesh && window.scene) window.scene.remove(obj.mesh); });
    window.currentMeshes = [];
}

// Маска
const texture = new THREE.TextureLoader().load('./masks/m10.png');
const maskMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
const faceMesh = window.mindarThree.addFaceMesh();
faceMesh.material = maskMaterial;
faceMesh.scale.set(0.9, 1.0, 1.0);
faceMesh.position.set(0, 0.1, 0);
faceMesh.visible = window.meshVisibility.mask;
window.scene.add(faceMesh);

// Квамі
const kwamiTexture = new THREE.TextureLoader().load('./kwami/k10.png');
const kwamiGeometry = new THREE.PlaneGeometry(0.2, 0.2);
const kwamiMaterial = new THREE.MeshBasicMaterial({ map: kwamiTexture, transparent: true });
const kwamiMesh = new THREE.Mesh(kwamiGeometry, kwamiMaterial);
kwamiMesh.position.set(0.25, 0.18, 0.3); // Підбери координати!
kwamiMesh.visible = window.meshVisibility.kwami;
window.scene.add(kwamiMesh);

// Прикраса
const dopTexture = new THREE.TextureLoader().load('./dop/10.png');
const dopGeometry = new THREE.PlaneGeometry(0.15, 0.15);
const dopMaterial = new THREE.MeshBasicMaterial({ map: dopTexture, transparent: true });
const dopMesh = new THREE.Mesh(dopGeometry, dopMaterial);
dopMesh.position.set(-0.2, 0.15, 0.25); // Підбери координати!
dopMesh.visible = window.meshVisibility.dop;
window.scene.add(dopMesh);

// Додаємо всі Mesh'і у глобальний масив для керування видимістю
window.currentMeshes = [
    { mesh: faceMesh, type: 'mask' },
    { mesh: kwamiMesh, type: 'kwami' },
    { mesh: dopMesh, type: 'dop' }
];