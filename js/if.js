var edad = 16;

if (edad < 18) {
    console.log("Jorge tiene " + edad + " años.");
} else {
    console.log("Aguante el millonario");
}

var x = 0;

for (x; x < 5; x++) {
    console.log("El valor de x es: " + x);   
}


var y = 10;

while (y > 0) {
    console.log("El valor de y es: " + y);
    y--;
}

var z = 11;

do {
    console.log("El valor de z es: " + z);
} while (z < 10);

var x = 0;

for (x; x < 5; x++) {
    if (x == 5) {
        break
    }
    console.log("El valor de x es: " + x);   
}