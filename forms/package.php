<?php
// Include PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require './PHPMailer/Exception.php';
require './PHPMailer/PHPMailer.php';
require './PHPMailer/SMTP.php';

// Check if the form is submitted
if (isset($_POST['submit'])) {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $package = $_POST['package'];
    $message = $_POST['message'];

    // Database connection parameters
    $dbHost = 'localhost';
    $dbUser = 'u592619334_admin_user';
    $dbPass = 'sAJNZFqv.JkseH6';
    $dbName = 'u592619334_forms_submit';

    // Create a database connection
    $conn = new mysqli($dbHost, $dbUser, $dbPass, $dbName);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute the SQL query to insert data into the database
    $sql = "INSERT INTO packages (name, email, phone, package, message) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $name, $email, $phone, $package, $message);

    if ($stmt->execute()) {
        // Data has been inserted successfully
        echo "Data has been saved to the database.";

        // Send an email using PHPMailer
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.hostinger.com'; // Replace with your SMTP server
            $mail->SMTPAuth = true;
            $mail->Username = 'info@fortourandtravels.com'; // Replace with your email address
            $mail->Password = ''; // Replace with your email password
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;

            $mail->setFrom('info@fortourandtravels.com', 'For Tour and Travels');
            $mail->addAddress('for.tourtravels@gmail.com', "For Tour and Travels"); // Replace with recipient's email address

            $mail->isHTML(true);
            $mail->Subject = 'New Package Booking';
            $mail->Body = "Name: $name<br>Email: $email<br>Phone: $phone<br>Package: $package<br>Message: $message";

            $mail->send();
            echo "Email has been sent.";
            header("location: https://fortourandtravels.com?success");

        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
            header("location: https://fortourandtravels.com?failed");

        }
    } else {
        echo "Error: " . $stmt->error;
        header("location: https://fortourandtravels.com?failed");
    }

    // Close the database connection
    $stmt->close();
    $conn->close();
}
echo "Not recieved";
?>