// Variável usada de parâmetro nas duas funções

const num = 6;


// ---------- Função recursiva ----------

function fibRecursiva(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibRecursiva(n - 1) + fibRecursiva(n - 2);
    }
}

const resultadoRecursivo = fibRecursiva(num);

console.log(`Fib(${num}) = ${resultadoRecursivo}`);


// ---------- Função linear ----------

function fibLinear(n) {
    if (n <= 1) {
        return n;
    }

    let fibN = 0;
    let fibNMenos1 = 1;
    let fibNMenos2 = 0;
    
    for (let i = 2; i <= n; i++) {
        fibN = fibNMenos1 + fibNMenos2;

        fibNMenos2 = fibNMenos1;

        fibNMenos1 = fibN;
    }

    return fibN;
}

const resultadoLinear = fibLinear(num);

console.log(`Fib(${num}) = ${resultadoLinear}`);