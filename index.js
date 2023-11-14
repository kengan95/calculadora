

/*class Calculadora {
    sumar(num1, num2) {
        return num1 + num2;
    }

    restar(num1, num2) {
        return num1 - num2;
    }

    dividir(num1, num2) {
        return num1 / num2;
    }

    multiplicar(num1, num2) {
        return num1 * num2;
    }
}  

class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-', 
        }
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual)  || isNaN(valorAnterior) ) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
}


const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});*/ 










 class Calculadora{

    sumar(a,b){
        return a+b
    }  

    restar(a,b){
        return a-b
    } 

   multiplicar(a,b){
        return a*b
    }  

   dividir(a,b){
        return a/b
    } 


 } 

  class Display{
    constructor(DisplayValorActual,DisplayValorAnterior){
        this.DisplayValorActual=DisplayValorActual
        this.DisplayValorAnterior=DisplayValorAnterior 
        this.tipoDeOperador=undefined 
        this.valorActual=''
        this.valorAnterior=''
        this.calculador=new Calculadora() 
        this.signos={
            sumar:'+',
            restar:'-',
            multiplicar:'x',
            dividir:'%'
        }
    }   

       borrar(){
        this.valorActual=this.valorActual.toString().slice(0,-1) 
        this.imprimirValores()
       } 

       borrarTodo(){
    
        this.valorActual=''
        this.valorAnterior=''
        this.tipoDeOperador=undefined
        this.imprimirValores()
       } 

       computar(tipo){
        this.tipoDeOperador!=='igual' && this.calcular() 
        this.tipoDeOperador=tipo 
        this.valorAnterior=this.valorActual || this.valorAnterior 
        this.valorActual=''
        this.imprimirValores()
       } 

       agregarNumero(numero){ 
        if(numero==='.' && this.valorActual.includes('.'))return 

        this.valorActual=this.valorActual.toString() + numero.toString() 
        this.imprimirValores()

       } 

       imprimirValores(){
        this.DisplayValorActual.textContent=this.valorActual 
        this.DisplayValorAnterior.textContent=`${this.valorAnterior} ${this.signos[this.tipoDeOperador] || ''}`
       }  

       calcular(){
        const valorActual=parseFloat(this.valorActual)
        const valorAnterior=parseFloat(this.valorAnterior) 

        if( isNaN(valorActual) || isNaN(valorAnterior)) return 

        this.valorActual=this.calculador[this.tipoDeOperador] (valorActual,valorAnterior)
       }
  } 

   const displayValorActual=document.getElementById('valor-actual')
   const displayValorAnterior=document.getElementById('valor-anterior')
   const display= new Display(displayValorActual,displayValorAnterior) 
   const botonNumero=document.querySelectorAll('.numero')
   const botonOperador=document.querySelectorAll('.operador') 

   botonNumero.forEach(boton=>{
    boton.addEventListener('click',(e)=>display.agregarNumero(boton.innerHTML))
   }) 

   botonOperador.forEach(boton=>{
    boton.addEventListener('click',(e)=>display.computar(boton.value))
   })