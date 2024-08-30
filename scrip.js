const carrito = document.getElementById('carrito');
const elemento1 =  document.getElementById('lista-1');

const lista = document.querySelector('#lista-carrito tbody');
const VaciarCarritobtn= document.getElementById('vaciar-carrito');

cargarEvenListeners();

function cargarEvenListeners(){
    elemento1.addEventListener('click' , comprarElemento);
    carrito.addEventListener('click', eliminarElemnto);
    VaciarCarritobtn.addEventListener('click', vaciarCarrito);

}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento); 
    }
}

function leerDatosElemento(elemento){

    const infoElemento={
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);

}

function insertarCarrito( elemento){
    const row = document.createElement('tr');
    row.innerHTML= `
    <td>
    <img src="${elemento.imagen}" whidth =100 >
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
    ${elemento.precio}
    </td>
    <td>
        <a herf ="#" class="borrar" data-id= ${elemento.id}>x 
    </td>
    `
    lista.appendChild(e);
    }


function eliminarElemnto(e){
    e.preventDefault();
     let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remover();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');

    }
}
    function vaciarCarrito(){
        while(lista.firstChild){
            lista.removeChild(lista.firstChild);

        }
        return false;
    }