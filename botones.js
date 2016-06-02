var botones = {
  init: function(){
      var btn_nueva_historia = document.getElementById("nueva_historia");
      btn_nueva_historia.addEventListener("click", function(){
         console.log(btn_nueva_historia);
         nueva_historia.ventana.mostrarVentanaHistoria();
      });
  }  
};


