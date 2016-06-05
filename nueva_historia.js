var nueva_historia = {
  ventana: {
      mostrarVentanaHistoria: function(){
        document.getElementById("ventanaHistoria").style.display = 'block';
        document.getElementById("fadebox").style.display = 'block';
      },
      ocultarVentanaHIstoria: function(){
          document.getElementById("ventanaHistoria").style.display = 'none';
          document.getElementById("fadebox").style.display = 'none';
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
              
          } else {
              alert("Los siguiente campos son incorrectos o están vacios: " + error);
          }
      }
  }
};


