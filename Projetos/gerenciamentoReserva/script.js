let reservas = [];

// adicionar reserva

function adicionarReserva(){
    let nome = document.getElementById("nome").value;
    let data = document.getElementById("data").value;

    console.log(` nova reserva adicionada para ${nome} no dia ${data}`);


    if(nome === ""  || data === ""){

        alert("Preencha todos os Campos");
        return;
    }

    let novaReserva = {nome, data}

    reservas.push(novaReserva);

    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";

   

    atualizarListaReservas();
    
}
// remocer reserva

function removerReserva(index){
    reservas.splice(index, 1);
    atualizarListaReservas();

}
function atualizarListaReservas(){
         let lista = document.getElementById("listareservas");
    lista.innerHTML = "";

    reservas.forEach((reserva, index) =>{
        let li = document.createElement("li");
        li.innerHTML = `${reserva.nome} ${reserva.data} <button onclick="removerReserva(${index})" class="btnlista">x</button>`;
        lista.appendChild(li);
    })
}