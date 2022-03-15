class Ninja{
    constructor (nombre, salud){
        this.nombre=nombre;
        this.salud= salud;
        this.velocidad=3;
        this.fuerza=3;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(`nombre: ${this.nombre}, fuerza: ${this.fuerza}, velocidad: ${this.velocidad}, salud: ${this.salud}`);
    }
    drinkSake(){
        this.salud+=10;
    }
}


let juli = new Ninja ('Juli', 50);

juli.sayName();
juli.showStats();
juli.drinkSake();
juli.showStats();

class Sensei extends Ninja{
    constructor (nombre, salud=200, fuerza=10){
        super(nombre, salud);
        super.salud = salud;
        super.velocidad = 10;
        super.fuerza=fuerza;
        super.sabiduria=10;

    }
    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.")
    }

}

let martha = new Sensei('Martha',300);

martha.speakWisdom();
martha.showStats();
martha.sayName();


