const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

const novoArray = pets.map((dogs) => {
    return dogs.nome
})

console.log(novoArray)

const arraySalsicha = pets.filter((dogs) => {
    return dogs.raca === "Salsicha"
})

console.log(arraySalsicha)

const arrayMensagem = pets.filter((dogs) => {
    return dogs.raca === "Poodle"
}).map((nome) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nome.nome}!`
})

console.log(arrayMensagem)

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]


const nomeProdutos = produtos.map((nome) => {
    return nome.nome
})

console.log(nomeProdutos);

const produtosComDesconto = produtos.map((p) => {
    return { nome: p.nome, preco: (p.preco - (p.preco * 0.05)).toFixed(2) }
})

console.log(produtosComDesconto);

const arrayBebidas = produtos.filter((b) => {
    return b.categoria === "Bebidas"
})

console.log(arrayBebidas);

const arrayYpê = produtos.filter((p) => {
    return p.nome.includes("Ypê")
})

console.log(arrayYpê);

const arrayYpêFrase = produtos.filter((p) => {
    return p.nome.includes("Ypê")
}).map((p) => {
    return ` Compre ${p.nome} por ${p.preco} R$`
})

console.log(arrayYpêFrase);


const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

const pokemonsOrdenando = pokemons.map(nome => nome.nome).sort();
console.log(pokemonsOrdenando);

const tiposPokemons = pokemons.map(tipo => tipo.tipo);
const arraySemDuplicidade = [...new Set(tiposPokemons)];

console.log(arraySemDuplicidade);





