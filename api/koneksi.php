<?php

$db_host = "127.0.0.1"; // localhost
$db_user = "root";
$db_name = "db_sekolah";
$db_pass = "";

$connection = mysqli_connect(
    $db_host,
    $db_user,
    $db_pass,
    $db_name
);


if (!$connection) {
    echo "Koneksi Gagal! : " . mysqli_connect_error();
}
