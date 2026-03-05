let lancheNome = ""
let lanchePreco = ""

function abrirFormulario(nome, preco){

lancheNome = nome
lanchePreco = preco

document.getElementById("lancheSelecionado").innerText =
`${nome} - R$${preco}`

document.getElementById("formPedido").style.display = "flex"

}

function enviarPedido(){

let nome = document.getElementById("nomeCliente").value
let endereco = document.getElementById("enderecoCliente").value
let pagamento = document.getElementById("pagamento").value
let obs = document.getElementById("obsPedido").value

let mensagem =
`Pedido - LastHit Hamburgueria

Lanche: ${lancheNome}
Preço: R$${lanchePreco}

Cliente: ${nome}
Endereço: ${endereco}

Pagamento: ${pagamento}

Obs: ${obs}`

let url =
`https://wa.me/5514988416460?text=${encodeURIComponent(mensagem)}`

window.open(url)

document.getElementById("formPedido").style.display = "none"

}