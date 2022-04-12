<?php

?>

<!DOCTYPE html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<html class="website" lang="en">
<link rel="stylesheet" href="login.css" type="text/css">
<html>
    <head>

    </head>

<body class="container">
    <form method="post" action="login.inc.php">
    <div class="username">
        <label for="username">USERNAME: </label>
        <input type="text" name="uid" placeholder=" username / email">
    </div>
    <br>
    <div class="password">
        <label for="password">PASSWORD: </label>
        <input type="password" name="pwd" placeholder=" password">
        
    </div>
    <br>
    <button type="submit" class="button" name="submit"> LOGIN </button>
    </form>
        <?php 

        if (isset($_GET["error"])) {
            if ($_GET["error"] == "emptyinput") {
                echo "<p> Incorrect login information </p>";
            }
            else if ($_GET["error"] == "wronglogin") {
                echo "<p> Chose a proper username </p>";
            }
            else if ($_GET["error"] == "none") {
               header("location: index2.php");
                exit();
            }
        }
    ?>
</body>
</html>