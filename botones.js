var botones = {
  init: function(){
      var btn_nueva_historia = document.getElementById("nueva_historia");
      btn_nueva_historia.addEventListener("click", function(){
         console.log(btn_nueva_historia);
         nueva_historia.ventana.limpiarFields();
         nueva_historia.ventana.mostrarVentanaHistoria();
      });
      var btn_cancelar_historia = document.getElementById("cancelar");
      btn_cancelar_historia.addEventListener("click", function(){
          console.log(btn_cancelar_historia);
          nueva_historia.ventana.titulo(1, null);
          nueva_historia.ventana.ocultarVentanaHIstoria();
      });
      var btn_enviar_historia = document.getElementById("enviar");
      btn_enviar_historia.addEventListener("click", function(){
          console.log("Hey, bitch!");
          nueva_historia.recogidaDatos.validacion();
      });
  }  
};


