document.getElementById("buscar").addEventListener('submit', function(e){
    //const texto = document.getElementById("texto").value.toLowerCase().split(' ');
    const texto = document.getElementById("texto").value.toLowerCase();
    const palabraABuscar = document.getElementById("palabra").value;
    let repeticiones = 0;
    /*texto.forEach(palabra => {
        if (palabra.match(palabraABuscar)){
            repeticiones++;
        }
    });*/
    let i= 0;
    while (i !== -1){
    	i= texto.indexOf(palabraABuscar,i);
    	if(i !== -1){
    		i++;
		repeticiones++;
	}	    
    }
    let element = document.createElement('div');
    element.innerHTML = `
        <strong>Se encontraron ${repeticiones} coincidencias </strong>
    `;
    let coincidencias = document.getElementById('coincidencias');
	while (coincidencias.firstChild){
		coincidencias.removeChild(coincidencias.firstChild)
	}
    coincidencias.appendChild(element)
    e.preventDefault();	
});
