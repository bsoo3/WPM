<?php




?>

<!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<html class="website" lang="en">
<link rel="stylesheet" href="signup.css" type="text/css">
<html>
<body class="container">
	<form method="post" action="signup.inc.php">
        <div class="email">
        <label for="email" >EMAIL: </label>
        <input type="text" name="email" placeholder=" email" class="labelEmail">
    </div>
    <br>
    <div class="username">
        <label for="username">USERNAME:</label>
        <input type="text" name="uid" placeholder=" username" class="labelUsername">
        
    </div>
    <br>
    <div class="password">
        <label for="password">PASSWORD:</label>
        <input type="password" name="password" placeholder=" password" class="labelPassword">  
    </div>
    <br>
    <div class="password">
        <label for="pwdRepeat">PASSWORD:</label>
        <input type="password" name="pwdRepeat" placeholder=" repeat password" class="labelPassword">
    </div>
    <div>
        <button type="submit" class="button" value="login" name="submit"> SIGN UP </button>
    </div>
    </form>

    <?php 

        if (isset($_GET["error"])) {
            if ($_GET["error"] == "emptyinput") {
                echo "<p> Fill in all fields </p>";
            }
            else if ($_GET["error"] == "invalidUid") {
                echo "<p> Chose a proper username </p>";
            }
            else if ($_GET["error"] == "invalidEmail") {
                echo "<p> Chose a proper email </p>";
            }
            else if ($_GET["error"] == "passwordsdontmatch") {
                echo "<p> passoword doesn't match! </p>";
            }
            else if ($_GET["error"] == "stmtfailed") {
                echo "<p> Username already taken </p>";
            }
            else if ($_GET["error"] == "none") {
               header("location: login.php");
                exit();
            }
        }

    ?>
</body>
</html>