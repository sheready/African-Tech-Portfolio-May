<?php
$to_email = "kevintuei89@gmail.com";

$username = $_POST['userName'];
$useremail = $_POST['userEmail'];
$usersubject = $_POST['subject'];
$subject = "New Message from Portfolio Site: $usersubject";
$message = $_POST['message'];
$body = "Here is what we got:  $username  $useremail $usersubject $message";
$headers = "Reply-to: $useremail";
 
if (mail($to_email, $subject, $body, $headers)) {
    header('Location: index.html');
} else {
    echo "Email sending failed...";
}
