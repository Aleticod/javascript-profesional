console.log('Hello, TypeScript');

// Boolean
let muted: boolean = true;
muted = false;


// Number
let number: number = 42;
let denominador: number = 6;
let resultado = number / denominador;

// String
let nombre: string = 'Richard';
let saludo = `Me llamo ${nombre}`;

// Arreglo
let people: string[] = [];
people = ["isable", "Nicole"];
people.push("Jaqui");

let peopleAndNumbers: Array< string | number> = [];
peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(9000);

// Enum
enum Color {
  Rojo = "rojo",
  Verde = "verde",
  Azul = "azul",
}

let colorFavorito: Color = Color.Rojo;
console.log("Mi color favorito es ", colorFavorito);

// Any
let comodin: any = 'Joker';
comodin = {type: 'wildcard'};

// Object
let someObject: object = { type: 'WildCard' };

// Funciones
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(12, 15);

function createAdder(a: number): (number) => number  {
  return function(b:number) {
    return b + a;
  }
}

const addFour = createAdder(4);
const fourPlusSix = addFour(6);

function fullName( firstName: string, lastName?: string/*="smith"*/): string {
  return `${firstName} ${lastName}`;
}

const richar = fullName('Richard');


// Interfaces

enum Colorcito {
  Rojo = "rojo",
  Verde = "verde"
}

interface Rectangulo { // Esto se vuelve un tipo
  ancho: number,
  alto: number,
  color: Color
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Rojo
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areRect = area(rect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : 'Un rectangulo';
}
