<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $to = "ahmadabujihadbilhaq@gmail.com"; // Ganti dengan email kamu
    $subject = $_POST["subjek"];
    $message = "Nama: " . $_POST["nama"] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "Pesan:\n" . $_POST["pesan"];

    $headers = "From: " . $_POST["email"];

    if(mail($to, $subject, $message, $headers)){
        echo "Pesan berhasil dikirim!";
    } else {
        echo "Gagal mengirim pesan.";
    }
}
?>