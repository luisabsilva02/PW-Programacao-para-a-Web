/*
id
nome
localizacao
*/


let complexo1 = {
    id:"1",
    nome: "Complexo de Braga",
    localizacao:"Braga",
    rua:"Gualtar, rotunda do mc",
    recintos:["1","2"],
    funcionarios:["1"]

}


let complexo2 = {
    id:"2",
    nome: "Complexo de Lisboa",
    localizacao:"Lisboa",
    rua:"Marquês de Pombal",
    recintos:["3","4","5","6"],
    funcionarios:["2"]
}


export function complexos(){
if(!localStorage.getItem("complexos")){
    let complexos = Array();
    complexos.push(complexo1)
    complexos.push(complexo2)
    localStorage.setItem("complexos", JSON.stringify(complexos));
}
}