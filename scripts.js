const chave = "2eccdbfafec474f9914dcbf93da92c55"

const img = document.querySelector(".icone-tempo")


function clicarBotao(){

   const cidade =  document.querySelector(".input-cidade").value 

   buscar(cidade)

}

async function buscar(cidade){
    const dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        cidade + 
        "&appid=" + 
        chave + 
        "&lang=pt_br" +
        "&units=metric"
        )
        .then(resposta => resposta.json())

        mostrar(dados)
    
}

function mostrar(dados){
    console.log(dados)
    document.querySelector(".span-cidade").innerHTML =  dados.name + "-" + dados.sys.country
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".span-sensacao").innerHTML = Math.ceil(dados.main.feels_like)
    document.querySelector(".descricao").innerHTML = dados.weather[0].description

    img.src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    

    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    
}


