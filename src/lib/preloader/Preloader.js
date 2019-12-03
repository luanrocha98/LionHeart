"use strict";
/**
 * Classe responsável por controlar o carregamento de qualquer coisa
 * A classe pode receber um peso para cada tick do carregamento
 * e pode receber  uma função para ser executada em cada tick
 *
 * O preloader também pode guardar a posição de falhas de carregamento.
 */
class Preloader {
    constructor(power = 1) {
        this._loader = 0; // porcentagem atual de carregamento
        this._failAt = 0; // em que porcentagem de carregamento falhou
        this.power = power;
        this.onIncrement = (loader) => { return; };
    }
    /**
     * Retorna o valor de carregamento do preloader em porcentagem
     * Arredondado pra cima
     */
    get loader() {
        return Math.round(this._loader);
    }
    set loader(value) {
        if (value >= 0)
            this._loader = value;
    }
    /**
     * Retorna em que parte do carregamento ocorreu uma falha
     */
    get failAt() {
        return this._failAt;
    }
    /**
     * Determina o momento atual de carregamento como falha
     */
    fail() {
        this._failAt = this._loader;
    }
    increment(n = 1) {
        if (n > 0)
            this._loader += this.power * n;
        this._onIncrement(this.loader);
    }
    set onIncrement(callback) {
        this._onIncrement = callback;
    }
}
