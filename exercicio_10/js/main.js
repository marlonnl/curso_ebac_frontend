$(document).ready(function() {

    $('#carousel-imagens').slick({
        autoplay: true,
    });

    $('#telefone').mask('(00) 00000-0000', {placeholder: '(DDD) 12345-6789'});
    $('#cpf').mask('000.000.000-00', {placeholder: '123.456.789-00'});
    $('#cep').mask('00000-000', {placeholder: '012345-678'});

    $('form').validate({
        rules: {
            nome: { required: true },
            email: { required: true },
            telefone: { required: true },
            endereco: { required: true },
            cep: { required: true },
            cpf: { required: true },
        },

        messages: {
            nome: 'Por favor, coloque seu nome.',
            email: 'Por favor, coloque um e-mail válido.',
            cpf: 'Por favor, coloque seu CPF.',
            telefone: 'Por favor, coloque seu telefone.',
            endereco: 'Por favor, coloque seu endereço.',
            cep: 'Por favor, coloque seu CEP.',
        },

        submitHandler: function(form) {
            form.submit();
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        },
        invalidHandler: function(event, validator) {
            let camposInvalidos = validator.numberOfInvalids();
            alert(`Existem ${camposInvalidos} campos preenchidos incorretamente ou vazios, para prosseguir com sua compra indique seus dados coretamente.`);
        }
    });

});