$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })
    
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(DDD) 12345-1234'
    })
    
    $('#cpf').mask('000.000.000-00', {
        placeholder: '123.456.789-00'
    })
    
    $('#cep').mask('00000-000', {
        placeholder: '012345-678'
    })
    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            },
            cpf: {
                required: true
            },
        },
        messages:{
            nome: 'Por favor, insira o seu nome',
            email:{
                required:'Por favor, insira um E-mail valido',
                email:'Por favor, insira seu E-mail'
            },
            telefone:'Por favor, insira seu número de Telefone',

            endereco:'Por gentileza, insira seu Endereço',

            cep:'Por gentileza, nos informe seu cep',

            cpf:'Por favor, Informe seu cpf'
        },
        submitHandler: function (form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.reset();
        },
        invalidHandler: function (form, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos)
            alert(`Por favor, preencha os campos para prosseguir com a compra!
Existem ${camposIncorretos} Campos incorretos.`);
        }
    })

})




