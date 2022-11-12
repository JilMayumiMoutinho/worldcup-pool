import React, { useContext } from "react";
import { Button } from "../../constants/ButtonStyles";
import useForm from "../../hooks/useForm";
import { CreateGroup } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinators";
import {
  InputStyled,
  InputStyledDescription,
  FormContainer,
  LabelStyled
} from "../SignupPage/styles";
import { GlobalContext } from "../../global/GlobalContext";

export default function SignUpForm() {
  const [form, onChange, clear] = useForm({
    groupsname: "",
    description: "",
    nickname: "",
  });

  const { setNickname, setToken } = useContext(GlobalContext);

  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    CreateGroup(form, goToHome, navigate, clear);
  };

  return (
    <FormContainer onSubmit={onSubmitForm}>
      <InputStyled
        placeholder="Nome do grupo"
        name={"groupsname"}
        value={form.groupsname}
        onChange={onChange}
        type={"text"}
        required
      />
      <LabelStyled>Nome*</LabelStyled>
      <br />
      <InputStyledDescription
        placeholder="Ex: Bolão com a galera do trabalho. Prêmio: R$ 1.000,00"
        name={"description"}
        value={form.description}
        onChange={onChange}
        type={"text"}
        required
      />
      <LabelStyled>Descrição*</LabelStyled>
      <br />
      <Button>Criar</Button>
    </FormContainer>
  );
}
