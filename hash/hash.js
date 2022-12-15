import { createHash } from 'crypto'

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash('uma senha'));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log('Usuário autenticado com sucesso!');
            return true;
        }

        console.log('Usuário ou senha incorretos.');
        return false;
    }
}

const usuario = new Usuario('Weverton Gomes', 'senhaQualquer')

console.log(usuario)

// Caso de sucesso
usuario.autentica('Weverton Gomes', 'senhaQualquer')

// Caso de fracasso
usuario.autentica('Weverton Fagner', 'senhaQualquer')