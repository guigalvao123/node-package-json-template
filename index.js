import { countries } from "./countries.js"

console.log("Hello, World!")

const busca = process.argv[2]

//console.log(busca)

if (!busca) {
    console.log("A busca nao encontrou resultados.")
} else {
    const resultado = countries.filter((countrie) => {
        return countrie.name.toLowerCase().includes(busca.toLowerCase())
    })
    console.log(resultado)
}


