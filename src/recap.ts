// const name = 'Ric';
const age = 19;
const suma = (a: number, b: number) => {
   return a + b;
}
suma(12, 12)

class Persona { 
   constructor( private age: number, private name: string) {}

   getSummary() {
      return `the name is ${this.name} , and the age is ${this.age}`
   }


}


const Person1 = new Persona(15,"pepito")
Person1.getSummary()