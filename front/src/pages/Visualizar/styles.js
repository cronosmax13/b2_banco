import styled from "styled-components";

export const Container = styled.section`
  padding: 32px;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
`;

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

export const InfoContainer = styled.div`
  padding: 24px;
  background-color: #f8f9fa;
  border-radius: 8px;
  margin-top: 20px;
`;

export const InfoItem = styled.p`
  font-size: 16px;
  color: #495057;
  margin: 12px 0;
  padding: 8px;
  border-bottom: 1px solid #e9ecef;

  strong {
    color: #2c3e50;
    font-weight: 600;
    margin-right: 8px;
  }
`;

export const BotaoVoltar = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  }
`;
