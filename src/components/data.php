<?php

header("Content-Type:application/json");
header("Access-Control-Allow-Origin");
//DB results
$nodes = array(
      array("id"=> 0,
      "name"=> "Node 0",
      "thumbnail"=> "https://picsum.photos/200/200/?random&a",
      "parent"=> 0,),

      array("id"=> 1,
      "name"=> "Node 1",
      "thumbnail"=> "https://picsum.photos/200/200/?random&b",
      "parent"=> "null",),
  
      array("id"=> 2,
      "name"=> "Node 2",
      "thumbnail"=> "https://picsum.photos/200/200/?random&c",
      "parent"=> "null",),

      array("id"=> 3,
      "name"=> "Node 3",
      "thumbnail"=>"https://picsum.photos/200/200/?random&d",
      "parent"=> 1,),

      array("id"=> 4,
      "name"=> "Node 4",
      "thumbnail"=> "https://picsum.photos/200/200/?random&e",
      "parent"=> 5,),

      array("id"=> 5,
      "name"=> "Node 5",
      "thumbnail"=> "https://picsum.photos/200/200/?random&f",
      "parent"=> null,
      "collapsed"=> "true",)
    );

  $settings = array(
      "id"=> "0",
      "name"=> "Dark Mode",
      "value"=> "false");

echo json_encode($nodes);