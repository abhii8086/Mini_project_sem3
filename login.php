<?php

class database
{
  var $servername = "localhost";
  var $username = "root";
  var $password = "";
  var $databasename = "myproject";
  var $tb = "user_credential";
  public function connect()
  {
    $con = new mysqli($this->servername, $this->username, $this->password, $this->databasename);
    return $con;
    if ($con->connect_error) {
      echo Hi;
      die("connection failed: " . $con->connect_error);
    }
  }


