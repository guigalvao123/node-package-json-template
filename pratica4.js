
const nome = process.argv[2]
const idade = process.argv[3]

console.log(nome)
console.log(idade)

if(!nome || !idade){
    console.log("Nome e idade nao informados.")
}else{
    console.log(`Ola ${nome}, voce tem ${Number(idade)}anos de idade e daqui 7 anos tera ${Number(idade)+ 7}.`)
}