<?php
$errors =[];
$jsonData = json_encode($_POST);

$subject = $_POST["subject"];
$subjectLength = strlen($subject);
$name = $_POST["name"];
$nameLength = strlen($name);
$email = $_POST["email_sender"];
$message = $_POST["messages"];


if(empty($subject)) {
    $errors["subject"] = "Voer een onderwerp in!";
}elseif($subjectLength < 3) {
    $errors["subject"] = "Het onderwerp moet minimaal 3 karakters bevatten!";
}elseif($subjectLength > 50) {
    $errors["subject"] = "Het onderwerp moet maximaal 50 karakters bevatten!";
}
if(empty($name)) {
    $errors["name"] = "Voer je naam in!";
}elseif ($nameLength < 2 ) {
    $errors["name"] = "Je naam moet  minimaal 2 karakter bevatten!";
}elseif($nameLength > 50) {
    $errors["name"] = "Je naam moet  maximaal 50 karakter bevatten!";
}
if(empty($email)) {
    $errors["email"] = "Voer je email in!";
}elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $errors["email"] = "Voer een geldig email in!";
}
if(empty($message)) {
    $errors["message"] = "Voer een bericht in!";
}


if(empty($errors)) {
    $feedback = array('success'=> 'Bedankt voor je bericht');
    http_response_code(200);
    include 'confirmation.php';
}else {
    $feedback = array('errors'=> $errors);
    http_response_code(400);
    echo json_encode($feedback);
}
