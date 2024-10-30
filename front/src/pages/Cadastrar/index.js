import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Titulo,
  AlertSuccess,
  AlertError,
  Container,
  Form,
  ConteudoForm,
  Label,
  Input,
  Button,
  ConteudoDoTitulo,
  BotaoAcao,
  BotaoInfo,
  ContainerBotoes,
  BotaoCadastrar,
  BotaoListar,
} from "./styles";

export const Cadastrar = () => {
  const [produto, setProduto] = useState({
    titulo: "",
    descricao: "",
  });

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  const valorInput = (e) =>
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });

  const cadProduto = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/cadastrar.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(produto),
      });

      const responseJson = await response.json();

      if (responseJson.erro) {
        setStatus({
          type: "erro",
          mensagem: responseJson.mensagem,
        });
      } else {
        setStatus({
          type: "success",
          mensagem: "Produto cadastrado com sucesso!",
        });
        setProduto({
          titulo: "",
          descricao: "",
        });
      }
    } catch (error) {
      setStatus({
        type: "erro",
        mensagem: "Erro ao cadastrar produto, tente novamente mais tarde!",
      });
    }
  };

  return (
    <Container>
      <Titulo>Cadastrar</Titulo>

      {status.type === "success" && status.mensagem && (
        <AlertSuccess>{status.mensagem}</AlertSuccess>
      )}

      {status.type === "erro" && status.mensagem && (
        <AlertError>{status.mensagem}</AlertError>
      )}

      <Form onSubmit={cadProduto}>
        <ConteudoForm>
          <ConteudoDoTitulo>
            <Label>Titulo</Label>
          </ConteudoDoTitulo>
          <Input
            type="text"
            name="titulo"
            placeholder="Titulo do produto"
            onChange={valorInput}
            value={produto.titulo}
          />
          <br />
          <br />
          <Label>Descrição</Label>
          <Input
            type="text"
            name="descricao"
            placeholder="Descrição do produto"
            onChange={valorInput}
            value={produto.descricao}
          />
          <br />
          <br />
          <ContainerBotoes>
            <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
            <Link to="/">
              <BotaoListar>Voltar</BotaoListar>
            </Link>
          </ContainerBotoes>
        </ConteudoForm>
      </Form>
    </Container>
  );
};
