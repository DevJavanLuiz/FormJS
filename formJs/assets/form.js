function meuEscopo() {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado');
    let contador = 0;
    const listaPessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        alert('Obtido com sucesso!');
        contador++
        listaPessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(listaPessoas);

        resultado.innerHTML += `<h3> (${contador}) ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}. </h3>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo()