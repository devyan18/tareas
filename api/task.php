<?php
  include_once 'conexion.php';

  class Task extends DB{
    function obtenerTasks(){
      $query = $this->connect()->query('SELECT * FROM tasks');
      return $query;
    }
    function eliminarTask($id_task){
      $query = $this->connect()->prepare('DELETE FROM tasks WHERE id_task = :id_task');
      $query->execute(['id_task' => $id_task]);
      return $query;
    } 
    function obtenerTask($id){
      $query = $this->connect()->prepare('SELECT * FROM tasks WHERE id_task = :id');
      $query->execute(['id' => $id]);
      return $query;
    }
    function nuevoTask($task){
      $query = $this->connect()->prepare('INSERT INTO tasks ( fullName, description, fk_state) VALUES (:fullName, :description, :fk_state)');
      $query->execute(['fullName' => $task['fullName'],'description' => $task['description'], 'fk_state' => $task['fk_state']]);
      return $query;
    }
    function modificarTask($task){
      $query = $this->connect()->prepare('UPDATE tasks SET fullName=:fullName,description=:description,fk_state=:fk_state WHERE id_task = :id_task');
      $query->execute(['id_task' => $task['id_task'], 'fullName' => $task['fullName'],'description' => $task['description'], 'fk_state' => $task['fk_state']]);
      return $query;
    }
    function obtenerStates(){
      $query = $this->connect()->query('SELECT * FROM state');
      return $query;
    }
  }
?>