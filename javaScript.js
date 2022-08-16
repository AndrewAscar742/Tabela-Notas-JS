
function calcularNota1() {
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let nota3 = Number(document.getElementById('nota3').value)
    let nota4 = Number(document.getElementById('nota4').value)
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    document.getElementById('media1').innerText = media

    if (media >= 0 && media < 50) {
        document.getElementById('resultado1').innerText = "Reprovado"
    } else {
        if (media >= 50 && media < 70) {
            document.getElementById('resultado1').innerText = "Recuperação"
        } else {
            document.getElementById('resultado1').innerText = "Aprovado"
        }

    }
}

function calcularNota2() {
    let nota1 = Number(document.getElementById('nota5').value)
    let nota2 = Number(document.getElementById('nota6').value)
    let nota3 = Number(document.getElementById('nota7').value)
    let nota4 = Number(document.getElementById('nota8').value)
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    document.getElementById('media2').innerText = media

    if (media >= 0 && media < 50) {
        document.getElementById('resultado2').innerText = "Reprovado"
    } else {
        if (media >= 50 && media < 70) {
            document.getElementById('resultado2').innerText = "Recuperação"
        } else {
            document.getElementById('resultado2').innerText = "Aprovado"
        }

    }
}

function calcularNota3() {
    let nota1 = Number(document.getElementById('nota9').value)
    let nota2 = Number(document.getElementById('nota10').value)
    let nota3 = Number(document.getElementById('nota11').value)
    let nota4 = Number(document.getElementById('nota12').value)
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    document.getElementById('media3').innerText = media

    if (media >= 0 && media < 50) {
        document.getElementById('resultado3').innerText = "Reprovado"
    } else {
        if (media >= 50 && media < 70) {
            document.getElementById('resultado3').innerText = "Recuperação"
        } else {
            document.getElementById('resultado3').innerText = "Aprovado"
        }

    }
}


function calcularMediaFinal() {
    let nota1 = Number(document.getElementById('media1').value)
    let nota2 = Number(document.getElementById('media2').value)
    let nota3 = Number(document.getElementById('media3').value)
    let media = (nota1 + nota2 + nota3) / 3
    console.log(typeof(nota1) + typeof(nota2) + typeof(nota3))
    console.log(nota1 + " " + nota2 + " " + nota3);

    document.getElementById('mediaSala').innerText = media
}