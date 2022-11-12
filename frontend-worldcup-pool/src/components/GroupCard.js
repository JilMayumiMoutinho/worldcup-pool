import React from "react";
import {
  GroupCardContainer,
  GroupSection,
  GroupSectionRanking,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { goToGroupPage } from "../routes/Coordinators";
import TrophyIcon from "../assets/TrophyIcon.png";

export const GroupCard = () => {
  const navigate = useNavigate();

  const allGroups = [
    { name: "Bolão da firma", author: "Mariana Andrade", ranking: 3 },
    { name: "Bolão da faculdade", author: "Talita", ranking: 4 },
    { name: "Bolão do curso", author: "Paulo", ranking: 1 },
  ];

  const groupsList = allGroups?.map((item) => {
    return (
      <GroupCardContainer onClick={() => goToGroupPage(navigate)}>
        <GroupSection>
          <h4>{item?.name}</h4>
          <p>Criado por {item?.author}</p>
        </GroupSection>
        <GroupSectionRanking>
          {item?.ranking < 4 && (
            <img
              width={20}
              src={TrophyIcon}
              alt="https://icons8.com/icon/XuLaeCrjMkAe/trophy"
            />
          )}
          <p>{item?.ranking} º</p>
        </GroupSectionRanking>
      </GroupCardContainer>
    );
  });

  return groupsList;
};
