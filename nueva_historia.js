var nueva_historia = {
  ventana: {
      mostrarVentanaHistoria: function(){
        document.getElementById("ventanaHistoria").style.display = 'block';
        document.getElementById("fadebox").style.display = 'block';
      },
      ocultarVentanaHIstoria: function(){
          document.getElementById("ventanaHistoria").style.display = 'none';
          document.getElementById("fadebox").style.display = 'none';
      },
      limpiarFields: function(){
          document.getElementById("nombre_historia").value = "";
          document.getElementById("descripcion_historia").value = "";
          document.getElementById("valor_negocio").value = "";
          document.getElementById("color_historia").value = "";
      }
  },
  
  recogidaDatos: {
      validacion: function(){
          var nombre = document.getElementById("nombre_historia").value;
          var descripcion = document.getElementById("descripcion_historia").value;
          var valor_negocio = document.getElementById("valor_negocio").value;
          var color = document.getElementById("color_historia").value;
          console.log(nombre + ", " + descripcion + ". " + valor_negocio + ", " + color);
          
          var error = "";
          
          if (nombre == ""){
              error+="nombre, ";
          }
          if (descripcion == ""){
              error+="descripción, ";
          }
          if (valor_negocio <= 0 || valor_negocio == ""){
              error+="valor de negocio";
          }
          
          if (error == ""){
              console.log("This is all, buddy!");
              logicaTarea.intentarOperacionEnBD({h: "historia", nombre: nombre, descripcion: descripcion, valor_negocio: valor_negocio, color: color, i: "insertar"}, nueva_historia.dibujarHistoria);
          } else {
              alert("Los siguiente campos son incorrectos o están vacios: " + error);
          }
      }
  },
  
  dibujarHistoria: function(datos){
      
      var div = document.createElement("div");

			var historiaBox = "<ul><li>" + datos.nombre + "</li><li>" + datos.descripcion + "</li></ul><span>" + datos.valor_negocio + "</span>";
			
			var id_historia = datos.nombre;

			div.setAttribute("class", "historia");
			div.setAttribute("id", id_historia);
			div.setAttribute("draggable",true);
			div.style.backgroundColor = datos.color;
			div.innerHTML = historiaBox;

			var backlog = document.getElementById("backlog");
			backlog.appendChild(div);

			nueva_historia.ventana.ocultarVentanaHIstoria();
                        console.log("Ready, bitch!");
  }
};


