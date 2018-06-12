const boton = document.getElementById("btn");
boton.addEventListener("click", () => {
    //aca guardo el comentario ingresado por el usuario
    let comments = document.getElementById("comment").value;

    //limpiar el textarea (sin un boton)
    document.getElementById("comment").value = " ";

    //contenedor donde dejare mis comentarios en html
    const cont = document.getElementById("cont");

    //PASOS nuevos: crear div contenedor
    const newComments = document.createElement("div");
 
    //validar que el usuario no ingrese comentarios vacios
    if(comments.length === 0 || comments === null){
      alert("Debes ingresar un mensaje");
    }

    //crear checkbox
    const chck = document.createElement("input");
    chck.type = "checkbox";

    //crear icono corazon
    const heart = document.createElement("i");
    heart.classList.add('fas', 'fa-heart', 'heart');
    
    //crear icono basura
    const trash = document.createElement("i");
    trash.classList.add('fas', 'fa-trash', 'trash');

    //nodos de texto del texarea
    let textNewComment = document.createTextNode(comments);

    const contenedorElemento = document.createElement('p');
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(chck);
    newComments.appendChild(trash);
    newComments.appendChild(heart);
    newComments.appendChild(contenedorElemento);

    cont.appendChild(newComments);
})