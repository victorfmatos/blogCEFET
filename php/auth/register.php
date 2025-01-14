<?php

  if (!empty($_POST["username"]) && !empty($_POST["email"]) && !empty($_POST["password"]) && !empty($_POST["confirmPassword"])) {
    include_once("../db/connection.php");

    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];
  
    $query = "INSERT INTO users(username, email, password) VALUES ('$username', '$email', '$password')";
    $result = mysqli_query($connection, $query);  
  }

?>