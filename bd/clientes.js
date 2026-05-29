let cliente1 = {
    id: "1",
    nome: "beatriz morais",
    given_name: "beatriz",
    family_name: "morais",
    email: "mariabeatrizmorais2002@gmail.com",
    password: "12345678",
    verifiedEmail: true,
    foto: "https://lh3.googleusercontent.com/a/AGNmyxbLgLQgZJy46Ja2TRtzDl1NVIPSobA3udZ_7u2G=s96-c",
    telemovel: "925980703",
    cidade: "Esqueiros",
    endereco: "rua de covide",
    reservas: ["1","2","3","4"],
    tipo: "Cliente",
}

let cliente2 = {
    id: "2",
    nome: "Guilherme Barbosa",
    given_name: "Guilherme",
    family_name: "Barbosa",
    email: "guihermatador45@gmail.com",
    password: "12345678",
    verifiedEmail: true,
    foto: "https://lh3.googleusercontent.com/a/AAcHTtfjN1kT9XSVQwYZ5l0UXwaQLUnFKYkgjnhDHtMtAw=s332-c-no",
    telemovel: "938055093",
    cidade: "Paradela",
    endereco: "rua de covide",
    reservas: ["1","2","3","4"],
    tipo: "Cliente",
}

/*
let cliente2 = {
    id: "2",
    nome: "Beatriz Morais",
    nomeUtilizador: "urdbea",
    email: "beatrizmoarais2002@gmail.com",
    foto: "images/Funcionaria_Bia.jpeg",
    password: "12345678",
    reservas: ["3", "4"],
    tipo: "Cliente"
}

let cliente3 = {
    id: "3",
    nome: "Gonçalo Regadas",
    nomeUtilizador: "regadas1",
    email: "regadas@gmail.com", //mudar o mail depois
    foto: "images/Funcionaria_Bia.jpeg",
    password: "12345678",
    reservas: ["3", "4"],
    tipo: "Cliente"
}
*/
export function clientes() {
    if (!localStorage.getItem("clientes")) {
        let clientes = Array();
        clientes.push(cliente1)
        clientes.push(cliente2)
        localStorage.setItem("clientes", JSON.stringify(clientes));
    }
}
