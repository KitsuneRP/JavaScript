function ad(){
    let n1 = window.prompt("Digite o primeiro número:")
    let n2 = window.prompt("Digite o segundo número:")
    n3 = n1+n2
    let res = document.getElementById('resultado')
    res.innerHTML = `<p> O resultado da sua soma é ${n3}`
}