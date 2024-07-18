/* 
<div class="comentarios">
    <div>
        <img src="IMG/hasbula cuadrado.jpg" alt="Perfil">
        <h3>Hasbulla Nagomedov</h3>
    </div>
    <p> La pagina esta buena, los creadores son amigos mios.</p>
</div>
*/

const arreglo_imagenes = ['IMG/comentario 1.jpg','IMG/comentario 2.jpeg','IMG/comentario 3.jpg','IMG/comentario 4.webp'];
const arreglo_nombre = [' Hasbulla Nagomedov',' James Donaldson',' Stephen Curry',' Gal Gadot'];
const arreglo_comentario = ['La pagina esta buena, los creadores son amigos mios.','¡Excelente experiencia de usuario!','Todo está bien organizado y es muy fácil encontrar lo que busco. ','La velocidad de carga de esta página es impresionante. Nunca he tenido problemas de espera, y la calidad del contenido es top. ¡Sigan así!'];

//

let i = 0;

const div_comentario = document.querySelector('.comentarios');

const div_doble = document.createElement('div');
const h3 = document.createElement('h3');
const imagen = document.createElement('img');

const parrafo = document.createElement('p');

function cambiar_comentario() {

    imagen.src = arreglo_imagenes[i];
    h3.textContent = arreglo_nombre[i];
    parrafo.textContent = arreglo_comentario[i];
    i = (i + 1) % 4;

    div_doble.appendChild(imagen);
    div_doble.appendChild(h3);

    div_comentario.appendChild(div_doble);
    div_comentario.appendChild(parrafo);
}

cambiar_comentario()
setInterval(cambiar_comentario, 10000);