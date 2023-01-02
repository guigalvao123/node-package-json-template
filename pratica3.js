import { countries } from "./countries.js";

// um script adiciona um pais a lista de paises


const name = process.argv[2]
const code = process.argv[3]

console.log(name)
console.log(code)

if(!name || !code){
    console.log("Faltou o nome ou codigo do pais")
} else {
    const novoPais ={
        name,
        code,
    }

    countries.push(novoPais)

    console.log(countries[countries.length - 1])
}