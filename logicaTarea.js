var logicaTarea = {
  intentarOperacionEnBD: function(datos, callback){
      this.callback = callback;
      //servidorConexion.solicitarBD(datos, logicaTarea.operacionTerminado);
      logicaTarea.operacionTerminado(datos);
  },
  operacionTerminado: function(datos){
      logicaTarea.callback(datos);
  }
};


