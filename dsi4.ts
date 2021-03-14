// EJERCICIO 1 ---------
function standard(color: string): number {
    color = color.toLowerCase();
    switch(color){
        case 'negro': return 0;
        case 'marron': return 1;
        case 'rojo': return 2;
        case 'naranja': return 3;
        case 'amarillo': return 4;
        case 'verde': return 5;
        case 'azul': return 6;
        case 'violeta': return 7;
        case 'gris': return 8;
        case 'blanco': return 9;
    }

}

function decodeResistor(colores: string): number {
    let resultadostring: string = '';
    //let resultado: number = 0;
    let colors: string[] = colores.split('-');
    if (colors.length == 1){
        resultadostring += 0;
        resultadostring += standard(colors[0]);
    } else {
        resultadostring += standard(colors[0]);
        resultadostring += standard(colors[1]);
    }
    return +resultadostring;
}

console.log("Colores: " + decodeResistor('violeta-marron-naranja'));

// ---------------------------------------------------------------------------
// EJERCICIO 2


//----------------------------------------------------------------------------
// EJERCICIO 3
function meanAndConcatenate (cadena: (number|string)[]):(number|string)[] {
    let nnumbers: number = 0;
    let result_number: number = 0;
    let cadena_aux: string = '';
    let resultado: (number|string)[] = [];
    cadena.forEach((item: number | string) => {
        if (typeof item === "number") {
            result_number += item;
            nnumbers++;
        } else if (typeof item === "string"){
            cadena_aux += item;
        }     
    });

    resultado.push(result_number/nnumbers);
    resultado.push(cadena_aux);
    
    return resultado; 
}

let entrada: (number|string)[] = ['u', 6, 'd', 1, 'i', 'w', 6, 's', 't', 4, 'a', 6, 'g', 1, 2, 'w', 8, 'o', 2, 0];

console.log(meanAndConcatenate(entrada));

//----------------------------------------------------------------------------
// EJERCICIO 4
function moveZeros (numeros: number[]):number[] {
let contador: number = 0;
numeros.forEach((value, index) => {
    if(value === 0){
        numeros.splice(index, 1);
        contador++;
    }
});
for(contador; contador > 0; contador--)
    numeros.push(0);
    return numeros;
}

let entrada: number[] = [1, 0, 1, 2, 0, 1, 3];
console.log(moveZeros(entrada));

//----------------------------------------------------------------------------
// EJERCICIO 5

function multiplyAll(numeros: number[]){
  return function(num: number): number[] {
    let result: number[] = [];
    for(let valor: number of numeros){
      result.push(valor * num);
    }
    return result;
  }

};

console.log(multiplyAll([2, 6, 8])(3));

// ----------------------------------------------------------------------------
// EJERCICIO 6

type Punto = [number, number];

function suma(p1: Punto, p2: Punto): Punto {
 return [p1[0] + p2[0], p1[1] + p2[1]];
}

function resta(p1: Punto, p2: Punto): Punto {
 return [p1[0] - p2[0], p1[1] - p2[1]];
}

function producto(p1: Punto, num: number): Punto {
  return [p1[0] * num, p1[1] * num];
}

function distancia(p1: Punto, p2: Punto): number {
  return parseFloat(Math.sqrt(Math.pow(p1[0] - p2 [0],2) + Math.pow(p1[1] - p2 [1],2)).toFixed(4));

}

console.log(suma([4, 2], [1, 3]));
console.log(resta([4, 2], [1, 3]));
console.log(producto([4, 2], 2));
console.log(distancia([4, 2], [1, 3]));