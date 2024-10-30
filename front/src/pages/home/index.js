import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ConteudoDoTitulo,
  Titulo,
  Table,
  BotaoAcao,
  Button,
  ButtonVisualizar,
} from "./styles";
// ... imports ...

export const Home = () => {
  // Estado para armazenar os dados dos produtos
  const [data, setData] = useState([]);

  // Função para buscar produtos da API
  const getProdutos = async () => {
    fetch("http://localhost:8000/index.php")
      .then((response) => response.json())
      .then((responseJson) => setData(responseJson.records));
  };

  // useEffect para carregar os produtos quando o componente montar
  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <Container>
      {/* Cabeçalho da página */}
      <ConteudoDoTitulo>
        <Titulo>listar</Titulo>
      </ConteudoDoTitulo>

      {/* Tabela de produtos */}
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data).map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.titulo}</td>
              <td>{produto.descricao}</td>
              <td>
                <Link to={`/visualizar/${produto.id}`}>
                  <ButtonVisualizar>Visualizar</ButtonVisualizar>
                </Link>
                <Link to={`/editar/${produto.id}`}>
                  <Button>Editar</Button>
                </Link>
                <Link to={`/apagar/${produto.id}`}>
                  <Button>Apagar</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Botão para cadastrar novo produto */}
      <BotaoAcao>
        <Link to="/cadastrar">
          <Button>Cadastrar</Button>
        </Link>
      </BotaoAcao>
    </Container>
  );
};
