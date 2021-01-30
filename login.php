<?php
    session_start();
    echo isset($_SESSION['login']);
    if(isset($_SESSION['login'])) {
      header('LOCATION:index.php'); die();
    }
?>
<!DOCTYPE html>
<html>
   <head>
     <meta http-equiv='content-type' content='text/html;charset=utf-8' />
     <title>Login</title>
     <meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1">
     <link href="./css/login.css" rel="stylesheet" type="text/css">
     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
   </head>
<body>
  <div class="login">
    <br/>
    <h2 class="text-center">Oracle Expo Login</h2>
    <p>Hi, thanks for joining!<br/> Before continuing, I need your email address <br/> and password provided in the invitation.</p>
    <?php
      if(isset($_POST['submit'])){
        $username = $_POST['username']; $password = $_POST['password'];
        if( $password === 'champion2021'){
          $_SESSION['login'] = true; header('LOCATION:index.php?wt.z_email='.$username); die();
        } {
          echo "<div class='alert alert-danger'>Email and Password do not match.</div>";
        }

      }
    ?>
    <form action="" method="post">

        <label for="username"><i class="fas fa-user"></i></label>
        <input type="email" id="username" name="username" required>


        <label for="pwd"><i class="fas fa-lock"></i></label>
        <input type="password" id="password" name="password" required>

      <button type="submit" name="submit" class="btn btn-default">Login</button>
    </form>
  </div>
  <div style='font-size:4px; color:white'>by <a style='text-decoration: none;color: white' href='https://xrlab.ddns.net'>XRlab</a></div>
</body>
</html>