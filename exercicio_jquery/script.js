$(document).ready(function() {

    $('form').on('submit', function(event) {
        event.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();

        let liId = $('ul li').length;
        let novoLi = $(`<li id='${liId}' style='display:none'>${novaTarefa}</li>`);
        $(novoLi).appendTo('ul');
        $(novoLi).fadeIn();

        $('#nova-tarefa').val('');

    });

    $('ul').on('click', function(event) {
        // let clickedId = event.target.id;
        let eventDecoration = event.target.style;
    
        if (eventDecoration.length > 0) { $(event.target).css('text-decoration', ''); }
        else { $(event.target).css('text-decoration', 'line-through'); }
    });
});
