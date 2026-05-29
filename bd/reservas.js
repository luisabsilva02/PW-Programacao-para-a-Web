/*RESERVA
ID RESERVA
ID CLIENTE
ID CAMPO
ID MODALIDADE
ID FUNCIONÁRIO RESPONSÁVEL
ID CODIGO PROMOÇÃO
DIA
HORA
HASMAP(ID MATERIAL, QUANTIDADE)
NºPESSOAS
PREÇO
METODO_PAGAMENTO
ESTADO (PENDENTE, APROVADO, CANCELADO, REALIZADO).
FOTO
REVIEW
 */

let reserva1 ={
    id:"1",
    cliente: "1",
    recinto:"1",
    modalidade:"1",
    funcionario:"3",
    promocao:"1",
    dia:"2023-05-13",
    horas: [
        "22",
        "23"
    ],
    horaInicio:"22",
    horaFim:"24",
    materiais: [
        {
            nome: "Garrafas de Agua",
            id: "8",
            quantidade: 2,
            precoTotal: "1.00"
        },
        {
            nome: "Toucas",
            id: "10",
            quantidade: 2,
            precoTotal: "2.00"
        },
        {
            nome: "Bola Futebol",
            id: "1",
            quantidade: -1,
            precoTotal: "0.00"
        }
    ],
    numeroPessoas:15,
    preco: 30,
    metodoPagamento:"mbway",
    estado:"Pendente",
    foto:"./images/blablabla",
    review:"1",
    requisicaoMaterial: "Sim",
    desconto: 5.95,
    subTotal: 59.5,
    jogoOficial: "nao"
}

let reserva2 ={
    id:"2",
    cliente: "1",
    recinto:"1",
    modalidade:"1",
    funcionario:"1",
    promocao:"1",
    dia:"2023-05-14",
    horas: [
        "22",
        "23"
    ],
    horaInicio:"22",
    horaFim:"24",
    materiais: [
        {
            nome: "Garrafas de Agua",
            id: "8",
            quantidade: 2,
            precoTotal: "1.00"
        },
        {
            nome: "Toucas",
            id: "10",
            quantidade: 2,
            precoTotal: "2.00"
        },
        {
            nome: "Bola Futebol",
            id: "1",
            quantidade: -1,
            precoTotal: "0.00"
        }
    ],
    numeroPessoas:15,
    preco: 30,
    metodoPagamento:"mbway",
    estado:"Aprovado",
    foto:"./images/blablabla",
    review:"1",
    requisicaoMaterial: "Sim",
    desconto: 5.95,
    subTotal: 59.5,
    jogoOficial: "sim"
}


let reserva3 ={
    id:"3",
    cliente: "1",
    recinto:"1",
    modalidade:"1",
    funcionario:"1",
    promocao:"1",
    dia:"2023-02-01",
    horas: [
        "22",
        "23"
    ],
    horaInicio:"22",
    horaFim:"24",
    materiais: [
        {
            nome: "Garrafas de Agua",
            id: "8",
            quantidade: 2,
            precoTotal: "1.00"
        },
        {
            nome: "Toucas",
            id: "10",
            quantidade: 2,
            precoTotal: "2.00"
        },
        {
            nome: "Bola Futebol",
            id: "1",
            quantidade: -1,
            precoTotal: "0.00"
        }
    ],
    numeroPessoas:15,
    preco: 30,
    metodoPagamento:"mbway",
    estado:"Cancelado",
    foto:"./images/blablabla",
    review:"1",
    requisicaoMaterial: "Sim",
    desconto: 5.95,
    subTotal: 59.5,
    jogoOficial: "sim"
}

let reserva4 ={
    id:"4",
    cliente: "1",
    recinto:"1",
    modalidade:"1",
    funcionario:"1",
    promocao:"1",
    dia:"2023-02-01",
    horas: [
        "22",
        "23"
    ],
    horaInicio:"22",
    horaFim:"24",
    materiais: [
        {
            nome: "Garrafas de Agua",
            id: "8",
            quantidade: 2,
            precoTotal: "1.00"
        },
        {
            nome: "Toucas",
            id: "10",
            quantidade: 2,
            precoTotal: "2.00"
        },
        {
            nome: "Bola Futebol",
            id: "1",
            quantidade: -1,
            precoTotal: "0.00"
        }
    ],
    numeroPessoas:15,
    preco: 30,
    metodoPagamento:"mbway",
    estado:"Efetuado",
    foto:"./images/blablabla",
    review:"1",
    requisicaoMaterial: "Sim",
    desconto: 5.95,
    subTotal: 59.5,
    jogoOficial: "sim"
}


export function reservas(){
    if(!localStorage.getItem("reservas")){
        let reservas = Array();
        reservas.push(reserva1)
        reservas.push(reserva2)
        reservas.push(reserva3)
        reservas.push(reserva4)
        localStorage.setItem("reservas", JSON.stringify(reservas));
    }
    }
    