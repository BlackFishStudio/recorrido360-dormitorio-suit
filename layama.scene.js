// Created with Motiva Layama v1.22 LITE https://www.motivacg.com

function getLayamaCameras()
{
   var layamaCameras = new BABYLON.SmartArray(0);
   layamaCameras.push({n: "DORMITORIO0000", a: "PhysCamera_Dor_Inicial", p: new BABYLON.Vector3(-486.096, 495.128, -251.627), l: new BABYLON.Vector3(-486.096, 495.128, -252.627)});
   layamaCameras.push({n: "DORMITORIO0001", a: "PhysCamera003", p: new BABYLON.Vector3(-672.353, 495.128, -268.017), l: new BABYLON.Vector3(-672.353, 495.128, -269.017)});
   layamaCameras.push({n: "DORMITORIO0002", a: "PhysCamera004", p: new BABYLON.Vector3(-663.083, 495.128, -460.662), l: new BABYLON.Vector3(-663.083, 495.128, -461.662)});
   layamaCameras.push({n: "DORMITORIO0003", a: "PhysCamera005", p: new BABYLON.Vector3(-544.682, 495.128, -457.876), l: new BABYLON.Vector3(-544.682, 495.128, -458.876)});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = new BABYLON.SmartArray(0);
   layamaResolutions.push("1500");
   layamaResolutions.push("1024");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: true, defRot: 1, altMove: true, altRot: 2};
}

