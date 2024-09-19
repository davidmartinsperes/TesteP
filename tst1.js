function fibonacci(num) {
    let a = 0, b = 1;
    while (a <= num) {
        if (a === num) {
            return true;
        }
        [a, b] = [b, a + b];
    }
    return false;
}

const numero = 21; // Número fixo para teste

if (fibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
