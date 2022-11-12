import React from "react";
import { MainContainer, RowDivRules } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/Coordinators";
import { Header } from "../components/Header";
import GoBack from "../assets/GoBackW.png";

export function RulesPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MainContainer>
        <br />
        <h3>Regras</h3>
        <br />
        <p>Pontos por acertos de:</p>
        <p>
          - Resultado (ganhador ou empate) e acerto no número de gols: 15 pontos
        </p>
        <p>
          - Resultado e não acerto do número de gols do: 5 pontos (obs: Vale
          para empates)
        </p>
        <p>
          - Resultado e acerto no número de gols do time vencedor: 10 pontos
        </p>
        <p>- Resultado e acerto no número de gols do time perdedor: 8 pontos</p>
        <p>
          - Errou o resultado e acertou o número de gols do ganhador e/ou do
          perdedor: 3 pontos
        </p>
        <br />
        <p>
          <strong>Exemplo:</strong> Jogo: Qatar x Equador
        </p>
        <p>
          Vamos usar de exemplo o placar de resultado da partida{" "}
          <strong>Qatar 2 x Equador 0</strong>
        </p>
        <br />
        <RowDivRules>
          <span>
            <strong>Palpite</strong>
          </span>
          <span>
            <strong>Descrição</strong>
          </span>
          <span>
            <strong>Pontos</strong>
          </span>
        </RowDivRules>
        <RowDivRules>
          <span>Qatar 2 x 0 Equador</span>
          <span>Acertou resultado e quantidade de gols</span>
          <span>15 pontos</span>
        </RowDivRules>
        <RowDivRules>
          <span>Qatar 2 x 1 Equador</span>
          <span>Acertou resultado e quantidade de gols do vencedor</span>
          <span>10 pontos</span>
        </RowDivRules>
        <RowDivRules>
          <span>Qatar 3 x 0 Equador</span>
          <span>Acertou resultado e quantidade de gols do perdedor</span>
          <span>8 pontos</span>
        </RowDivRules>
        <RowDivRules>
          <span>Qatar 4 x 1 Equador</span>
          <span>Acertou resultado mas não a quantidade de gols</span>
          <span>5 pontos</span>
        </RowDivRules>
        <RowDivRules>
          <span>Qatar 2 x 5 Equador</span>
          <span>
            Errou o resultado, mas acertou a quantidade de gols do ganhador ou
            do perdedor
          </span>
          <span>3 pontos</span>
        </RowDivRules>
        <br />
        <p>
          Obs: Em caso de empate, se acertar o resultado mas não a quantidade de
          gols, o palpite ganha 5 pontos.
        </p>
        <br />
        <img
          src={GoBack}
          alt="https://icons8.com/icon/834/desfazer"
          onClick={() => {
            goToHome(navigate);
          }}
        />
      </MainContainer>
    </>
  );
}
