import React, { useState } from "react";
import {
  MainContainer,
  RowDiv,
  TitleSection,
  MemberSection,
  GroupContainer,
} from "../styles";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/Coordinators";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import GoBack from "../../assets/GoBackW.png";
import MembersIcon from "../../assets/TeamIcon.png";
import { RiTeamFill } from "react-icons/ri";
import { MemberCard } from "../../components/MembersCard";
import { MatchCard } from "../../components/MatchesCard";

export function GroupPage() {
  const navigate = useNavigate();

  const [modal, setModal] = useState(true);

  return (
    <>
      <Header />
      <MainContainer>
        <br />
        <GroupContainer>
          <TitleSection>
            <h4>Grupo da Carochinha</h4>
            <p>Criado por </p>
          </TitleSection>
          <MemberSection>
            <RiTeamFill />
            {/* <img
              width={20}
              src={MembersIcon}
              alt="https://icons8.com/icon/1EDD3LtnRXA2/fans"
            /> */}
            <p>13 membros</p>
          </MemberSection>
        </GroupContainer>
        <RowDiv>
          <span onClick={() => setModal(true)}>Ranking do grupo</span>
          <span onClick={() => setModal(false)}>Seus palpites</span>
        </RowDiv>
        <br />
        {modal && <MemberCard />}
        {!modal && <MatchCard />}
        <img
          src={GoBack}
          alt="https://icons8.com/icon/834/desfazer"
          onClick={() => {
            goBack(navigate);
          }}
        />
      </MainContainer>
      <Footer />
    </>
  );
}
