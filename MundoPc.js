// clase padre dispositivo entrada
class dispositivoentrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }
    get tipoEntrada(){
        return this._tipoEntrada
    }
    set tipoEntrada(entrada){
        return this._tipoEntrada = entrada
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        return this._marca = this.marca
    }
}
// clase hija raton

class raton extends dispositivoentrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idraton = ++raton.contadorRatones;
    }

    ToString (){
        return `[Idraton:${this._idraton}, tipo de entrada:${this._tipoEntrada}, Marca:${this._marca}]`
    }
}

//clase hija teclado

class teclado extends dispositivoentrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idteclado = ++teclado.contadorTeclado;
    }

    ToString (){
        return `[Idmouse:${this._idteclado}, tipo de entrada:${this._tipoEntrada}, Marca:${this._marca}]`
    }
}

// clase individual monitor
class monitor{

    static contadorMonitores = 0;

    constructor(marcamonitor,tamaño){
        this._idmonitor = ++monitor.contadorMonitores;
        this._marcamonitor =  marcamonitor;
        this._tamaño = tamaño;
    }
    get idmonitor(){
        return this._idmonitor
    }
    get marcamonitor(){
        return this._marcamonitor;
    }
    get tamañomonitor(){
        return this._tamaño
    }
    ToString(){
        return `[Idmonitor: ${this._idmonitor}, Marca: ${this._marcamonitor}, tamaño: ${this._tamaño}]`
    }
}

//clase computadora

class Computadora{

    static contadorcomputadoras = 0;

    constructor(nombre,monitor,teclado,raton){
        this._idcomputadora = ++Computadora.contadorcomputadoras 
        this._idnombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    ToString(){
    return `idcomputadora:${this._idcomputadora} ${this._idnombre}
        monitor:${this._monitor}
        teclado:${this._teclado}
        raton:${this._raton}`
    }
}

class orden{

    static contadorOrden = 0;

    constructor(){
        this._idorden = ++orden.contadorOrden;
        this._computadora = []
    }

    agregarcomputadora(computadora){
        this._computadora.push(computadora)
    }

    mostrarOrden(){
        let pc = ''
        for(let computer of this._computadora){
            pc += '\n' + computer
        }
        //console.log(pc)
        console.log(`Idorden${this._idorden}, computadora:${pc}`)
    }
}

let dispositivo = new dispositivoentrada ('raton','lenovo')
let dispositivo1 = new dispositivoentrada ('teclado','siragon')


let raton2 = new raton('raton','ace')
let raton1= new raton('USB','HP')

let teclado2 = new teclado('teclado','hp')
let teclado1 = new teclado('bluetooth','MSI')


let monitor2 = new monitor('panasonic','17 pulgadas')
let monitor1 = new monitor('HP',15)


let computadora = new Computadora ('HP',monitor2.ToString(),teclado2.ToString(),raton2.ToString())
let orden1 = new orden()
orden1.agregarcomputadora(computadora.ToString())
orden1.mostrarOrden()



let computadora1 = new Computadora('HP',monitor1.ToString(),teclado1.ToString(),raton1.ToString())
let orden2 = new orden()
orden2.agregarcomputadora(computadora.ToString())
orden2.agregarcomputadora(computadora1.ToString())
orden2.mostrarOrden()

//console.log(computadora.ToString())