<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $message = $_POST['message'];

  $to = "trenerka.sanderka@fit-flow.nl";
  $headers = "Od: ".$email;

  $txt = "Odstałaś maila z fit-flow.nl od".$name.".\n\n".$message;

  mail($to,$subject,$txt,$headers);
  
  echo "Wiadomość została wysłana";
}
?>