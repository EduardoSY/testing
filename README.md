# Práctica 4 - Arrays, tuplas y enumerados
* Elaborado por Eduardo Da Silva Yanes

## 1. Introducción
En esta quinta práctica nos vamos a centrar en el uso de objetos, clases, interfaces. Vamos a tratar una cantidad menor de ejercicios pero algo más complejos. Para el desarrollo
de la tarea continuaremos haciendo uso de la metodología TDD así como de la generación de documentación gracias a Typedoc. Como puntos nuevos a tratar, podemos tratar de manera 
opcional cómo usar el debugger de VSCode para Typescript así como comenzar a familiarizarnos con [los principios SOLID de Typescript](https://samueleresca.net/solid-principles-using-typescript/)
## NOTA ACLARATORIA
En este informe no están los comentarios necesarios para generar documentación a partir del código fuente con Typedoc. Esto lo he hecho para así tener un informe menos extenso,
más limpio y con un código menos engorroso. Si quieres ver los comentarios utilizados para Typedoc puedes acceder al código fuente directamente gracias al enlace en cada apartado.

## 2. Pasos previos
Antes de comenzar con el desarrollo de código fuente vamos a generar nuestra estructura de trabajo. En este caso será algo diferente. En lugar de tener simplemente un directorio **/src** donde almacenamos los diferentes ejercicios, vamos a hacer un directorio por cada ejercicio. Siempre que trabajemos con clases se recomienda crear un directorio independiente para cada ejercicio y, dentro de ese directorio, un fichero independiente para cada clase.
El resto será completamente igual.

### EJERCICIO 1 - Pokedex


Vamos a diseñar una clase para representar a los pokemon. Cada pokemon tiene una serie de atributos como son el nombre, el peso y altura, el tipo y sus 4 características básicas:
ataque, defensa, velocidad y salud.
Entonces, vamos a implementar cada una de estas carácterísticas como atributos privados de la clase. Además, vamos a implementar una variable que denominaremos **HPCOMBAT** donde iremos almacenando la salud actual del pokemon durante el combate, es decir, los puntos de salud restantes después de cada ataque enemigo.

Con esta clase hecha ya podemos representar cualquier pokemon que querramos.

Ahora es turno de la clase **Combat**. La idea de esta clase es represenatar un combate entre dos pokemon por lo que, como es de esperar, debemos darle dos pokemon con los que luchar.
Además de almacenar los dos pokemon del combate en la clase, vamos a almacenar un 3 atributo: un array de dos elementos donde guardaremos el daño que realiza cada pokemon en base
al tipo de cada uno y la efectividad. Estos valores los obtenemos gracias a la funcion **NOME ACUERDO**.

Con todo lo establecido anteriormente podemos empezar el combate. En esta simulación **siempre** atacará primero el pokemon que esté como primer parámetro. La velocidad no va a influir en este contexto.
Mientras alguno de los dos pokemon esté vivo iremos realizando ataques por turno. Por cada ataque vamos a indicar quién ataca a quién y con cuanto daño. Además mostraremos la vida actual de cada combatiente.



