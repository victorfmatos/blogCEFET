<?php
  session_start();
  if (!empty($_POST["login"]) && !empty($_POST["currentPassword"])) {
    include_once("../db/connection.php");
    $login = $_POST["login"];
    $currentPassword = $_POST["currentPassword"];
    
    $sql = "SELECT * FROM users WHERE (email = ? OR username = ?) AND password = ?";
    
    $result = $connection->prepare($sql);
    $result->bind_param("sss", $login, $login, $currentPassword);
    $result->execute();
    $result = $result->get_result();
    
    if (mysqli_num_rows($result) < 1) {
      unset($_SESSION["login"]);
      unset($_SESSION["currentPassword"]);
      header("Location: ../../register.html");
    } else {
      $_SESSION["login"] = $login;
      $_SESSION["currentPassword"] = $currentPassword;
      header("Location: ../../index.php");
    }
  } else {
    header("Location: ../../register.html");
  }
?>