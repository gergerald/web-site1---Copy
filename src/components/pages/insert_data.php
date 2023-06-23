<?php

// Assuming you have already established a MySQL database connection

// Retrieve the form data sent from the React frontend
$patNo = $_POST['patNo'];
$admtdOn = $_POST['admtd_on'];
$condOn = $_POST['cond_on'];
$advPtmt = $_POST['adv_pymt'];
$modePymt = $_POST['mode_pymt'];
$roomNo = $_POST['room_no'];
$docNo = $_POST['doc_no'];

// Validate the data
if ($advPtmt == 0) {
  $response = [
    'error' => 'Advanced Payment cannot be 0'
  ];
  echo json_encode($response);
  exit;
}

// Prepare the SQL statement to insert the data into the database
$sql = "INSERT INTO your_table_name (pat_no, admtd_on, cond_on, adv_pymt, mode_pymt, room_no, doc_no) VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$patNo, $admtdOn, $condOn, $advPtmt, $modePymt, $roomNo, $docNo]);

// Return a success response to the React frontend
$response = [
  'message' => 'Data inserted successfully'
];
echo json_encode($response);
