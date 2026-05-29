/*ID PROFISSIONAL
NOME
ESPECIALIDADE(MODALIDADE)
RESERVAS[ID RESERVA]
 */


let funcionario1 = {
    id:"1",
    nome: "Guilherme Barbosa",
    nomeUtilizador: "Gui002",
    email:"guilhermebarbosa2002@live.com.pt",
    password:"12345678",
    especialidadeModalidade:"2",
    reservas:["1","2"], //ver com stor
    complexo:"1",
    foto: "https://scontent.flis7-1.fna.fbcdn.net/v/t39.30808-6/272837819_4820134191408909_1859813212836834228_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=7c-xUNv9bSgAX8G4qjQ&_nc_ht=scontent.flis7-1.fna&oh=00_AfDdYC6JgK4dnYe5x9Lbf01IDRaWrkytE0eYSkDI4MFv1g&oe=6474AF27",
    tipo: "Funcionario"
}

let funcionario2 = {
    id:"2",
    nome: "Rodrigo Cunha",
    nomeUtilizador: "cunha002",
    email:"cunha@gmail.com",
    password:"12345678",
    especialidadeModalidade:"2",
    reservas:["1","2"], //ver com stor
    complexo:"1",
    foto: "https://scontent.flis7-1.fna.fbcdn.net/v/t31.18172-8/23331234_1389459214485569_4002798563548403891_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Hir9-gtlaCEAX8FAgQ_&_nc_ht=scontent.flis7-1.fna&oh=00_AfCfI5rmm-J-08kjRHqQo6dQZfC6qq29zj4Aiu0uyO74qw&oe=64981CC3",
    tipo: "Funcionario"
}

let funcionario3 = {
    id:"3",
    nome: "Gonçalo Regadas",
    nomeUtilizador: "regadas1",
    email:"regadas02@gmail.com", //mudar o mail depois
    password:"12345678",
    especialidadeModalidade:"2",
    reservas:["1","2"], //ver com stor
    complexo:"1",
    foto: "https://scontent.flis7-1.fna.fbcdn.net/v/t1.6435-9/118693626_10223224356818212_4454918171389175769_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IXQH4xvo588AX9xWAf4&_nc_ht=scontent.flis7-1.fna&oh=00_AfDPz7kd9Nc9XUOyUSIlCptIFhljdSS4aTK1mKNTvWYjiA&oe=6497E859",
    tipo: "Funcionario"
}

export function funcionarios(){
if(!localStorage.getItem("funcionarios")){
    let funcionarios = Array();
    funcionarios.push(funcionario1)
    funcionarios.push(funcionario2)
    funcionarios.push(funcionario3)
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
}
}