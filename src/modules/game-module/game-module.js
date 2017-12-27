import * as BABYLON from 'babylonjs';
import clock from '../clock/clock';

export default class GameModule {
  constructor (engine, canvas) {
    this.engine = engine
    this.canvas = canvas

    this.scene = new BABYLON.Scene(this.engine);
    this.scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);

    this.camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), this.scene);
    this.camera.attachControl(this.canvas, true);

    this.light = new BABYLON.PointLight("light", new BABYLON.Vector3(10, 10, 0), this.scene);
    this.fpsElement = document.getElementById("fps");
    this.deltaElement = document.getElementById("delta");

    this.box = BABYLON.Mesh.CreateBox("box", 2, this.scene);
    const boxMaterial = new BABYLON.StandardMaterial("material", this.scene);
    boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
    this.box.material = boxMaterial;

    window.addEventListener('resize', function(){
      engine.resize();
    });
  }

  render () {
    this.scene.render();
    this.box.rotation.y -= 0.0004 * clock.getDelta();
    const fps = this.engine.getFps().toFixed();
    const delta = clock.getDelta();
    this.fpsElement.innerHTML = `FPS: ${fps}`;
    this.deltaElement.innerHTML = `DELTA: ${delta}`;
  }
} 
