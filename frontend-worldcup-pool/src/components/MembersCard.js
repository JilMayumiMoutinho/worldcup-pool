import React from "react";
import {
  GroupCardContainer,
  GroupSection,
  GroupSectionRanking,
} from "./styles";
import TrophyIcon from "../assets/TrophyIcon.png";

export const MemberCard = () => {

  const allMembers = [
    { name: "Mia", points: 20, ranking: 4 },
    { name: "Raul", points: 31, ranking: 2 },
    { name: "Gatuno", points: 42, ranking: 1 },
    { name: "Legs", points: 22, ranking: 3 },
  ];

  const MembersList = allMembers?.map((item) => {
    return (
      <GroupCardContainer>
        <GroupSection>
          <h4>{item?.name}</h4>
          <p>{item?.points} ponto(s)</p>
        </GroupSection>
        <GroupSectionRanking>
          {item?.ranking < 4 && (
            <>
              <img
                /* src={AiOutlineTrophy} */
                width={20}
                src={TrophyIcon}
                alt="https://icons8.com/icon/XuLaeCrjMkAe/trophy"
              />
            </>
          )}
          <p>{item?.ranking} º</p>
        </GroupSectionRanking>
      </GroupCardContainer>
    );
  });

  return MembersList;
};
