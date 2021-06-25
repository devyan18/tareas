<?php 
  include_once 'apitasks.php';

  $api = new ApiTasks();

  if(isset($_GET['id'])){
    $id = $_GET['id'];
    $api->getById($id);
  }else{
    $api->getAll();
}
?>