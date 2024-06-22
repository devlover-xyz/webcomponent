<?php

include '../koneksi.php';

$query = mysqli_query($connection, "SELECT * FROM tbl_siswa") or die(mysqli_error($connection));

$data = [];
$data['info'] = [
    'count' => mysqli_num_rows($query),
    'page' => 0,
    'next' => null,
    'prev' => null,
];

while ($row = mysqli_fetch_assoc($query)) {
    $data['results'][] = $row;
}

header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);