<?php 
  include_once 'task.php';

  class ApiTasks{


    function getAllStates(){
      $state = new Task();
      $states = array();
      $states["states"] = array();
      $res = $state->obtenerStates();

      if($res->rowCount()){
        while ($row = $res->fetch(PDO::FETCH_ASSOC)) {
          $item = array(
            'id_state' => $row['id_state'],
            'description_state' => $row['description_state']
          );

          array_push($states['states'],$item);

        }
        echo json_encode($states);
      }else{
        echo json_encode(array('mensaje' => 'no se encontraron elementos'));
      }
    }
    function getAll(){
      $task = new Task();
      $tasks = array();
      $tasks["tasks"] = array();
      $res = $task->obtenerTasks();

      if($res->rowCount()){
        while ($row = $res->fetch(PDO::FETCH_ASSOC)) {
          $item = array(
            'id_task' => $row['id_task'],
            'fullName' => $row['fullName'],
            'description' => $row['description'],
            'fk_state' => $row['fk_state']
          );

          array_push($tasks['tasks'],$item);

        }
        echo json_encode($tasks);
      }else{
        echo json_encode(array('mensaje' => 'no se encontraron elementos'));
      }
    }
    function getById($id){
      $task = new Task();
      $tasks = array();
      $tasks["tasks"] = array();
      $res = $task->obtenerTask($id);

      if($res->rowCount()){
        while ($row = $res->fetch(PDO::FETCH_ASSOC)) {
          $item = array(
            'id_task' => $row['id_task'],
            'fullName' => $row['fullName'],
            'description' => $row['description'],
            'fk_state' => $row['fk_state']
          );
          array_push($tasks['tasks'],$item);
        }
        echo json_encode($tasks);
      }else{
        echo json_encode(array('mensaje' => 'no se encontraron elementos'));
      }
    }

    function add($item){
      $task = new Task();
      $task->nuevoTask($item);
      $this->exito('Alta realizada correctamente');
    }
    function delete($item){
      $task = new Task();
      $task->eliminarTask($item);
      $this->exito('Baja realizada correctamente');
    }
    function edit($item){
      $task = new Task();
      $task->modificarTask($item);
      $this->exito('Modificación realizada correctamente');
    }
    function exito($mensaje){
      echo json_encode(array('mensaje' => $mensaje));
    }
  }   
?>