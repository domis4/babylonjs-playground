import * as BABYLON from 'babylonjs';
import clock from './modules/clock/clock'
import GameModule from './modules/game-module/game-module'
import 'purecss';
import "./index.css";
const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas);

const gameModule = new GameModule(engine, canvas)

const renderLoop = function () {
  gameModule.render()
};

engine.runRenderLoop(renderLoop);
