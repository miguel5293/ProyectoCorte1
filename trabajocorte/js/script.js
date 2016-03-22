window.onload = function()
{
	tareas = []; 
	// arreglo para agregar tareas
	
	let config = {nombre : "listadoUsuario", tipo   : "localStorage"};
// declaracion de tipo de persistencia a utilizar

	function tarea(id,estado) // funcion donde se declaran las variables a utilizar
	{
		this.tarea = id;
		this.estado = estado;

	}

	if(localStorage.getItem("listadoUsuario"))
	{
		
	}
		
}