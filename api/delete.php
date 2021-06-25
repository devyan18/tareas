<?php 
  include_once 'apitasks.php';
  $api = new ApiTasks();

  if(isset($_GET['id_task'])){
    $id_task = intval($_GET['id_task']);
    $api->delete($id_task);
  }else{
    $api->exito("DATOS INCORRECTOS");
  }
?>