import React from "react";
import { MainContainer, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/Coordinators";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GroupCard } from "../components/GroupCard";
import GoBack from "../assets/GoBackW.png";

export function MyGroupsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MainContainer>
        <br />
        <h3>Meus grupos</h3>
        <br />
        <p>Veja os bolões que esta participando:</p>
        <Container>
          <GroupCard />
        </Container>
        <br />
        <img
          src={GoBack}
          alt="https://icons8.com/icon/834/desfazer"
          onClick={() => {
            goToHome(navigate);
          }}
        />
      </MainContainer>
      <Footer />
    </>
  );
}
