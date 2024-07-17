<?php
include 'conn1.php';

$course1 = strtolower($_GET['course1']);
$course2 = strtolower($_GET['course2']);

$query1 = 'SELECT * FROM reviews WHERE LOWER(name) = :course1';
$stmt1 = $dbh->prepare($query1);
$stmt1->bindParam(':course1', $course1);
$stmt1->execute();
$course1Data = $stmt1->fetch(PDO::FETCH_ASSOC);

$query2 = 'SELECT * FROM reviews WHERE LOWER(name) = :course2';
$stmt2 = $dbh->prepare($query2);
$stmt2->bindParam(':course2', $course2);
$stmt2->execute();
$course2Data = $stmt2->fetch(PDO::FETCH_ASSOC);

if ($course1Data && $course2Data) {
    echo json_encode(['success' => true, 'course1' => $course1Data, 'course2' => $course2Data]);
} else {
    echo json_encode(['success' => false]);
}
