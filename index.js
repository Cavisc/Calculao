import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Calculao from "./Calculao/Calculao.js";

const stage = new Stage({ costumeNumber: 1 });

const titulo = document.querySelector('#titulo');
const texto = 'App do Calculão';
let i = 0;
const digita = () => {
  titulo.textContent = texto.slice(0, i++);
}

setInterval(digita, 150);

const sprites = {
  Calculao: new Calculao({
    x: 0,
    y: 20,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
