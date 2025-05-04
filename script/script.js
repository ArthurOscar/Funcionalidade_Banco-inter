function mudarPagina(){
    window.location.href = '../public/index_funcionalidade.html'
}

function voltarPagina(){
    window.location.href = '../public/index.html'
}

window.onload = function() {
    document.getElementById('valorConvertido').readOnly = true;
}



function conversorMoeda(){
    let moedaSelecionada = document.getElementById('moeda_inicial').value
    let moedaConversao = document.getElementById('moeda_conversao').value
    let valorConvertido = 0
    let valorInicial = document.getElementById('valorInicial').value

    if(moedaConversao === '' || moedaSelecionada === ''){
        alert('Selecione alguma moeda')
    }
    if(moedaSelecionada === 'dolar'){
        if(moedaConversao === 'dolar'){
            valorConvertido = valorInicial
            document.querySelector("#valorConvertido").value = "$" + valorConvertido
        }
        if(moedaConversao === 'real'){
            valorConvertido = valorInicial * 5.66
            document.querySelector("#valorConvertido").value = "R$" + valorConvertido
        }
        if(moedaConversao === 'euro'){
            valorConvertido = valorInicial * 0.88
            document.querySelector("#valorConvertido").value = valorConvertido + ' €'
        }
        if(moedaConversao === 'libra'){
            valorConvertido = valorInicial * 0.75
            document.querySelector("#valorConvertido").value = "£" + valorConvertido
        }
    }
    if(moedaSelecionada === 'real'){
        if(moedaConversao === 'real'){
            valorConvertido = valorInicial
            document.querySelector("#valorConvertido").value = "R$" + valorConvertido
        }
        if(moedaConversao === 'dolar'){
            valorConvertido = valorInicial * 0.18
            document.querySelector("#valorConvertido").value = "$" + valorConvertido
        }
        if(moedaConversao === 'euro'){
            valorConvertido = valorInicial * 0.16
            document.querySelector("#valorConvertido").value = valorConvertido + ' €'
        }
        if(moedaConversao === 'libra'){
            valorConvertido = valorInicial * 0.13
            document.querySelector("#valorConvertido").value = "£" + valorConvertido
        }
    }
    if(moedaSelecionada === 'euro'){
        if(moedaConversao === 'euro'){
            valorConvertido = valorInicial
            document.querySelector("#valorConvertido").value = valorConvertido + ' €'
        }
        if(moedaConversao === 'dolar'){
            valorConvertido = valorInicial * 1.13
            document.querySelector("#valorConvertido").value = "$" + valorConvertido
        }
        if(moedaConversao === 'real'){
            valorConvertido = valorInicial * 6.40
            document.querySelector("#valorConvertido").value = 'R$' + valorConvertido
        }
        if(moedaConversao === 'libra'){
            valorConvertido = valorInicial * 0.85
            document.querySelector("#valorConvertido").value = "£" + valorConvertido
        }
    }
    if(moedaSelecionada === 'libra'){
        if(moedaConversao === 'libra'){
            valorConvertido = valorInicial
            document.querySelector("#valorConvertido").value = "£" + valorConvertido
        }
        if(moedaConversao === 'dolar'){
            valorConvertido = valorInicial * 1.33
            document.querySelector("#valorConvertido").value = "$" + valorConvertido
        }
        if(moedaConversao === 'euro'){
            valorConvertido = valorInicial * 1.17
            document.querySelector("#valorConvertido").value = valorConvertido + ' €'
        }
        if(moedaConversao === 'real'){
            valorConvertido = valorInicial * 7.50
            document.querySelector("#valorConvertido").value = "R$" + valorConvertido
        }
    }
}