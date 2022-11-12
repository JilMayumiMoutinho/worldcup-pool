import styled from "styled-components";
import {
  yellowWorldCup,
  greyWorldCup,
  greenWorldCup,
} from "../constants/colors";
import { MainContainer } from "../pages/styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 110px;
  margin-bottom: 1%;
  background-color: ${yellowWorldCup};
  box-shadow: 0 0 1rem 0 ${greyWorldCup};
  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoStyles = styled.img`
  width: 140px;
  margin: 1rem auto;
  cursor: pointer;
  border-radius: 6px;
  @media screen and (max-width: 480px) {
    width: 34%;
  }
`;

export const ContainerFooter = styled(Container)`
  background-image: linear-gradient(to top, #000000, #000000, #3f3f42, #eaeaea);
  color: white;
  margin-top: 2%;
  padding-top: 2rem;
  gap: 10%;
  height: 140px;
  box-shadow: none;
  @media screen and (max-width: 480px) {
    height: fit-content;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  height: 110px;
`;

export const ContainIcons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  img {
    width: 30px;
    border-radius: 50%;
    :hover {
      box-shadow: 0 0 1rem 0 ${greyWorldCup};
      cursor: pointer;
    }
  }
`;

export const Copy = styled.p`
  align-self: center;
`;

export const CRStyles = styled.img`
  width: 16px;
`;

export const GroupCardContainer = styled.div`
  display: flex;
  width: 22rem;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${greyWorldCup};
  box-shadow: 0 0.5rem 0.3rem 0rem ${greenWorldCup};
  p,
  h4 {
    background-color: ${greyWorldCup};
  }
  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;

export const GroupSection = styled(FooterSection)`
  align-items: start;
  width: 80%;
  height: fit-content;
  background-color: ${greyWorldCup};
`;

export const GroupSectionRanking = styled(FooterSection)`
  flex-direction: row;
  align-items: center;
  border-radius: 2rem;
  width: 20%;
  height: 25px;
  background-color: ${greenWorldCup};
  img {
    background-color: ${greenWorldCup};
  }
  p {
    background-color: ${greenWorldCup};
  }
`;

///////// Matches styles
export const MatchContain = styled(MainContainer)`
  justify-content: center;
  width: 100%;
  border-radius: 0.5rem;
  padding: 3%;
  margin: 2%;
  background-color: ${greyWorldCup};
  box-shadow: 0 0.5rem 0.3rem 0rem ${greenWorldCup};
  p, h4 {
    background-color: ${greyWorldCup};
  }
`;

export const InputsSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 3%;
  width: 100%;
  margin-top: 1%;
  background-color: ${greyWorldCup};
  img {
    width: 30px;
  }
`;

export const ScoreGuess = styled.input`
  width: 2.5rem;
  height: 2.5rem;
`;