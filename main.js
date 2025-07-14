'use strict';

const nomeInput = document.getElementById("nome");
const xpInput = document.getElementById("xp");
const text = document.getElementById("resposta");




function nivel() {
    const nome = nomeInput.value;
    const xp = parseInt(xpInput.value);

    if (nome === "") {
        text.textContent = " Por favor, insira o seu nome herói.";
        return;
    }

    if (isNaN(xp) || xp < 0) {
        text.textContent = " Por favor, insira um XP válido (número positivo).";
        return;
    }
    let medal = "";

    if (xp <= 1000) {
        medal = "Ferro";
    } else if (xp <= 2000) {
        medal = "Bronze";
    } else if (xp <= 5000) {
        medal = "Prata";
    } else if (xp <= 7000) {
        medal = "Ouro";
    } else if (xp <= 8000) {
        medal = "Platina";
    } else if (xp <= 9000) {
        medal = "Ascendente";
    } else if (xp <= 10000) {
        medal = "Imortal";
    } else {
        medal = "Radiante";
    }

    text.textContent = `Parabéns ${nome}, seu nível é: ${medal}. Total de XP: ${xp}`;
}
