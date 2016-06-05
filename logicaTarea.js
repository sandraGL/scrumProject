var logicaTarea = {
  intentarOperacionEnBD: function(datos, callback){
      this.callback = callback;
      servidorConexion.solicitarBD(datos, logicaTarea.operacionTerminado);
  },
  operacionTerminado: function(datos){
      logicaTareacallback(datos);
  }
};


