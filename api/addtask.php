<?php 
  include_once 'apitasks.php';
  $api = new ApiTasks();

  if(isset($_GET['fullName']) && isset($_GET['description']) && isset($_GET['fk_state'])){
    $fullName = $_GET['fullName']; $description = $_GET['description']; $fk_state = intval($_GET['fk_state']);
    $item = array(
      'fullName' => $fullName,
      'description' => $description,
      'fk_state' => $fk_state
    );
    $api->add($item);
  }else{
    $api->exito("DATOS INCORRECTOS");
  }
?>