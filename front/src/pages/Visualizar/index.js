import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Titulo,
  InfoContainer,
  InfoItem,
  BotaoVoltar,
} from "./styles";

export const Visualizar = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProduto = async () => {
      await fetch("http://localhost:8000/visualizarGet.php?id=" + id)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("Resposta completa:", responseJson);
          setData(responseJson.dados);
        })
        .catch((erro) => {
          console.error("Erro ao buscar dados:", erro);
        });
    };
    getProduto();
  }, [id]);

  return (
    <Container>
      <Titulo>Visualizar Produto</Titulo>
      {data && (
        <InfoContainer>
          <InfoItem>
            <strong>ID:</strong> {data.id}
          </InfoItem>
          <InfoItem>
            <strong>Título:</strong> {data.titulo}
          </InfoItem>
          <InfoItem>
            <strong>Descrição:</strong> {data.descricao}
          </InfoItem>
        </InfoContainer>
      )}
      <Link to="/">
        <BotaoVoltar>Voltar</BotaoVoltar>
      </Link>
    </Container>
  );
};
