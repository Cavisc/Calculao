/* eslint-disable require-yield, eqeqeq */

import {
    Stage as StageBase,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  export default class Stage extends StageBase {
    constructor(...args) {
      super(...args);
  
      this.costumes = [
        new Costume("cenário1", "./Stage/costumes/cenário1.svg", {
          x: 239.5,
          y: 181.1999969482422
        })
      ];
  
      this.sounds = [new Sound("saltar", "./Stage/sounds/saltar.wav")];
  
      this.triggers = [];
  
      this.vars.num1 = 0;
      this.vars.num2 = 0;
      this.vars.resultado = 0;
    }
  }
  