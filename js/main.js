function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar?");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
    window.location.href = "https://web.digitalinnovation.one/"; //abre na mesma aba
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
    elemento.innerHTML = "Obrigado por passar o mouse!";
    //alert("trocar texto"); //dá alerta quando move o mouse
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui.";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*var validar;
function validaIdade(idade){
    validar;
  if (idade >= 18){
      validar = true
  }else{
      validar = false
  }
  return validar;
}

//var idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar);*/



/*var d = new Date();
//alert(d);
alert(d.getDay());*/


/*var count;
for(count=0; count <=5; count++){
    alert(count);
}*/


/*var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1; //ou apenas count++
}*/


/*var idade = prompt("Qual sua idade?");
if (idade >=18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}*/


//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}] //lista de dicionários
//console.log(frutas);


//var fruta = {nome:"maça", cor:"vermelha"} //dicionário
//console.log(fruta.nome);


//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Gabriela Sakaguti";
//var idade = 18;
//var idade2 = 10;
//var frase="Japão é o melhor time do mundo";
//alert(nome +" tem " + idade + " anos.");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade+idade2)
//console.log(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil"));

