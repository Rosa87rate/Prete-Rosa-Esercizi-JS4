
/* let arrayA = [];
let arrayB= [];


/* METODO PER GENEARE NUMERI RANDOM
*/

/* function numrandom(array,){
    for (i =1; i<=10; i++){
        let numR= Math.floor(Math.random() * 10);
        array.push(numR)
        
        
    }
    return array
}
 console.log( numrandom(arrayA));
 console.log(numrandom(arrayB)); */
  
 /* //SOMMA TRA I DATI DEI DUE ARRAY

 let arrayRes = [];

 for (i =0; i< arrayA.length; i++){
    arrayRes [i] = arrayA[i] + arrayB[i]
    
    
}
console.log(arrayRes);
 */

/* //SOTTRAZIONE
let arrayRes = [];

for (i =0; i< arrayA.length; i++){
    arrayRes [i] = arrayA[i] - arrayB[i]
}

console.log(arrayRes); */

//MOLTIPLICAZIONE

/* let arrayRes = [];

for (i =0; i< arrayA.length; i++){
    arrayRes [i] = arrayA[i] * arrayB[i]
}

console.log(arrayRes); */

//DIVISIONE

/* let arrayRes = [];

for (i =0; i< arrayA.length; i++){
    arrayRes [i] = arrayA[i] % arrayB[i]
}

console.log(arrayRes);
 */ 

//SECONDO ESERCIZIO
//somma elementi array con metodo reduce
/* let array = [3,5,10,2,8]
let red = array.reduce((acc, num)=> acc + num);


//calcolo media
let media = red/array.length;
console.log(`la media è ${media}`);

//min e max
let min = array.filter(num => num < media);
console.log(`I valori minori sono ${min}`);


let max = array.filter(num => num > media);
console.log(`I valori maggiori sono ${max}`);
 */

//TERZO ESERCIZIO

/* let array = [10,20,30,40];

//FUNZIONE SOMMA
let arraysomma = array.reduce((acc, num )=> acc+ num);
console.log(`La somma dei valori interni dell'array è ${arraysomma}`);



 */

//ESERCIZIO 4

let mixArray = [1,true, "hackademy", 100, "Javascript", false, null, "php"];
let arrayparole = mixArray.filter(valore => typeof valore == "string");
console.log(arrayparole);


    

 
 
