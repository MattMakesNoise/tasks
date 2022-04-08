<?php
    //Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: PUT');
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

    //Set ID to update
    $task->id = $data->id;

    // $task->complete = $data->complete;

    //Complete task
    if($task->complete()) {
        echo json_encode(
            array('message' => 'Task Completed')
        );
    } else {
        echo json_encode(
            array('message' => 'Task Not Completed')
        );
    }

?>