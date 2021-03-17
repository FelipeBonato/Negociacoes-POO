class DateHelper {

    constructor() {

        throw new Error('a classe DateHelper não pode ser instacianda');
    }

    // método statico nao precisa de instanciar para usa-lo
    static dataParaTexto(data) {
        // altera modelo de data padrao para xx/xx/xxxx
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
   }

    static textoParaData(texto) {
        //expressao regular  aaaa-mm-dd
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
                                    //
       return new Date(...texto.split('-').map((item, indice) => item - indice % 2 ));
    }
}