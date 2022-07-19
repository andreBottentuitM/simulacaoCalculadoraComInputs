function calculadora(n1, n2) {
    let operador = prompt("Digite: 1 - Para somar, 2 - Para subtrair, 3 - Para multiplicar, 4 - Para dividir e 0 - Para sair")
    if (operador != '0') {
        while (parseFloat(operador) != 0) {
            switch (parseFloat(operador)) {
                case 1:
                    n1 = prompt("Digite o primeiro número para a realização do calculo")
                    n2 = prompt("Digite o segundo número para a realização do calculo")
                    alert(parseFloat(n1) + parseFloat(n2))
                    operador = prompt("Digite: 1 - Para somar, 2 - Para subtrair, 3 - Para multiplicar, 4 - Para dividir e 0 - Para sair")
                    break
                case 2:
                    n1 = prompt("Digite o primeiro número para a realização do calculo")
                    n2 = prompt("Digite o segundo número para a realização do calculo")
                    alert(parseFloat(n1) - parseFloat(n2))
                    operador = prompt("Digite: 1 - Para somar, 2 - Para subtrair, 3 - Para multiplicar, 4 - Para dividir e 0 - Para sair")
                    break
                case 3:
                    n1 = prompt("Digite o primeiro número para a realização do calculo")
                    n2 = prompt("Digite o segundo número para a realização do calculo")
                    alert(parseFloat(n1) * parseFloat(n2))
                    operador = prompt("Digite: 1 - Para somar, 2 - Para subtrair, 3 - Para multiplicar, 4 - Para dividir e 0 - Para sair")
                    break
                case 4:
                    n1 = prompt("Digite o primeiro número para a realização do calculo")
                    n2 = prompt("Digite o segundo número para a realização do calculo")
                    alert(parseFloat(n1) / parseFloat(n2))
                    operador = prompt("Digite: 1 - Para somar, 2 - Para subtrair, 3 - Para multiplicar, 4 - Para dividir e 0 - Para sair")
                    break
                default:
                    alert("Essa opção não existe")
                    operador = prompt("Digite: 1 - Para somar, 2 - Para subtrair, 3 - Para multiplicar, 4 - Para dividir e 0 - Para sair")
            }
        }
    }
}

calculadora()