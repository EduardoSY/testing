//dsi5.ts

//Ejercicio 1
//HAY UN ERRATA:
//Se considera que el primero de los contrincantes que recibe un (DEBERIA SER "EL" en lugar de "un") objeto de la clase Combat será siempre el primero en realizar un ataque.

interface PokeDatos {
  nombre: string;
  peso: number;
  altura: number;
  tipo: string;
  stats: number[];
}

/*
class Pokemon implements PokeDatos {
  constructor(public readonly nombre: string,
  public readonly peso: number, public readonly altura: number,
  public readonly tipo: string, public readonly stats: number[]){
  }
  private hp_combate: number = stats[1];
}*/

class Pokemon {
  private nombre: string;
  private peso: number;
  private altura: number;
  private tipo: string;
  private stats = new Array(4);
  public hp_combate: number = 0;

  constructor(public readonly nombre_entrada: string,
  public readonly peso_entrada: number, public readonly altura_entrada: number,
  public readonly tipo_entrada: string, public readonly stats_entrada: number[]){
    this.nombre = nombre_entrada;
    this.peso = peso_entrada;
    this.altura = altura_entrada;
    this.tipo = tipo_entrada;
    this.stats = stats_entrada;
    this.hp_combate = this.stats[3];
  }

  get_name(){
    return this.nombre;
  }
  get_type(){
    return this.tipo;
  }
  get_attack(){
    return this.stats[0];
  }
  get_def(){
    return this.stats[1];
  }
  get_maxHP(){
    return this.stats[3];
  }
}

class Combat {
  //private poke1: Pokemon = new Pokemon("a",4,4,"aa",[1,2,3,5]);
  private poke1: Pokemon;
  private poke2: Pokemon;
  private datos: number[] = new Array(2);
  constructor(pokemon1: Pokemon, pokemon2: Pokemon){
    this.poke1 = pokemon1;
    this.poke2 = pokemon2;
    //console.log(this.poke1.get_name());
  }

  combatir(){
    this.datos[0] = this.combatePokemon(this.poke1.get_type(), this.poke2.get_type(), this.poke1.get_attack(), this.poke2.get_def());
    this.datos[1] = this.combatePokemon(this.poke2.get_type(), this.poke1.get_type(), this.poke2.get_attack(), this.poke1.get_def());
    // this.datos[1] = 100;
    // this.datos[0] = this.combatePokemon(this.poke1.get_type(), this.poke2.get_type(), this.poke1.get_attack(), this.poke2.get_def());
    //console.log(this.datos[0]);
    //console.log(this.combatePokemon(this.poke2.get_type(), this.poke1.get_type(), this.poke2.get_attack(), this.poke1.get_def()));
    //console.log(this.combatePokemon("Agua", "Electrico", 40, 22))
    let iterator: number = 1;
    //console.log(this.poke2.get_name() + " inflinje -" + this.datos[1] + " a " + this.poke1.get_name());
    // this.poke1.hp_combate -= this.datos[1];
    while((this.poke1.hp_combate > 0) && (this.poke2.hp_combate > 0)) {
      console.log("Ronda " + iterator);
      if((iterator % 2) == 0) {
        console.log(this.poke2.get_name() + " inflinje -" + this.datos[1] + " a " + this.poke1.get_name());
        this.poke1.hp_combate -= this.datos[1];
      } else {
        console.log(this.poke1.get_name() + " inflinje -" + this.datos[0] + " a " + this.poke2.get_name());
        this.poke2.hp_combate -= this.datos[0];
      }
      iterator++;
      console.log(this.poke1.get_name() + " [HP: " + +(this.poke1.hp_combate).toFixed(2) + "] VS " + this.poke2.get_name() + " [HP: " + +(this.poke2.hp_combate).toFixed(2) + "]");
    }
    console.log("GANADOR: " + (this.poke1.hp_combate <= 0?this.poke2.get_name() : this.poke1.get_name()));
  }

  combatePokemon(tipo1: string, tipo2: string,
    ataque: number, defensa: number): number {
  // Variable de efectividad del ataque
  let efectividad: number = 0;
  if (tipo1 === tipo2) {
    efectividad = 0.5;
  } else if (tipo1 === 'Fuego') {
    switch (tipo2) {
      case 'Hierba':
        efectividad = 2;
        break;
      case 'Electrico':
        efectividad = 1;
        break;
      case 'Agua':
        efectividad = 0.5;
        break;
    }
  } else if (tipo1 === 'Agua') {
    switch (tipo2) {
      case ('Hierba'):
      case ('Electrico'):
        efectividad = 0.5;
        break;
      case 'Fuego':
        efectividad = 2;
        break;
    }
  } else if (tipo1 === 'Electrico') {
    switch (tipo2) {
      case ('Fuego'):
      case ('Hierba)'):
        efectividad = 1;
        break;
      case 'Agua':
        efectividad = 2;
        break;
    }
  } else {
    switch (tipo2) {
      case 'Electrico':
        efectividad = 1;
        break;
      case 'Agua':
        efectividad = 2;
        break;
      case 'Fuego':
        efectividad = 0.5;
        break;
    }
  }

  let damage: number = 50 * (ataque/defensa) * efectividad;
  return parseFloat(damage.toFixed(2));
}

  show_data(pokemonsito: Pokemon){
    console.log("Pokemon [1] -> " + pokemonsito.get_name() + " Tipo: " + pokemonsito.get_type() + " Atk. " + pokemonsito.get_attack() + " Def. " + pokemonsito.get_def() + " HP. " + pokemonsito.get_maxHP())
  }
}

let pokk1: Pokemon = new Pokemon("Pikachu", 6, 4, "Electrico", [54,22,4,265]);
let pokk2: Pokemon = new Pokemon("Magikarp", 6, 4, "Agua", [3,46,4,575]);
let combate :Combat = new Combat(pokk1, pokk2);
combate.show_data(pokk2);
combate.combatir();

