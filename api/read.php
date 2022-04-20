<?php
    //Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../config/Database.php';
    include_once '../models/Task.php';

    //Instantiate DB and connect
    $database = new Database();
    $db = $database->connect();

    //Instantiate tasks object
    $task = new Task($db);

    //Task query
    $result = $task->read();
    //Get row count
    $num = $result->rowCount();

    //Check if there are any tasks
    if($num > 0) {
        //Tasks array
        $tasks_array = array();
        $tasks_array['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);

            $task_item = array(
                'id' => $id,
                'title' => $title,
                // 'body' => html_entity_decode($body),
                // 'category' => $category,
                // 'category_id' => $category_id,
                'complete' => $complete
            );

            //Push to "data"
            array_push($tasks_array['data'], $task_item);
        }

        //Turn it into JSON & output
        echo json_encode($tasks_array);

    } else {
        echo json_encode(
            array('message' => 'The are no tasks')
        );
    }
?>