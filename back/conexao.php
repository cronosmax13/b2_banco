<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "crud_api";
$port = 3306;

// Corrigido: Variáveis corretas usadas na conexão PDO
$conn = new PDO("mysql:host=$servername;port=$port;dbname=$dbname", $username, $password);
