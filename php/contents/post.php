<?php

if (!empty($_POST["post"])) {
  include_once("../db/connection.php");
  session_start();
  $logado = $_SESSION["login"];
  $content = $_POST["post"];
  $sql = "SELECT id FROM users WHERE username = ?";
  $result = $connection->prepare($sql);
  $result->bind_param("s", $logado);
  $result->execute();
  $result = $result->get_result();
  $id_logado = $result->fetch_assoc()["id"];

  if (isset($_FILES["image"]) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
    $uniqueName = uniqid() . "-" . basename($_FILES["image"]["name"]);
    $uploadFilePath = "../../assets/images/posts/" . $uniqueName;
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $uploadFilePath)) {
      $image = "assets/images/posts/" . $uniqueName;
    }
  } else {
    $image = "";
  }

  $sql = "INSERT INTO posts(user_id, content, image_url) VALUES (?, ?, ?)";
  $result = $connection->prepare($sql);
  $result->bind_param("iss", $id_logado, $content, $image);
  $result->execute();  
}

?>