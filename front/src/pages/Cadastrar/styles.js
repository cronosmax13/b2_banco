import styled from "styled-components";

//Titulo
export const Titulo = styled.h1`
  color: #2c3e50;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 24px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 12px;
`;

export const Container = styled.section`
  padding: 24px;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ConteudoDoTitulo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//botao de acao voltar
export const BotaoAcao = styled.section`
  display: inline-block;
  margin-left: 293px;
  justify-content: space-between;
`;

//botao de acao info
export const BotaoInfo = styled.button`
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #2980b9; // Adicionada cor mais escura para o hover
  }
`;

//AlertSuccess
export const AlertSuccess = styled.p`
  color: green;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 5px;
  background-color: #e8f5e9;
  border: 1px solid #a5d6a7;
`;

export const AlertError = styled.p`
  color: red;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
  padding: 12px;
  border-radius: 5px;
  background-color: #ffebee;
  border: 1px solid #ef9a9a;
`;

export const ConteudoForm = styled.section`
  padding: 12px;
  border-radius: 5px;
  border: 1px solid #ccc;
  max-width: 960px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  // Adicione este estilo para alinhar os botões
  div:last-child {
    display: flex;
    align-items: center;
  }
`;

export const Label = styled.label`
  width: 100%;
  padding-left: 6px;
  margin-top: 12px;
  font-weight: 700;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: auto; /* Garante que o botão não fique muito largo */
    min-width: 100px; /* Define uma largura mínima */
  }
`;

export const BotaoCadastrar = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
`;

export const BotaoListar = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  float: right;
`;

export const ContainerBotoes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;
