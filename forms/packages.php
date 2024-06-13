<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once("./vendor/autoload.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form inputs
    $name = htmlspecialchars($_POST['name']);
    $guestsCount = htmlspecialchars($_POST['guests-count']);
    $from = htmlspecialchars($_POST['from']);
    $to = htmlspecialchars($_POST['to']);
    $contact = htmlspecialchars($_POST['contact']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Validate form inputs
    if (!empty($name) && !empty($guestsCount) && !empty($from) && !empty($to) && !empty($contact) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Further processing like saving to a database or sending an email
        $message = "Name : $name\nNumber of Guests : $guestsCount\nContact number : $contact\nEmail : $email\nFrom : $from\nTo : $to"; 
        $subject = "Package Request";
        $mailFrom = "info@vacationplannersindia.in";
        $mailTo = "aalimaslam@pm.me";
    
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'mail.vacationplannersindia.in';
            $mail->SMTPAuth = true; // enable SMTP authentication
            $mail->Username = $mailFrom;
            $mail->Password = 'ASLtigaRYdpc42T'; // make sure to use environment variables for sensitive data
            $mail->SMTPSecure = 'ssl'; 
            $mail->Port = 465;

            $mail->setFrom($mailFrom, 'Vacation Planners India');
            $mail->addAddress($mailTo);
            // $mail->addReplyTo($mailFrom, 'Vacation Planners India');

            $mail->Subject = $subject;
            $mail->Body = $message;

            if($mail->send()) {
                echo 'Message has been sent';
                header('Location: /index.html?mailsend');
            } else {
                throw new Exception('Message could not be sent.');
            }
        } catch (Exception $e) {
            echo 'Mailer Error: ' . $mail->ErrorInfo;
            error_log($e->getMessage(), 3, 'errors.log'); // log error to a file
            header('Location: /index.html?errorOccured');
        }
    } else {
        echo "<h1>Error: All fields are required and email must be valid!</h1>";
    }
} else {
    echo "<h1>Error: Invalid request method</h1>";
}
?>
