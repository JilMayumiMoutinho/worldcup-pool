import styled from "styled-components";
import {
  greenWorldCup,
  greyWorldCup,
  lightGreyWorldCup,
} from "../constants/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const GroupContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 1%;
  padding: 2%;
  border-bottom: 1px solid ${greyWorldCup};
  margin-bottom: 3%;
`;

export const TitleSection = styled.div`
  width: 63%;
  @media screen and (max-width: 480px) {
    font-size: small;
  }
`;

export const MemberSection = styled(GroupContainer)`
  width: 33%;
  height: 30px;
  padding: 1%;
  background-color: ${lightGreyWorldCup};
  border-radius: 3rem;
  p,
  img {
    background-color: ${lightGreyWorldCup};
  }
  @media screen and (max-width: 480px) {
    font-size: small;
  }
`;

export const Container = styled(MainContainer)`
  flex-direction: row;
  justify-content: space-evenly;
  padding-top: 2%;
  width: 95%;
  margin-top: 1%;
  gap: 1%;
  overflow: hidden;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: small;
  }
`;

export const GoRegister = styled.p`
  cursor: pointer;
`;

export const GifDiv = styled.img`
  height: 80vh;
  width: 100vw;
  @media screen and (max-width: 480px) {
    height: 60vh;
    width: 95vw;
  }
`;

export const RowDiv = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
  width: 40%;
  background-color: ${greyWorldCup};
  padding: 1%;
  border-radius: 0.5rem;
  border: 1px solid ${greyWorldCup};
  @media screen and (max-width: 480px) {
    width: 85%;
  }
  span,
  p {
    padding: 3%;
    border-radius: 0.3rem;
    background-color: ${lightGreyWorldCup};
    @media screen and (max-width: 480px) {
      font-size: small;
    }
  }
`;

export const RowDivRules = styled(RowDiv)`
  border: 0.5px dotted ${greenWorldCup};
  min-height: 2rem;
  grid-template-columns: 20% 60% 20%;
  width: 95%;
  align-items: center;
`;

export const ImgButton = styled.img`
  width: 30px;
  border-radius: 50%;
`;
