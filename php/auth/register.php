<?php

  if (!empty($_POST["username"]) && !empty($_POST["email"]) && !empty($_POST["password"]) && !empty($_POST["confirmPassword"])) {
    include_once("../db/connection.php");

    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $confirmPassword = $_POST["confirmPassword"];
  
    $query = "INSERT INTO users(username, email, password) VALUES ('$username', '$email', '$password')";
    $result = $connection->query($query);  
  }

?>