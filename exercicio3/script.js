const nomePergunta = "Qual seu nome?"
const dataNascimentoPergunta = "Qual sua data de nascimento? utilize as / para informar"
const enderecoPergunta = "Qual seu endereço?"
const cpfPergunta = "Qual seu cpf?"
const escolaridadePergunta = "Qual sua escolaridade?"
const sePossuiCnhPergunta = "Possui CHN?"
const filhosPergunta = "Quantos filhes possui?"
const cargoAtualPergunta = "Qual seu Cargo atual?"
const salarioPergunta = "Qual seu salario?"
const comissaoPergunta = "Recebe comissão?Se sim, aperte em confirme, caso não, clique em cancel"
const admissaoPergunta = "Informe o ano de admissão"




const nome = prompt(nomePergunta)
const dataNascimento = Number((prompt(dataNascimentoPergunta)))
const endereco = prompt(enderecoPergunta)
const cpf = Number(prompt(cpfPergunta))
const escolaridade = prompt(escolaridadePergunta)
const sePossuiCnh = prompt(sePossuiCnhPergunta)
const filhos = Number(prompt(filhosPergunta))
const cargoAtual = prompt(cargoAtualPergunta)
const salario = Number(prompt(salarioPergunta))
const comissao = confirm(comissaoPergunta)
const admissao = Number(prompt(admissaoPergunta))

console.log(
    nomePergunta, nome ,"\n" ,
    dataNascimentoPergunta, dataNascimento ,"\n" ,
    enderecoPergunta, endereco ,"\n" ,
    cpfPergunta, cpf ,"\n" , 
    escolaridadePergunta, escolaridade ,"\n" ,
    sePossuiCnhPergunta, sePossuiCnh ,"\n" ,
    filhosPergunta, filhos , "\n" ,
    cargoAtualPergunta, cargoAtual ,"\n" ,
    salarioPergunta, salario ,"\n" ,
    comissaoPergunta, comissao ,"\n" ,
    admissaoPergunta, admissao

);


console.log("=============================================");
console.log("console com os tipos de cada resposta");

console.log(nome, typeof dataNascimento);
console.log(dataNascimento, typeof nome);
console.log(typeof endereco);
console.log(typeof cpf);
console.log(typeof escolaridade);
console.log(typeof sePossuiCnh);
console.log(typeof filhos);
console.log(typeof cargoAtual);
console.log(typeof salario);
console.log(typeof comissao);
console.log(typeof admissao);
