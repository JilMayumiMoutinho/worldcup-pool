import React from "react";
import Erro from "../assets/Error.gif";
import ManoDeDeus from "../assets/handsgoal.gif";
import { MainContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "../constants/ButtonStyles";
import { goToHome } from "../routes/Coordinators";

export function ErrorPage() {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <br />
      <p>Errrrrrrou!!!</p>
      <br />
      <p>Volte uma página! Você digitou o endereço de site errado!</p>
      <img src={Erro} alt="Faustão falando errou!" />
      <img src={ManoDeDeus} aly="Maradona scores a goal with his hand" />
      <Button
        onClick={() => {
          goToHome(navigate);
        }}
      >
        Home Page
      </Button>
    </MainContainer>
  );
}
