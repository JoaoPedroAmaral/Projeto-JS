var div_dobro;
var div_hora;
var div_media;
var div_imc;
var div_area;
var div_vida;
var div_voto;
var div_car;
var div_ganho;
var div_par;
var div_dobra;
var div_inverter;
var div_Cadastro;
var div_Maior;
var div_tabuada;
//botao 1
//alert('Este é um projeto que utiliza diversos tipos de dados, funções e metodos!! use com sabedoria!')
function Dobro(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = false;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;

} 
function CalcularDobro(){
    const num = document.getElementById("num_dobro").value;
    const dobro = num * 2; 
    const resposta = document.getElementById("resposta1");
    resposta.textContent = `O dobro de ${num} é ${dobro} !!`
}
//botao 2
function Hora(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_hora.hidden = false;
    div_dobro.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;

}
function transformarEmHora(){
    const num = document.getElementById("num_hora").value;
    const hora = num*24;
    const resposta = document.getElementById("resposta2");
    resposta.textContent = `${num} equivale à ${hora} horas!`
}
//botao 3
function Media(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_media.hidden = false;
    div_hora.hidden = true;
    div_dobro.hidden = true;
    div_imc.hidden = true;

}
function calcularMedia(){
    const num1 = Number(document.getElementById("num_1semestre").value);
    const num2 = Number(document.getElementById("num_2semestre").value);
    const media = (num1 + num2)/2

    if(media >= 6 && media <= 10 ){
        document.getElementById("resposta3").textContent = `Sua média é ${media}, parabens por passar!!`
    }
    else if (media > 10 || media < 0){
        document.getElementById("resposta3").textContent = `é impossivel você possuir esta nota!!`
    }
    else {
        document.getElementById("resposta3").textContent = `Sua média é ${media}, sinto muito mas te vejo novamente ;)`

    }

}
//botao 4
function IMC(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_imc.hidden = false;
    div_dobro.hidden = true ;
    div_hora.hidden = true;
    div_media.hidden = true;
}
function calcularImc (){
    const altura = Number(document.getElementById("num_altura").value);
    const peso = Number(document.getElementById("num_peso").value);
    var IMC = peso/(altura**2);
    if(IMC < 20.7){
        document.getElementById("resposta4").textContent= `seu IMC é ${IMC.toFixed(2)}, você está ABAIXO DO PESO!`
    }
    else if(IMC >= 20.7 && IMC < 26.5){
        document.getElementById("resposta4").textContent= `seu IMC é ${IMC.toFixed(2)}, você está no PESO IDEAL :)`
    }
    else if (IMC >= 26.5 && IMC < 27.9){
        document.getElementById("resposta4").textContent= `seu IMC é ${IMC.toFixed(2)}, você está um POUCO ACIMA DO PESO!`
    }
    else if (IMC >= 27.9 && IMC < 31.2){
        document.getElementById("resposta4").textContent= `seu IMC é ${IMC.toFixed(2)}, você está ACIMA DO PESO!!`
    }
    else if(IMC >= 31.2){
        document.getElementById("resposta4").textContent= `seu IMC é ${IMC.toFixed(2)}, você está OBESO!!!`
    }
    
}

