let pessoas = []
let continuar = true

function Pessoa(nome, idade, cor){
    this.nome = nome;
    this.idade = idade;
    this.cor = cor;
}

while (continuar) {
    if (continuar){
        let nome = prompt ('Digite seu nome');
        let idade = Number(prompt ('Digite sua idade'));
        let cor = prompt ('Digite sua cor preferida');
        let NovaPessoa = new Pessoa(nome,idade,cor)
        pessoas.push(NovaPessoa)
        continuar = confirm ('Deseja realizar outro registro');
    } else {
        continuar = false;
        break;
    }
}
// Mostrar os Registros creados
function Registros(NovaPessoa){ 
    console.table(NovaPessoa)
  }
  pessoas.forEach(Registros)


// Ordenar  persona mas vieja
function PessoaMaisVelha(NovaPessoa){
    NovaPessoa.sort(function(a, b) {
        return a.idade - b.idade
    });
    
    let MaisVelho = NovaPessoa[NovaPessoa.length - 1]; 
    return MaisVelho;
}

function MostrarPessoaMaisVelha() { 
     let pessoaMaisVelha = PessoaMaisVelha(pessoas); 
     console.log(`A pessoa mais velha é: ${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos e cor favorita ${pessoaMaisVelha.cor}`); 
     return 
  }

  MostrarPessoaMaisVelha()

  function PessoaMaisJovem(NovaPessoa){
    NovaPessoa.sort(function(a, b) {
        return b.idade - a.idade
    });
    
    let MaisJovem = NovaPessoa[NovaPessoa.length - 1]; 
    return MaisJovem;
}

function MostrarPessoaMaisJovem() { 
     let pessoaMaisJovem = PessoaMaisJovem(pessoas); 
     console.log(`A pessoa mais Jovem é: ${pessoaMaisJovem.nome} com ${pessoaMaisJovem.idade} anos e cor favorita ${pessoaMaisJovem.cor}`); 
     return 
  }
  MostrarPessoaMaisJovem()