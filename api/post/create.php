<?php
    //Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Task.php';

    //Instantiate DB and connect
    $database = new Database();
    $db = $database->connect();

    //Instantiate tasks object
    $task = new Task($db);

    //Get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    $task->title = $data->title;
    $task->body = $data->body;
    $task->category = $data->category;

    //Create task
    if($task->create()) {
        echo json_encode(
            array('message' => 'Task Created')
        );
    } else {
        echo json_encode(
            array('message' => 'Task Not Created')
        );
    }

?>