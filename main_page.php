<?php 
 
 $age = $_POST["age"]; 
 $height = $_POST["height"]; 
 $weight = $_POST["weight"]; 

 echo "User information: <br>"; 
 echo "Age is: $age <br>"; 
 echo "Height is: $height <br>"; 
 echo "Weight is: $weight <br>"; 

 $db= mysqli_connect("localhost","root","","kids_health");
 if(mysqli_connect_errno())
 die("Conectare esuata".mysqli_connect_error());

 $sql= mysqli_select_db($db, "kids_health");
 if (!$sql)
 die("Eroare".mysqli_error($db));
 echo "Conectat la baza de date". "<br>";

 $interogare="INSERT INTO users(age,  height, weight) VALUES (\"$age\", \"$height\",\"$weight\")";
 
 $raspuns=mysqli_query($db,$interogare);

 if (mysqli_errno($db))
 die('Adaugare esuata: '.mysqli_errno($db) .''.mysqli_error($db));
 echo "<br> Datele au fost adaugate in tabela.";
 ?>