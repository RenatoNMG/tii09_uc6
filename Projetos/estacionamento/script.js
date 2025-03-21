let elementosVagas =  document.querySelectorAll(".vaga");
let infoElementos = document.querySelectorAll(".resumo div");
let vagas = [null, null, null, null, null, null, null, null, null, null];
let totalHoras = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ResultadoTexto = document.getElementById("resultado");



elementosVagas.forEach((vaga, i) =>{
    vaga.addEventListener("click", ()=> gerenciaVaga(i));
});

function gerenciaVaga(numeroDaVaga){
    let hora = parseInt(prompt("Informe a Hora(Somente numero inteiro):"));

    if(isNaN(hora) || hora < 0 || hora > 23) {
        alert("Hora inválida");
        return;
    }


    if (vagas[numeroDaVaga] === null){
        vagas[numeroDaVaga] = hora;
        elementosVagas[numeroDaVaga].classList.add("ocupado");
    }else{
        if(hora < vagas[numeroDaVaga]){
            alert("hora de saida não pode ser menor que a de entrada");
            return;
        }
        totalHoras[numeroDaVaga] += hora - vagas[numeroDaVaga];
        vagas[numeroDaVaga] = null;
        elementosVagas[numeroDaVaga].classList.remove("ocupado");
    }
    atualizarInfo();

}

function atualizarInfo() {
    for(let i = 0; i< 10;i++){
        infoElementos[i].innerHTML= `vaga ${i + 1}: ${totalHoras[i]}h`;
    }

}