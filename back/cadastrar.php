<?php
//Cabecalhos obrigatorios
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST,GET,PUT,DELETE");

//Incluir a conexao
include_once 'conexao.php';

//Receber os dados
$resposta_json = file_get_contents("php://input");
$dados = json_decode($resposta_json, true);

//Verificar se os dados existem
if ($dados) {

    //Preparar a query
    $query_produtos = "INSERT INTO tabela (titulo, descricao) VALUES (:titulo, :descricao)";
    $cadastrar_produto = $conn->prepare($query_produtos);

    //Bind para evitar SQL Injection
    $cadastrar_produto->bindParam(':titulo', $dados['titulo'], PDO::PARAM_STR);
    $cadastrar_produto->bindParam(':descricao', $dados['descricao'], PDO::PARAM_STR);
    $cadastrar_produto->execute();

    //Verificar se a query foi executada
    if ($cadastrar_produto->rowCount()) {
        //Resposta
        $response = ["erro" => false, "message" => "Produto cadastrado com sucesso"];
    } else {
        //Resposta
        $response = ["erro" => true, "message" => "Produto não cadastrado"];
    }
    //Retornar a resposta
    http_response_code(200);
    echo json_encode($response);
};
