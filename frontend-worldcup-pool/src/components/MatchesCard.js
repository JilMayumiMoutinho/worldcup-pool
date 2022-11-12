import React from "react";
import {
  MatchContain,
  InputsSection,
  ScoreGuess,
  GroupCardContainer,
  GroupSection,
  GroupSectionRanking,
} from "./styles";
import { MainContainer } from "../pages/styles";
import { GiBrazilFlag } from "react-icons/gi";
import { GiShrimp } from "react-icons/gi";
import { TfiClose } from "react-icons/tfi";

export const MatchCard = () => {
  const allMatches = [
    {
      match: 1,
      country1: "Brasil",
      country2: "Camarron",
      date: "22 de Novembro de 2022 as 16:00h",
      ranking: 4,
    },
    {
      match: 2,
      country1: "USA",
      country2: "SouthAfrica",
      date: "22 de Novembro de 2022 as 16:00h",
      ranking: 4,
    },
    {
      match: 3,
      country1: "Brasil",
      country2: "Europe",
      date: "22 de Novembro de 2022 as 16:00h",
      ranking: 4,
    },
    {
      match: 4,
      country1: "Brasil",
      country2: "SouthAfrica",
      date: "10 de Novembro de 2022 as 16:00h",
      ranking: 4,
    },
  ];

  const MatchesList = allMatches?.map((item) => {
    return (
      <MatchContain>
        <h4>
          {item?.country1} x {item?.country2}
        </h4>
        <p>{item?.date}</p>
        <InputsSection>
          <ScoreGuess palceholder="" type="number" />
          <GiBrazilFlag width={30} />
          <TfiClose />
          <GiShrimp />
          <ScoreGuess palceholder="" type="number" />
        </InputsSection>
        {item?.date === "10 de Novembro de 2022 as 16:00h" && (
          <h4>PRAZO PARA PALPITE FINALIZADO</h4>
        )}
      </MatchContain>
    );
  });

  return MatchesList;
};
