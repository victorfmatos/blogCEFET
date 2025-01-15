<?php

  if (!empty($_POST["post"])) {
    include_once("../../index.php");
    include_once("../db/connection.php");
    if (isset($_FILES["image"]) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
      $image = "/assets/images/posts/" . $_FILES["image"]["name"];
      move_uploaded_file($_FILES["image"]["tmp_name"], $image);
    } else {
      $image = "";
    }
  
    $content = $_POST["post"];

    $sql = "SELECT * FROM users WHERE username = '$logado'";
    $id_logado = $connection->query($sql)->fetch_assoc()["id"];
    
    $sql = "INSERT INTO posts(user_id, content, image_url) VALUES ('$id_logado', '$content', '$image')";
    $connection->query($sql);
  }

?>