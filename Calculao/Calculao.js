/* eslint-disable require-yield, eqeqeq */

const redFlag = document.querySelector('#redFlag');
let ok = 1;

import {
    Sprite,
    Trigger,
    Watcher,
    Costume,
    Color,
    Sound
  } from "https://unpkg.com/leopard@^1/dist/index.esm.js";
  
  export default class Calculao extends Sprite {
    constructor(...args) {
      super(...args);
  
      this.costumes = [
        new Costume("calculadora-0", "./Calculao/costumes/calculadora-0.png", {
          x: 180,
          y: 180
        }),
        new Costume("calculadora-1", "./Calculao/costumes/calculadora-1.png", {
          x: 180,
          y: 180
        }),
        new Costume("calculadora-2", "./Calculao/costumes/calculadora-2.png", {
          x: 180,
          y: 180
        }),
        new Costume("calculadora-3", "./Calculao/costumes/calculadora-3.png", {
          x: 180,
          y: 180
        }),
        new Costume("calculadora-4", "./Calculao/costumes/calculadora-4.png", {
          x: 180,
          y: 180
        }),
        new Costume("calculadora-5", "./Calculao/costumes/calculadora-5.png", {
          x: 180,
          y: 180
        })
      ];
  
      this.sounds = [];
  
      this.triggers = [
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
        new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
      ];
    }
  
    *whenGreenFlagClicked() {
      yield* this.wait(2);
      yield* this.sayAndWait("Oi!", 1);
      yield* this.sayAndWait("Sou o Calculão!", 1.5);
      while (ok == 1) {
        this.stage.vars.num1 = "";
        this.stage.vars.num2 = "";
        this.stage.vars.resultado = "";
        yield* this.askAndWait("Qual a operação desejada?");
        if (this.answer == 1) {
          yield* this.askAndWait("Qual o primeiro número?");
          this.stage.vars.num1 = parseInt(this.answer);
          yield* this.askAndWait("Qual o segundo número?");
          this.stage.vars.num2 = parseInt(this.answer);
          this.stage.vars.resultado = this.stage.vars.num1 + this.stage.vars.num2;
          yield* this.sayAndWait(
            "" + "O resultado é: " + this.stage.vars.resultado,
            5
          );
        } else {
          if (this.answer == 2) {
            yield* this.askAndWait("Qual o primeiro número?");
            this.stage.vars.num1 = this.answer;
            yield* this.askAndWait("Qual o segundo número?");
            this.stage.vars.num2 = this.answer;
            this.stage.vars.resultado =
              this.stage.vars.num1 - this.stage.vars.num2;
            yield* this.sayAndWait(
              "" + "O resultado é: " + this.stage.vars.resultado,
              5
            );
          } else {
            if (this.answer == 3) {
              yield* this.askAndWait("Qual o primeiro número?");
              this.stage.vars.num1 = this.answer;
              yield* this.askAndWait("Qual o segundo número?");
              this.stage.vars.num2 = this.answer;
              this.stage.vars.resultado =
                this.stage.vars.num1 * this.stage.vars.num2;
              yield* this.sayAndWait(
                "" + "O resultado é: " + this.stage.vars.resultado,
                5
              );
            } else {
              if (this.answer == 4) {
                yield* this.askAndWait("Qual o primeiro número?");
                this.stage.vars.num1 = this.answer;
                yield* this.askAndWait("Qual o segundo número?");
                this.stage.vars.num2 = this.answer;
                this.stage.vars.resultado =
                  this.stage.vars.num1 / this.stage.vars.num2;
                yield* this.sayAndWait(
                  "" + "O resultado é: " + this.stage.vars.resultado,
                  5
                );
              } else {
                if (this.answer == 5) {
                  yield* this.askAndWait("Qual o número?");
                  this.stage.vars.num1 = this.answer;
                  this.stage.vars.resultado = Math.sqrt(this.stage.vars.num1);
                  yield* this.sayAndWait(
                    "" + "O resultado é: " + this.stage.vars.resultado,
                    5
                  );
                } else {
                  if (this.answer == 6) {
                    yield* this.askAndWait("Qual o número?");
                    this.stage.vars.num1 = this.answer;
                    this.stage.vars.resultado = Math.log10(this.stage.vars.num1);
                    yield* this.sayAndWait(
                      "" + "O resultado é: " + this.stage.vars.resultado,
                      5
                    );
                  } else {
                    if (this.answer == 7) {
                      yield* this.askAndWait("Qual o número?");
                      this.stage.vars.num1 = this.answer;
                      this.stage.vars.resultado = 10 ** this.stage.vars.num1;
                      yield* this.sayAndWait(
                        "" + "O resultado é: " + this.stage.vars.resultado,
                        5
                      );
                    } else {
                      if (this.answer == 8) {
                        yield* this.askAndWait("Quantos graus?");
                        this.stage.vars.num1 = this.answer;
                        this.stage.vars.resultado = Math.round(Math.sin(
                          this.degToRad(this.stage.vars.num1)
                        ));
                        yield* this.sayAndWait(
                          "" + "O seno é: " + this.stage.vars.resultado,
                          5
                        );
                      } else {
                        if (this.answer == 9) {
                          yield* this.askAndWait("Quantos graus?");
                          this.stage.vars.num1 = this.answer;
                          this.stage.vars.resultado = Math.round(Math.cos(
                            this.degToRad(this.stage.vars.num1)
                          ));
                          yield* this.sayAndWait(
                            "" + "O cosseno é: " + this.stage.vars.resultado,
                            5
                          );
                        } else {
                          if (this.answer == 10) {
                            yield* this.askAndWait("Quantos graus?");
                            this.stage.vars.num1 = this.answer;
                            this.stage.vars.resultado = Math.round(Math.tan(
                              this.degToRad(this.stage.vars.num1)
                            ));
                            yield* this.sayAndWait(
                              "" + "A tangente é: " + this.stage.vars.resultado,
                              5
                            );
                          } else {
                            if (this.answer == 11) {
                              yield* this.askAndWait("Quantos graus?");
                              this.stage.vars.num1 = this.answer;
                              this.stage.vars.resultado = parseFloat(
                                this.radToDeg(Math.asin(this.stage.vars.num1))
                              );
                              yield* this.sayAndWait(
                                "" +
                                  "O arcseno é: " +
                                  parseFloat(this.stage.vars.resultado),
                                5
                              );
                            } else {
                              if (this.answer == 12) {
                                yield* this.askAndWait("Quantos graus?");
                                this.stage.vars.num1 = this.answer;
                                this.stage.vars.resultado = this.radToDeg(
                                  Math.acos(this.stage.vars.num1)
                                );
                                yield* this.sayAndWait(
                                  "" +
                                    "O arccosseno é: " +
                                    this.stage.vars.resultado,
                                  5
                                );
                              } else {
                                if (this.answer == 13) {
                                  yield* this.askAndWait("Quantos graus?");
                                  this.stage.vars.num1 = this.answer;
                                  this.stage.vars.resultado = Math.round(this.radToDeg(
                                    Math.atan(this.stage.vars.num1)
                                  ));
                                  yield* this.sayAndWait(
                                    "" +
                                      "A arctangente é: " +
                                      this.stage.vars.resultado,
                                    5
                                  );
                                } else {
                                  yield* this.sayAndWait("Opção inválida!", 3);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        yield* this.askAndWait(
          "Deseja fazer outra operação? Digite s para sim ou n para não."
        );
        if (this.answer == "n") {
          yield* this.sayAndWait("Ok, até mais!", 1);
          this.costume = "calculadora-0";
          yield* this.wait(0.05);
          this.costume = "calculadora-1";
          yield* this.wait(0.09);
          this.costume = "calculadora-2";
          yield* this.wait(0.09);
          this.costume = "calculadora-3";
          yield* this.wait(0.09);
          this.costume = "calculadora-4";
          yield* this.wait(0.09);
          this.costume = "calculadora-5";
          yield* this.wait(1);
          this.costume = "calculadora-5";
          yield* this.wait(0.09);
          this.costume = "calculadora-4";
          yield* this.wait(0.09);
          this.costume = "calculadora-3";
          yield* this.wait(0.09);
          this.costume = "calculadora-2";
          yield* this.wait(0.09);
          this.costume = "calculadora-1";
          yield* this.wait(0.09);
          this.costume = "calculadora-0";
          /* TODO: Implement stop all */ break;
        }
        yield;
        redFlag.addEventListener('click', () => {
            ok = 0;
        })
      }
    }
  
    *whenGreenFlagClicked2() {
      yield* this.wait(2);
      this.costume = "calculadora-0";
      yield* this.wait(0.05);
      this.costume = "calculadora-1";
      yield* this.wait(0.09);
      this.costume = "calculadora-2";
      yield* this.wait(0.09);
      this.costume = "calculadora-3";
      yield* this.wait(0.09);
      this.costume = "calculadora-4";
      yield* this.wait(0.09);
      this.costume = "calculadora-5";
      yield* this.wait(1);
      this.costume = "calculadora-5";
      yield* this.wait(0.09);
      this.costume = "calculadora-4";
      yield* this.wait(0.09);
      this.costume = "calculadora-3";
      yield* this.wait(0.09);
      this.costume = "calculadora-2";
      yield* this.wait(0.09);
      this.costume = "calculadora-1";
      yield* this.wait(0.09);
      this.costume = "calculadora-0";
    }
  }
  