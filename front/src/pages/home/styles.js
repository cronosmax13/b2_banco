import styled from "styled-components";

export const Container = styled.section`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
`;

export const ConteudoDoTitulo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e9ecef;
`;

//botao de acao voltar
export const BotaoAcao = styled.section`
  margin: 0;
`;

export const Button = styled.button`
  padding: 6px 16px;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  margin-right: 8px; // Adicionado espaçamento à direita

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  }
`;

export const ButtonVisualizar = styled.button`
  padding: 6px 16px;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  margin-right: 8px; // Adicionado espaçamento à direita

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  }
`;

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  width: 100%;
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #2c3e50;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Table = styled.table`
  margin-top: 10px; // Ou adicionar espaçamento superior na tabela
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  overflow: hidden;

  th,
  td {
    border: 1px solid #e9ecef;
    padding: 8px 12px;
    text-align: left;
  }

  th {
    background-color: #f8f9fa;
    color: #2c3e50;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.5px;
  }

  td {
    background-color: #fff;
    color: #495057;
    font-size: 15px;
    transition: background-color 0.2s ease;
  }

  tr:hover td {
    background-color: #f8f9fa;
  }

  tr {
    height: 45px;
  }

  th:nth-child(1), /* Coluna ID */
  td:nth-child(1) {
    width: 8%;
  }

  th:nth-child(2), /* Coluna Título */
  td:nth-child(2) {
    width: 32%;
  }

  th:nth-child(3), /* Coluna Descrição */
  td:nth-child(3) {
    width: 40%;
  }

  th:nth-child(4), /* Coluna Ações */
  td:nth-child(4) {
    width: 20%;
    white-space: nowrap;
  }
`;
