let alunos = ["Renato", "Bernardo", "Cecilia"];

let cadeiras = [
    [`B2`, `B4`, `B6`, `B8`],
    [`D2`, `D4`, `D6`, `D8`],
    [`F2`, `F4`, `F6`, `F8`]
  
];

console.log(alunos);
for(let i = 0; i< alunos.length;i++){
    console.log(`aluno ${i+1}: ${alunos[i]}`);
}

for(let i = 0;i < cadeiras.length; i++){
    for(let y = 0;y < cadeiras[i].length;y++){
        console.log(`posição [${i}][${y}]: ${cadeiras[i][y]}`);
    }
    console.log("\n");
}
