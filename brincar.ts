const teclado = require(`prompt-sync`)();

function principal(): void {
    console.log(`------------------------------------`);
    console.log(`------Oque vc deseja?        -------`);
    console.log(`------Digite 1 - Calculadora -------`);
    console.log(`------Digite 2 - Tabuada     -------`);
    console.log(`------Digite 3 - Concatenar  -------`);
    console.log(`------Digite 4 - Media       --------`);
    console.log(`------Digite 0 - Sair        -------`);
    let opcao: number = parseInt(teclado(`Digite sua opção: `));


    switch (opcao) {
        case 1: calcular();
        case 0: sair();
        case 2: tabuada();
        case 3: concatenar();
        case 4: media();
    }
}
principal()
function sair(): void {
    console.clear();
    console.log(`Fim do programa...`);
    process.exit(0);
}

function calcular(): void {
    let numeroUm = 0;
    let numeroDois = 0;
    let resultado: 0;

    function soma(numeroUm: number, numeroDois: number): void {

        numeroUm = parseInt(teclado(`Digite o 1º número: `));
        numeroDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = numeroUm + numeroDois;
        console.log(`O valor da soma de ${numeroUm} com ${numeroDois} `);
        console.log(`${resultado}`);
        console.log(`Digite ENTER para cont...`);
        teclado();
        menu();
    }

    function sair(): void {
        console.clear();
        console.log(`Fim do programa...`);
        principal();

    }

    function subtração(numeroUm: number, numeroDois: number): void {
        numeroUm = parseInt(teclado(`Digite o 1º número: `));
        numeroDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = numeroUm - numeroDois;
        console.log(`O valor da subtração de ${numeroUm} com ${numeroDois} `);
        console.log(`${resultado}`);
        console.log(`Digite ENTER para cont...`);
        teclado();
        menu();
    }

    function multiplicação(numeroUm: number, numeroDois: number) {
        numeroUm = parseInt(teclado(`Digite o 1º número: `));
        numeroDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = numeroUm * numeroDois;
        console.log(`O valor da multiplicação de ${numeroUm} com ${numeroDois} `);
        console.log(`${resultado}`);
        console.log(`Digite ENTER para cont...`);
        teclado();
        menu();
    }

    function divisao(numeroUm: number, numeroDois: number) {
        numeroUm = parseInt(teclado(`Digite o 1º número: `));
        numeroDois = parseInt(teclado(`Digite o 2º número: `));
        resultado = numeroUm / numeroDois;
        console.log(`O valor da divisão de ${numeroUm} com ${numeroDois} `);
        console.log(`${resultado}`);
        console.log(`Digite ENTER para cont...`);
        teclado();
        menu();
    }

    function selecao(opcao: string): void {
        switch (opcao) {
            case `+`: soma(numeroUm, numeroDois); break;
            case `-`: subtração(numeroUm, numeroDois); break;
            case `*`: multiplicação(numeroUm, numeroDois); break;
            case `/`: divisao(numeroUm, numeroDois); break;
            case `0`: sair(); break;
            default: break;
        }

    }

    function menu(): void {
        console.log(`Qual operação deseja?`);
        console.log(`+ --> Adição`);
        console.log(`- --> Subtração`);
        console.log(`* --> Mutiplicação`);
        console.log(`/ --> Divisão`);
        console.log(`0 --> Sair`);
        let opcao: string = teclado(`Digite a opção desejada: `);
        selecao(opcao)
    }
    menu();
}
function tabuada(): void {
    let mutiplicando: number = 0;
    let tabuada: number = parseInt(teclado(`Digite  a tabuada desejada: `));
    do {
        console.log(`${tabuada} X ${mutiplicando} = ${tabuada * mutiplicando}`);
        mutiplicando++;

    } while (mutiplicando < 11)

    console.log(`Digite ENTER para cont...`);
    teclado();
    principal();
}

function concatenar(): void {
    let p1: string = teclado(`Digite a palavra um a ser concatenada: `);
    let p2: string = teclado(`Digite a palavra dois a ser concatenada: `);
    console.log(`Concatenando ${p1} e ${p2}`);
    console.log(`Resultado ${p1 + p2}`);
    console.log(`Digite ENTER para cont...`);
    teclado();
    principal();

}

function media(): void {

    function calcularMedia(n1: number, n2: number): number {
        let media: number = (n1 + n2) / 2;
        return media;
    }
    let n1: number = parseInt(teclado(`Digite o primeiro número: `));
    let n2: number = parseInt(teclado(`Digite o segundo número: `));

    let media: number = calcularMedia(n1, n2);
    console.log(`A media de ${n1} + ${n2} = ${media}`);
    console.log(`Digite ENTER para cont...`);
    teclado();
    principal();



}




