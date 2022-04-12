<?php 

$serverName = "localhost";
$dBUsername = "bstyatmt_benjamin";
$dBPassword = "Q{on;EBd40.w";
$dBName = "bstyatmt_phpproject01";

$conn = new mysqli($serverName, $dBUsername, $dBPassword, $dBName);

if ($conn -> connect_errno) {
  die("Connection failed: " . $conn -> connect_error);
}