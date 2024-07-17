<?php
include "conn.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $registration_number = $_POST['registration_number'];
    $password = $_POST['password'];

    // Hash the password before storing it in the database


    $sql = $dbh->prepare("INSERT INTO register (Email, Registration_number, Password) VALUES (?, ?, ?)");
    if ($sql->execute(array($email, $registration_number, $password))) {
        echo "<script>alert('Registered successfully');</script>";
    } else {
        echo "<script>alert('Registration failed');</script>";
    }
}
