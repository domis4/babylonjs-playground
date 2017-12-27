import * as BABYLON from 'babylonjs';
import 'purecss';
import "./index.css";

const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);
const light = new BABYLON.PointLight("light", new BABYLON.Vector3(10, 10, 0), scene);

const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;

const fpsElement = document.getElementById("fps");
const deltaElement = document.getElementById("delta");

const renderLoop = function () {
  scene.render();
  box.rotation.y -= 0.0004 * clock.getDelta();
  fpsElement.innerHTML = engine.getFps().toFixed() + " fps";
  deltaElement.innerHTML = clock.getDelta() + " delta";
};
engine.runRenderLoop(renderLoop);

var clock = {
  before: performance.now(),
  getDelta: function () {
    var now = performance.now()
    var delta = now - this.before
    this.before = now
    return delta
  }
}
