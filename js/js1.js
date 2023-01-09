/**
document.getElementById("boton").onclick = function () {
    console.log("Capturamos el elemento");
    document.getElementById("parrafo").innerHTML = "Estamos probando un evento de javascrip";
}

 */

document.getElementById("boton").addEventListener('click', function () {
    console.log('otra forma');
    document.getElementById("parrafo").innerHTML = "Otra fomra de evento con javascript"
})

document.getElementById("boton_fondo").addEventListener('click', function () {
    
    document.getElementById("parrafo").style.color = "#FFFFFF";
})


document.getElementById("envio").addEventListener('click', function () {
    //Usamos parseInt para convertir a numero ya que lo toma con string.
    let num1 = parseInt(document.getElementById('numero1').value);
    let num2 = parseInt(document.getElementById('numero2').value);
    document.getElementById('resultado').innerHTML = suma(num1,num2);
    document.getElementById('cuenta').style.display = 'block';
})

function suma(a,b) {
    return a + b;
}

/**
const persona1 = fetch('../prueba.json');
const objeto = JSON.parse(persona1);
console.log(persona1.nombre);
console.log(objeto);
 */
//Como sonumir una API Rest
fetch('https://jsonplaceholder.typicode.com/todos/1')//Hace el fetch en l apágina de la api
      .then(response => response.json())//Creo que convierte a JSON la respuesta del fetch
      .then(json => console.log(json));//Aca almacena el json en un parametro y despues lo imprime por consola

fetch('../prueba.json')
      .then(response => response.json())
      .then(prueba => console.log(prueba));