<?php
    //Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Task.php';

    //Instantiate DB and connect
    $database = new Database();
    $db = $database->connect();

    //Instantiate tasks object
    $task = new Task($db);

    //Get ID
    $task->id = isset($_GET['id']) ? $_GET['id'] : die();

    //Get task
    $task->read_single();

    //Create array
    $task_array = array(
        'id' => $task->id,
        'title' => $task->title,
        'body' => $task->body,
        'category_id' => $task->category_id,
        'category' => $task->category
    );

    //Make JSON
    print_r(json_encode($task_array));


?>