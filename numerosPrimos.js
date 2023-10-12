// Variável usada de parâmetro nas duas funções

const num = 10;


// ---------- Função recursiva ----------

function ehPrimo(n) {
    if (n <= 1) return false;

    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    function ehPrimoRecursiva(n, atual) {
        if (atual * atual > n) return true;

        if (n % atual === 0) return false;

        return ehPrimoRecursiva(n, atual + 2);
    }

    return ehPrimoRecursiva(n, 5);
}

function encontrarPrimosRecursiva(n) {
    if (n <= 1) return [];

    if (n === 2) return [2];

    const primos = encontrarPrimosRecursiva(n - 1);

    if(ehPrimo(n)) {
        primos.push(n);
    }

    return primos;
}

const resultadoRecursivo = encontrarPrimosRecursiva(num);

console.log(`p(${num}) = [${resultadoRecursivo}]`);


// ---------- Função linear ----------

function encontrarPrimosLinear(n) {
    if (n <= 1) return [];

    const filtro = new Array(n + 1).fill(true);

    filtro[0] = filtro[1] = false;

    for (let p = 2; p * p <= n; p++) {
        if(filtro[p]) {
            for (let i = p * p; i <= n; i += p) {
                filtro[i] = false;
            }
        }
    }

    const primos = [];

    for (let i = 2; i <= n; i++) {
        if (filtro[i]) {
            primos.push(i);
        }
    }

    return primos;
}

const resultadoLinear = encontrarPrimosLinear(num);

console.log(`p(${num}) = [${resultadoLinear}]`);