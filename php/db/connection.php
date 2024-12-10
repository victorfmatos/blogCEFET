<?php
  $dbHost = "localhost";
  $dbUsername = "root";
  $dbPassword = "1204";
  $dbName = "blogcefet";

  $connection = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

  if ($connection->connect_error) {
    echo "Erro";
  }
  else {
    echo "Conexão realizada com sucesso";
  }
?>