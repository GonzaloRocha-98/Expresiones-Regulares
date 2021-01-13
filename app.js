document.getElementById("buscar").addEventListener('submit', function(){
    const texto = document.getElementById("texto").value.trim().toLowerCase().split(' ');
    const palabraABuscar = document.getElementById("palabra").value;
    let repeticiones = 0;
    texto.forEach(palabra => {
        if (palabra.match(palabraABuscar)){
            repeticiones++;
        }
    });
    let element = document.createElement('div');
    element.innerHTML = `
        <strong>Se encontraron ${repeticiones} coincidencias </strong>
    `;
    let coincidencias = document.getElementById('coincidencias');
	while (coincidencias.firstChild){
		coincidencias.removeChild(coincidencias.firstChild)
	}
    coincidencias.appendChild(element)
});