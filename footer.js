Form = {
    valida() {
        let email = document.querySelector('input#email')

        if(email.value === "") {
            throw new Error("Por favor, insira seu email!")
        }

        else if(email.value.indexOf('@') == -1 || email.value.indexOf('.com') == -1) {
            throw new Error('Email inválido! Insira um email no formato definido.')
        }

        else {
            alert('Email enviado com sucesso!')
            email.value = ""
        }
        
    },

    submit(event) {
        event.preventDefault()

        try {
            Form.valida()
        }
        catch(erro) {
            alert(erro.message)
        }
    }
}