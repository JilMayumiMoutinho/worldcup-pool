import React, { useContext } from "react";
import { GlobalContext } from "../global/GlobalContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useProtectedPage } from "../hooks/useProtectedPage";
import { Button } from "../constants/ButtonStyles";
import { MainContainer, GifDiv, RowDiv, ImgButton } from "./styles";
import { InputStyled } from "./SignupPage/styles";
import { DelUser } from "../services/requests";
import LoadingGif from "../assets/Loading.gif";
import Wistle from "../assets/Wistle.jpeg";
import {
  goToCreateGroupPage,
  goToGroupPage,
  goToLogin,
  goToMyGroupsPage,
  goToRulesPage,
} from "../routes/Coordinators";
import { useNavigate } from "react-router-dom";
import { token } from "../constants/token";

export function HomePage() {
  //useProtectedPage();
  const { isLoading, nickname } = useContext(GlobalContext);
  const navigate = useNavigate();

  //Atualizar no código, passar id e user_id e não nickname
  const delMembership = (id, user_id) => {
    DelUser(id, user_id);
    goToLogin(navigate);
  };

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(navigate);
  };

  return (
    <>
      <Header />
      {isLoading && (
        <GifDiv src={LoadingGif} alt="Loading. Página carregando" />
      )}
      {!isLoading && (
        <MainContainer>
          <p>Olá {nickname}! Bora palpitar?</p>
          <br />
          <RowDiv>
            <span onClick={() => goToMyGroupsPage(navigate)}>Meus bolões</span>
            <span onClick={() => goToCreateGroupPage(navigate)}>
              Criar grupo
            </span>
          </RowDiv>
          <br />
          <InputStyled
            name="search"
            placeholder="Nome ou código do grupo"
            type="text"
            /* onChange={handlePartnerhip} */
          />
          <br />
          <Button onClick={() => delMembership(nickname)}>Buscar grupo</Button>
          <Button onClick={() => goToGroupPage(navigate)}>
            Aposta sem grupo
          </Button>
          <Button onClick={() => goToRulesPage(navigate)}>
            <ImgButton src={Wistle} alt="black wistle"></ImgButton>
            Regras
          </Button>
          <RowDiv>
            <Button onClick={() => delMembership(nickname)}>
              Descadastrar
            </Button>
            <Button onClick={() => logout()}>Logout</Button>
          </RowDiv>
        </MainContainer>
      )}
      <Footer />
    </>
  );
}
