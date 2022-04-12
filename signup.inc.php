<?php 

if (isset($_POST["submit"])) {
	
	$email = $_POST["email"];
	$username = $_POST["uid"];
	$password = $_POST["password"];
	$pwdRepeat = $_POST["pwdRepeat"];


	require_once 'dbh.inc.php';
	require_once 'functions.inc.php';

	if (emptyInputSignup($email, $username, $password, $pwdRepeat) !== false) 
	{
		header("location: signup.php?error=emptyinput");
		exit();
	}
	if (invalidEmail($email) !== false) 
	{
		header("location: signup.php?error=invalidEmail");
		exit();
	}
	if (invalidUid($username) !== false) 
	{
		header("location: signup.php?error=invalidUid");
		exit();
	}
	if (pwdMatch($password, $pwdRepeat) !== false) 
	{
		header("location: signup.php?error=passworddontmatch");
		exit();
	}
	if (uidExists($conn, $email, $username) !== false) 
	{
		header("location: signup.php?error=usernametaken");
		exit();
	}

	createUser($conn, $email, $username, $password);

}
else {
	header("location: signup.php");
	exit();
}