//botao 5
function Retangulo() {
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = false;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
function calcularArea(){
    const num1 = document.getElementById("numA").value;
    const num2 = document.getElementById("numB").value;

    const area = num1 * num2;
    document.getElementById("resposta5").textContent = `A area do retângulo é ${area} !`
}
//botao 6
function Vida(){
    div_vida = document.getElementById("div_vida");
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = false;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
function calcularIdade(){
    const ano = Number(document.getElementById("numIdade").value);
    const mes = Number(document.getElementById("numMes").value);
    const dia = Number(document.getElementById("numDia").value);
    const total = ((ano*12)+mes)*30+dia;

    document. getElementById("resposta6").textContent = `Você já viveu ${total} dias, parabens!!`
}
//botao 7
function Voto(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = false;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
function calcularVotos(){
    const branco = Number(document.getElementById("numBranco").value);
    const nulo = Number(document.getElementById("numNulo").value);
    const valido = Number(document.getElementById("numValido").value);
    const total = branco + nulo + valido;
    const percentB = (branco / total)*100;
    const percentN = (nulo / total)*100;
    const percentV = (valido / total)*100;

    document.getElementById("resposta7").textContent = `O total de votos foram ${total}, sendo eles:`
    document.getElementById("resposta7.1").textContent = `Brancos: ${percentB.toFixed(1)}% Nulos: ${percentN.toFixed(1)}% Validos: ${percentV.toFixed(1)}%`
}
//botao 8
function Carro(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = false;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
function calcularCarro(){
    const custo = Number(document.getElementById("custo").value);
    const percent = (28/100) * custo;
    const distribuidora = (54/100) * custo;
    const valor = custo + distribuidora + custo;

    document.getElementById("resposta8").textContent = `O valor do carro é R$${valor}`
}
//botao 9
function Ganho(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = false;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
function calcularCarro (){
    var total = Number(document.getElementById("total").value)
    var valor = Number(document.getElementById("valor").value)
    var salario = Number(document.getElementById("salario").value)
    var carro = Number(document.getElementById("carro").value)

    var percent = (5/100)*valor
    var comissao = carro * total
    var tot =  comissao + percent + salario

    document.getElementById("resposta9").textContent = `Seu salário desse mês foi R$${tot}`
}
//botao 10
function Par(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = false;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
function calcularPar(){
    const num = Number(document.getElementById("numPar").value);

    if(num % 2 == 0){
        document.getElementById("resposta10").textContent = `O numero ${num} é par!`
    }
    else{
        document.getElementById("resposta10").textContent = `O numero ${num} é impar`
    }
}
//botao 11
function Dobrar(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = false;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
const vetor11 = [];
var contador11 = vetor11.length;
function enviarVetor(){
    if(contador11<10){
        vetor11.push(document.getElementById("numVetor").value)
        document.getElementById("contadorD").textContent=`(${contador11+1})`;
        contador11++
        document.getElementById("contadorD").hidden = false;
    }
    else{
        const x1 = Number(document.getElementById("numVetor").value)
        const xx = []
        for(i=xx.length;i<vetor11.length;i++){
            xx[i] = vetor11[i]*x1
        }
        document.getElementById("resposta11").textContent = `Seu vetor dobrado é ${xx}`
        document.getElementById("refazerD").hidden = false;
    }

    if(contador11 == 10){
        document.getElementById("valorDob").hidden = true;
        document.getElementById("contadorD").hidden = true;
        document.getElementById("mult").hidden = false;
    }
}
function refazerDobro(){
    while (vetor11.length > 0){
        vetor11.pop()
        contador11 = vetor11.length
    }
    document.getElementById("contadorD").textContent = ""
    document.getElementById("resposta11").textContent = ""
    document.getElementById("refazerD").hidden = true;
    document.getElementById("valorDob").hidden = false;
    document.getElementById("mult").hidden = true;

}
//botao12
function Inverter(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = false;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
const vetor12 = [];
var contador12 = vetor12.length;
function inverterVetor(){
    if(contador12<20){
        vetor12.push(document.getElementById("numInverter").value);
        document.getElementById("contadorI").textContent=`(${contador12+1})`;
        contador12 ++

    }else{
        document.getElementById("resposta12").textContent = `O inverso do vetor é ${vetor12.reverse()}`
        document.getElementById("refazerI").hidden = false;
    }
}
function refazerInv(){
    while (vetor12.length > 0){
        vetor12.pop()
        contador12 = vetor12.length
    }
    document.getElementById("contadorI").textContent = ""
    document.getElementById("resposta12").textContent = ""
    document.getElementById("refazerI").hidden = true;

}
// botao 13
function Cadastro(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = false;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
const vetor13 = [];
var contador13 = vetor13.length;
function cadastrar(){
    if(contador13 < 10){
        vetor13.push(document.getElementById("numAdd").value);
        document.getElementById("contadorC").textContent=`(${contador13+1})`;
        contador13 ++
    }
    else{
        const x1 = document.getElementById("numLoc").value
        if(vetor13.find(element=>element == x1)){
            document.getElementById("resposta13").textContent = "Esse nome pertence a lista"
        }else{
            document.getElementById("resposta13").textContent = "Esse nome não pertence a lista"
        }
        document.getElementById("refazerN").hidden = false;
    }

    if(contador13 == 10){
        document.getElementById("add").hidden = true;
        document.getElementById("loc").hidden = false;
        document.getElementById("numAdd").hidden = true;
        document.getElementById("numLoc").hidden = false;
    }
}
function refazerNome(){
    while (vetor13.length > 0){
        vetor13.pop()
        contador13 = vetor13.length
    }
    document.getElementById("contadorC").textContent = ""
    document.getElementById("resposta13").textContent = ""
    document.getElementById("refazerN").hidden = true;

}
// botao 14
function Maior(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = false;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
const vetor14 = [];
var contador14 = vetor14.length;
function acharMaiorVetor(){
    if(contador14 < 10){
        if(document.getElementById("numAchar").value >= 0){
            vetor14.push(document.getElementById("numAchar").value);
            document.getElementById("contadorM").textContent=`(${contador14+1})`;
            contador14 ++
        }
        else{
            document.getElementById("resposta14").textContent="Selecione um valor acima de 0!"
        }
    }
    else{
        const maiorV = vetor14.reduce(function(prev,current){
            return prev > current ? prev : current;
        });
        document.getElementById("refazerM").hidden = false;
        document.getElementById("resposta14").textContent = `O maior valor digitado foi ${maiorV}`
    }
    
}
function refazerMaior(){
    while (vetor14.length > 0){
        vetor14.pop()
        contador14 = vetor14.length
    }
    console.log(vetor14)
    console.log(contador14)
    document.getElementById("contadorM").textContent = ""
    document.getElementById("resposta14").textContent = ""
    document.getElementById("refazerN").hidden = true;
}
// botao 15 
function Gerador(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = false;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}
function gerar(){
    const tab = []
    const num = Number(document.getElementById("numTabuada").value)
    const operador = document.getElementById("operador").value
    var i = tab.length

    switch(operador){
        case "1":
                do{
                    tab.push(num + i);
                    document.getElementById(`${i}`).textContent= `${num} + ${i} = ${tab[i]}`
                    i++
                }while(i<=10)
            break;
        case "2":
            do{
                tab.push(num - i);
                document.getElementById(`${i}`).textContent= `${num} + ${i} = ${tab[i]}`
                i++
            }while(i<=10)
            break;
        case "3":
            do{
                tab.push(num * i);
                document.getElementById(`${i}`).textContent= `${num} + ${i} = ${tab[i]}`
                i++
            }while(i<=10)
            break;
        case "4":
            do{
                tab.push(num / i);
                document.getElementById(`${i}`).textContent= `${num} + ${i} = ${tab[i]}`
                i++
            }while(i<=10)
            break;
        default:
            document.getElementById(`${i}`).textContent = "Por favor selecione um operador!"
            break;
    }
}

function Fechar(){
    div_dobro = document.getElementById("div_dobro");
    div_hora = document.getElementById("div_hora");
    div_media = document.getElementById("div_media");
    div_imc = document.getElementById("div_imc");
    div_area = document.getElementById("div_area");
    div_vida = document.getElementById("div_vida");
    div_voto = document.getElementById("div_voto");
    div_car = document.getElementById("div_carro");
    div_ganho = document.getElementById("div_ganho");
    div_par = document.getElementById("div_par");
    div_dobra = document.getElementById("div_dobra");
    div_inverter = document.getElementById("div_inverter");
    div_Cadastro = document.getElementById("div_Cadastro");
    div_Maior = document.getElementById("div_Maior");
    div_tabuada = document.getElementById("div_tabuada");
    div_tabuada.hidden = true;
    div_Maior.hidden = true;
    div_Cadastro.hidden = true;
    div_inverter.hidden = true;
    div_dobra.hidden = true;
    div_par.hidden = true;
    div_ganho.hidden  = true;
    div_car. hidden = true;
    div_voto.hidden = true;
    div_vida.hidden = true;
    div_area.hidden = true;
    div_dobro.hidden = true;
    div_hora.hidden = true;
    div_media.hidden = true;
    div_imc.hidden = true;
}