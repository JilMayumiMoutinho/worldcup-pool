import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import CreateGroupForm from "./CreateGroupForm";
import { MainContainer } from "../styles";
import { goToHome } from "../../routes/Coordinators";
import { useNavigate } from "react-router-dom";
import GoBack from "../../assets/GoBackW.png";

export function CreateGroupPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MainContainer>
        <br />
        <p>Crie seu próprio bolão e dispute com seus amigos!</p>
        <br />
        <CreateGroupForm />
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
