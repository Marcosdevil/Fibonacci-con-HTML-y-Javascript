function Fibonacci(num) {
    if (num < 2) {
        return num;
    }
    else {
        return Fibonacci(num - 1) + Fibonacci(num - 2);
    }
}

const termino = parseInt(prompt("Ingrese el número de corte para conocer el resultado de Fibonacci para el número seleccionado:"));

if (termino <= 0) {
    document.write("No sea tonto e ingrese un número positivo antes de que me enoje.");
}
else {
    for (i = 0; i < termino; i++) {
        document.write(Fibonacci(i));
    }
}
 


