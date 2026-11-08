const stationWorldPosition = new THREE.Vector3(15, 1, 0);
const shiipWorldPosition = new THREE.Vector3(10, 0, 6);

let j = stationWorldPosition.worldToLocal(shiipWorldPosition);
console.log("position j is :", j);