function muestraRegistros(doc){
            
    var registro = new Registro(doc.id,doc.data().nombre,doc.data().codigo);
        
    let li = document.createElement("li");
    li.setAttribute("id", registro.id);

    let nombre = document.createElement("input");
    nombre.type = "text";
    nombre.value = registro.nombre;
    nombre.style.width = '100%';
    nombre.readOnly = true;

    let codigo = document.createElement("input");
    codigo.type = "text";
    codigo.value = registro.codigo;
    codigo.style.width = '100%';
    codigo.readOnly = true;

    let borrar = document.createElement("button");
    borrar.className = "btnBorrar m-3";
    borrar.textContent = "Borrar  ";

    let editar = document.createElement("button");
    editar.className = "btnAgregar m-3";
    editar.textContent = "Editar  ";
    editar.setAttribute("data-toggle", "modal");
    editar.setAttribute("data-target", "#ventanaeditar");

    let divChido1 = document.createElement("div");
    divChido1.appendChild(nombre);

    let divChido2 = document.createElement("div");
    divChido2.appendChild(codigo);

    li.appendChild(borrar);
    li.appendChild(editar);
    li.appendChild(divChido1);
    li.appendChild(divChido2);
    productoslista.appendChild(li);

    borrar.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");             
        registro.borrar(id);
    });

    editar.addEventListener("click", (e) => {   
        let id = e.target.parentElement.getAttribute("id");   
        registro.editar(id);
    });

}
