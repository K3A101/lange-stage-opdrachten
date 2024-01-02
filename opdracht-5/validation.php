<?php
$formData = [];
$name = $senderEmail = $recipientEmail = $mailContent = "";
$nameErr = $senderEmailErr = $recipientEmailErr = $mailContentErr = "";

$confirmationMessage = "";

if($_SERVER["REQUEST_METHOD"] === "POST"){
    if(empty($_POST["name"])){
        $nameErr = "Voeg een email bij";
    }else{
        $name = validateInput($_POST["name"]);
        if (!empty($name)) {
            $confirmationMessage = "Form submitted successfully!";
        }
    }
    if(empty($_POST["email_sender"])){
        $senderEmailErr = "Gebruik een geldige email adres";
    }
    else{
        $senderEmail = validateInput($_POST["email_sender"]);
        if (!empty($senderEmail)) {
            $confirmationMessage = "Form submitted successfully!";
        }
    }
    if(empty($_POST["email_recipient"])){
        $recipientEmailErr = "Voeg een email bij";
    }else{
        $recipientEmail = validateInput($_POST["email_recipient"]);
        if (!empty($recipientEmail)) {
            $confirmationMessage = "Form submitted successfully!";
        }
    }
    if(empty($_POST["message"])){
        $mailContentErr = "Voeg een bericht daarbij!";
    }else{
        $mailContent = validateInput($_POST["email_sender"]);
        if (!empty($mailContent)) {
            $confirmationMessage = "Form submitted successfully!";
        }
    }
}

function validateInput($data){
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
