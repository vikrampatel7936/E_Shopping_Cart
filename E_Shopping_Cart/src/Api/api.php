<?php
include "dbconfig.php";

header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

$res = array('error' => false);
$action='';

if(isset($_GET['action'])){
    $action= $_GET['action'];
}


if($action=='getproductinfo'){
    $sql= "SELECT * from products";
    $result=$conn->query($sql);
    $num = mysqli_num_rows($result);
    $productsData=array();
    if($num > 0){
        while($row=$result->fetch_assoc()){
            array_push($productsData,$row);
        }
        $res['product_Data']= $productsData;
    }
    else{
        $res['message']= "data not found";
    }
}

if($action=='addcomments'){
    $username= $_POST['username'];
    $rating= $_POST['rating'];
    $feedback= $_POST['feedback'];
    

$sql="INSERT INTO `comments`(`comment_id`, `name`, `rating`, `comment`) VALUES(NULL,'$username','$rating','$feedback')";
$result=$conn->query($sql);
if($result==true){
    $res['message']= "comment added successfully";
}else{
    $res['message']= "somthing wrong";
}
}


$conn -> close();
header("Content-type: application/json");
echo json_encode($res);
die();
?>