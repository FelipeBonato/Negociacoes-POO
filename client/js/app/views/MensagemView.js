class MensagemView extends View {

    constructor(elemento) {
        super(elemento);  // chamando a classe pai View
    }

    template(model) {

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }

}