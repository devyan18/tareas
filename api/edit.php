<?php 
  include_once 'apitasks.php';
  $api = new ApiTasks();

  if(isset($_GET['id_task']) && isset($_GET['fullName']) && isset($_GET['description']) && isset($_GET['fk_state'])){
    $id_task = intval($_GET['id_task']);
    $fk_state = intval($_GET['fk_state']);
    $fullName = $_GET['fullName'];
    $description = $_GET['description'];
    $item = array(
      'id_task' => $id_task,
      'fullName' => $fullName,
      'description' => $description,
      'fk_state' => $fk_state
    );
    $api->edit($item);
  }else{
    $api->exito("DATOS INCORRECTOS");
  }
?>