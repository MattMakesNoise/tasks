<?php

class Task {
    private $conn;
    private $table = 'task_list';

    //post properties
    public $id;
    public $category_id;
    public $category;
    public $created_at;
    public $body;
    public $complete;

    //constructor with db
    public function __construct($db) {
        $this->conn = $db;
    }

    //Get 
    public function read() {
        //create query
        $query = 'SELECT * FROM ' . $this->table . ' ORDER BY created_at DESC';

        //prepared statement
        $stmt = $this->conn->prepare($query);

        //execute query
        $stmt->execute();

        return $stmt;
    }

    //Get Single Task
    public function read_single() {
        //create query
        $query = 'SELECT * FROM ' . $this->table . ' WHERE id=? LIMIT 0,1';

        //Prepare statement
        $stmt = $this->conn->prepare($query);

        //Bind ID
        $stmt->bindParam(1, $this->id);

        //execute query
        $stmt->execute();

        //Fetch array that's returned 
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        //Set properties
        $this->title = $row['title'];
        $this->body = $row['body'];
        $this->category_id = $row['category_id'];
        $this->category = $row['category'];
        $this->created_at = $row['created_at'];
        $this->complete = $row['complete'];
    }

    //Create Task
    public function create() {
        //Create query
        $query = 'INSERT INTO ' . $this->table . ' SET title = :title, body = :body, category = :category';

        //Prepare statement
        $stmt = $this->conn->prepare($query);

        //Clean data
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->body = htmlspecialchars(strip_tags($this->body));
        $this->category = htmlspecialchars(strip_tags($this->category));
        
        //Bind data
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':body', $this->body);
        $stmt->bindParam(':category', $this->category);

        //execute query
        if($stmt->execute()) {
            return true;
        } 
        //Print error if something goes wrong
        printf("Error: %s.\n");

        return false;

    }

    //Update Task
    public function update() {
        //Create query
        $query = 'UPDATE ' . $this->table . ' SET title = :title, body = :body, category = :category, complete = 1 WHERE id = :id';

        //Prepared statement
        $stmt = $this->conn->prepare($query);

        //Clean data
        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->body = htmlspecialchars(strip_tags($this->body));
        $this->category = htmlspecialchars(strip_tags($this->category));
        $this->id = htmlspecialchars(strip_tags($this->id));

        //Bind data
        $stmt->bindParam(':title', $this->title);
        $stmt->bindParam(':body', $this->body);
        $stmt->bindParam(':category', $this->category);
        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':complete', $this->complete);

        //execute query
        if($stmt->execute()) {
            return true;
        } 
        //Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;

    }

    //Delete Task
    public function delete() {
        //Create query
        $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

        //Prepared statement
        $stmt = $this->conn->prepare($query);

        //Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));

        //Bind data
        $stmt->bindParam(':id', $this->id);

        //execute query
        if($stmt->execute()) {
            return true;
        } 
        //Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

}

?>