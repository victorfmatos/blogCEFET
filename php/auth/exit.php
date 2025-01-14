<?php
  session_start();
  unset($_SESSION["login"]);
  unset($_SESSION["currentPassword"]);
  header("Location: ../../register.html")
?>