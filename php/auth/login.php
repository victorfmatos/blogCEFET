<?php
  session_start();
  if (!empty($_POST["login"]) && !empty($_POST["currentPassword"])) {
    include_once("../db/connection.php");
    $login = $_POST["login"];
    $currentPassword = $_POST["currentPassword"];
    
    $sql = "SELECT * FROM users WHERE (email = ? OR username = ?) LIMIT 1";
    
    $result = $connection->prepare($sql);
    $result->bind_param("ss", $login, $login);
    $result->execute();
    $result = $result->get_result();
    $user = $result->fetch_assoc();
    $verified = password_verify($currentPassword, $user["password"]);

    if (!$verified) {
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