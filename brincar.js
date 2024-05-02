var teclado = require("prompt-sync")();
function principal() {
    console.log("------------------------------------");
    console.log("------Oque vc deseja?        -------");
    console.log("------Digite 1 - Calculadora -------");
    console.log("------Digite 2 - Tabuada     -------");
    console.log("------Digite 3 - Concatenar  -------");
    console.log("------Digite 4 - Media       --------");
    console.log("------Digite 0 - Sair        -------");
    var opcao = parseInt(teclado("Digite sua op\u00E7\u00E3o: "));
    switch (opcao) {
        case 1: calcular();
        case 0: sair();
        case 2: tabuada();
        case 3: concatenar();
        case 4: media();
    }
}
principal();
function sair() {
    console.clear();
    console.log("Fim do programa...");
    process.exit(0);
}
function calcular() {
    var numeroUm = 0;
    var numeroDois = 0;
    var resultado;
    function soma(numeroUm, numeroDois) {
        numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = numeroUm + numeroDois;
        console.log("O valor da soma de ".concat(numeroUm, " com ").concat(numeroDois, " "));
        console.log("".concat(resultado));
        console.log("Digite ENTER para cont...");
        teclado();
        menu();
    }
    function sair() {
        console.clear();
        console.log("Fim do programa...");
        principal();
    }
    function subtração(numeroUm, numeroDois) {
        numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = numeroUm - numeroDois;
        console.log("O valor da subtra\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
        console.log("".concat(resultado));
        console.log("Digite ENTER para cont...");
        teclado();
        menu();
    }
    function multiplicação(numeroUm, numeroDois) {
        numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = numeroUm * numeroDois;
        console.log("O valor da multiplica\u00E7\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
        console.log("".concat(resultado));
        console.log("Digite ENTER para cont...");
        teclado();
        menu();
    }
    function divisao(numeroUm, numeroDois) {
        numeroUm = parseInt(teclado("Digite o 1\u00BA n\u00FAmero: "));
        numeroDois = parseInt(teclado("Digite o 2\u00BA n\u00FAmero: "));
        resultado = numeroUm / numeroDois;
        console.log("O valor da divis\u00E3o de ".concat(numeroUm, " com ").concat(numeroDois, " "));
        console.log("".concat(resultado));
        console.log("Digite ENTER para cont...");
        teclado();
        menu();
    }
    function selecao(opcao) {
        switch (opcao) {
            case "+":
                soma(numeroUm, numeroDois);
                break;
            case "-":
                subtração(numeroUm, numeroDois);
                break;
            case "*":
                multiplicação(numeroUm, numeroDois);
                break;
            case "/":
                divisao(numeroUm, numeroDois);
                break;
            case "0":
                sair();
                break;
            default: break;
        }
    }
    function menu() {
        console.log("Qual opera\u00E7\u00E3o deseja?");
        console.log("+ --> Adi\u00E7\u00E3o");
        console.log("- --> Subtra\u00E7\u00E3o");
        console.log("* --> Mutiplica\u00E7\u00E3o");
        console.log("/ --> Divis\u00E3o");
        console.log("0 --> Sair");
        var opcao = teclado("Digite a op\u00E7\u00E3o desejada: ");
        selecao(opcao);
    }
    menu();
}
function tabuada() {
    var mutiplicando = 0;
    var tabuada = parseInt(teclado("Digite  a tabuada desejada: "));
    do {
        console.log("".concat(tabuada, " X ").concat(mutiplicando, " = ").concat(tabuada * mutiplicando));
        mutiplicando++;
    } while (mutiplicando < 11);
    console.log("Digite ENTER para cont...");
    teclado();
    principal();
}
function concatenar() {
    var p1 = teclado("Digite a palavra um a ser concatenada: ");
    var p2 = teclado("Digite a palavra dois a ser concatenada: ");
    console.log("Concatenando ".concat(p1, " e ").concat(p2));
    console.log("Resultado ".concat(p1 + p2));
    console.log("Digite ENTER para cont...");
    teclado();
    principal();
}
function media() {
    function calcularMedia(n1, n2) {
        var media = (n1 + n2) / 2;
        return media;
    }
    var n1 = parseInt(teclado("Digite o primeiro n\u00FAmero: "));
    var n2 = parseInt(teclado("Digite o segundo n\u00FAmero: "));
    var media = calcularMedia(n1, n2);
    console.log("A media de ".concat(n1, " + ").concat(n2, " = ").concat(media));
    console.log("Digite ENTER para cont...");
    teclado();
    principal();
}
