
- Gerenciar Vagas
```
INICIO
	vagas[]
	totalHoras[]
	escolha vaga X
	ESCREVA "Informe a Hora"
	LEIA hora
	SE vaga[x] == NÃO OCUPADA
	  vaga[x] = hora
	SE NAO
	  intervalo = hora - vaga[x]
	  totalHoras[x] = intervalo
	  vaga[x] = NÃO OCUPADA 
FIM

Inicio

vagas = [1, 2, 3, 4, 5, 6];

horasTotal;
somarTempodeEstacionamento;


entrada = "selecione uma das vagas: " 

aoClicar entrada.vagas.atual{
	
	se disponivel{
	    ocupar vaga;
	    backgrauend = red;
	    horaEntrada = escreva( "escreva a hora de entrada");

	}se não Disponivel{
	    desocupar vaga;
  	    backgrauend = "none";
	    horaSaida -= escreva( "horasVagas escreva a hora de saida");

	 }
 }

horaTotatl = horaSaida - horaEntrada;
paraTodasAsVagas.loop{
somarTempodeEstacionamento += horasTotal.atual;
}

Fim

