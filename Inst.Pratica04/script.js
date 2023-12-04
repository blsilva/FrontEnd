document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('button').forEach(function (button) {
        button.addEventListener('click', function () {

            var destino = this.closest('.elementos').querySelector('h3').textContent;
            var preco = this.closest('.elementos').querySelector('h2').textContent;
            var info = this.closest('.elementos').querySelectorAll('ul li');

            var pacoteTuristico = {
                destino: destino,
                preco: preco,
                detalhes: Array.from(info).map(item => item.textContent.trim())
            };

            console.log(JSON.stringify(pacoteTuristico, null, 2));
        });
    });
});
