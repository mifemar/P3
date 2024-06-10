
<?php
$name = $_POST['name'];
$email = $_POST['email'];

$header = 'From: ' . $email . "\r\n";
$header .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
$header .= 'Mime-Version: 1.0' . "\r\n";
$header .= 'Content-Type: text/plain';

$message = "Este mensaje fue enviado por " . $name . ",\r\n";
$message .= "Su e-mail es: " . $email . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el " . date('d/m/Y', time());

$para = 'mifemar@hotmail.com';
$asunto = 'Mensaje de la P2 del Máster de Desarrollo Web';

mail($para, $asunto, utf8_decode($message), $header);

header("Location: https://p1mfernandezmarti.netlify.app/presentacion");
?>


