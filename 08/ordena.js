
let = numeros = [40, 10, 30, 20, 50];

function bubbleSort(array){

    for(let i = 0;i < array.length -1;i++){

        if (array[i] > array[i + 1]) { // troco eles de lugar            
            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }

    }

    


    return array;
}



// saida
console.log(bubbleSort(numeros));