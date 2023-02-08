//par nome - valor 

const saudacao = `Opa` // contexto lexico 1 
    function exec () {
        const saudacao = `Fala` // contexto lexico 2 
        return saudacao
    }


    // objetos sao grupos alinhados de pares name/ valor 

    const cliente = {
        nome:'Pedro', 
        idade:32,
        peso:90,
        endereco: {
            logradouro:'Rua Muito Lrgal',
            numero:123
        }
    }