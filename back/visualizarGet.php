<?php
//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE");

//Incluir a conexao
include_once 'conexao.php';

//$id = 1;
$id = filter_input(INPUT_GET, "id", FILTER_SANITIZE_NUMBER_INT);
$response = "";

$query_produtos = "SELECT id, titulo, descricao FROM tabela WHERE id = :id LIMIT 1";
$resultado_produtos = $conn->prepare($query_produtos);
$resultado_produtos->bindParam(':id', $id, PDO::PARAM_INT);
$resultado_produtos->execute();


if (($resultado_produtos) and ($resultado_produtos->rowCount() != 0)) {
    $row_produto = $resultado_produtos->fetch(PDO::FETCH_ASSOC);
    extract($row_produto);
    $produto = [
        'id' => $id,
        'titulo' => $titulo,
        'descricao' => $descricao
    ];

    $response = ["erro" => false, "message" => "Produto encontrado", "dados" => $produto];
} else {
    $response = ["erro" => true, "message" => "Produto não encontrado"];
}
//Resposta com status 200
http_response_code(200);
//Retornar a resposta em formato json
echo json_encode($response);
