<?php

$recepient = "nekit-1989@mail.ru";
$sitename = "Apollo";

$email = trim($_POST["email"]);
$subcject = trim($_POST["subcject"]);
$mes = trim($_POST["message"]);

$message = "

Good afternoon! 
You received a letter from the site 'Apollo'

Title: $subcject;
Email: $email;
Message: $mes.

";

$pagetitle = "Message from the site \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");