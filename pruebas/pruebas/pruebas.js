let nombre = 'Iván'
console.log(nombre)
console.log(typeof (nombre));

let numero = 10
console.log(numero)
console.log(typeof (numero));

let arr = [25, 'hola', 21, true]
console.log(arr);
console.log(typeof (arr));
console.log(arr[2]);


let persona  = {
    nombre: 'Iván',
    edad: 30,
    "Mi pais": "Argentina",
    Saludar: function () {
        console.log('Hola mundo, ¿cómo estás?');
    }
}

var libro = {
    titulo:"javascript",
    autor:"alguien",
    paginas:250,
    leer:function(){
        console.log('ya lei este libro');
    }
}

function Saludar(tipo,nombre){
    var tipo=tipo || "hola";
    var nombre=nombre || "iván";
    return(tipo+' '+nombre);
}

//alert(Saludar("Chau", "Pedro"));

console.log(persona);
console.log(persona.nombre);
console.log(persona["Mi pais"]);
//alert(libro.autor)
console.log(libro.leer);
//alert(libro['titulo'])
console.log(eval("2+2"));
console.log(parseInt(3.03232))
console.log(Date())
console.log(Math.max("3","4","5"))
console.log(window)
console.log(document)
console.log(Saludar())


