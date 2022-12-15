const criptografia = "mensagemcriptografada"

console.log(criptografia)

function cifraMensagem(mensagem, posicao) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codCaractere = caractere.charCodeAt (0)
        return String.fromCharCode(codCaractere + posicao)
    })

    return mensagemCifrada.join('')
}

const mensagemcriptografada = cifraMensagem(criptografia, 3)

console.log(mensagemcriptografada)

function decifraMensagem(mensagem, posicao) {
    const mensagemCifrada = mensagem.split('').map(caractere => {
        const codCaractere = caractere.charCodeAt (0)
        return String.fromCharCode(codCaractere - posicao)
    })

    return mensagemCifrada.join('')
}

const mensagemDecifrada = decifraMensagem(mensagemcriptografada, 3)

console.log(mensagemDecifrada)