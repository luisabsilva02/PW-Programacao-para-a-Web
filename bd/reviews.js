/*
REVIEW 
ID REVIEW
ID CLIENTE
NÚMERO ESTRELAS ESPAÇO
NÚMERO ESTRELAS BALNEÁRIOS
ESTADO_MATERIAL
RECOMENDARIA_BOOL
COMENTÁRIOS
*/


let review1 = {
    id:"1",
    cliente: "1",
    data:"2023-02-03",
    classificacao:"5",
    estadoMaterial:"Boas Condiçõe?",
    recomendaria:"Sim",
    comentario:"Gostei muito, quero voltar a repetir"
    
}

let review2 = {
    id:"2",
    cliente: "2",
    data:"2023-02-04",
    classificacao:"4",
    estadoMaterial:"Material Desgastado!",
    recomendaria:"Não",
    comentario:"Detestei muito!"
}

let review3 = {
    id:"3",
    cliente: "1",
    data:"2023-02-05",
    classificacao:"1",
    estadoMaterial:"Não reservei Material",
    recomendaria: "Não",
    comentario:"Não quero repetir!"
}

let review4 = {
    id:"4",
    cliente: "2",
    data:"2023-02-03",
    classificacao:"5",
    estadoMaterial:"Boas Condiçõe?",
    recomendaria:"Sim",
    comentario:"Gostei muito, quero voltar a repetir"
    
}

let review5 = {
    id:"5",
    cliente: "1",
    data:"2023-02-04",
    classificacao:"4",
    estadoMaterial:"Material Desgastado!",
    recomendaria:"Não",
    comentario:"Pavilhao estava limpo. gostei muito de visitar"
}

let review6 = {
    id:"6",
    cliente: "2",
    data:"2023-02-05",
    classificacao:"5",
    estadoMaterial:"Não reservei Material",
    recomendaria: "Não",
    comentario:"Adorei jogar a bola com os meus amigos"
}

export function reviews(){
if(!localStorage.getItem("reviews")){
    let reviews = Array();
    reviews.push(review1)
    reviews.push(review2)
    reviews.push(review3)
    reviews.push(review4)
    reviews.push(review5)
    reviews.push(review6)
    localStorage.setItem("reviews", JSON.stringify(reviews));
}
}