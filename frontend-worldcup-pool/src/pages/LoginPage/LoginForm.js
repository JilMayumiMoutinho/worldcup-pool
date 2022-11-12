import React, { useContext } from "react";
import { Button } from "../../constants/ButtonStyles";
import useForm from "../../hooks/useForm";
import { Login } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinators";
import { InputStyled, FormContainer, LabelStyled } from "../SignupPage/styles";
import { GlobalContext } from "../../global/GlobalContext";

export default function LoginForm() {
  const { setNickname, nickname } = useContext(GlobalContext);
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const navigate = useNavigate();

  const onSubmitForm = (event) => {
    event.preventDefault();
    const position = form.email.indexOf("@");
    const nick = form.email.slice(0, position);
    setNickname(nick);
    localStorage.setItem("nick", nick);
    Login(form, goToHome, navigate, clear);
  };

  return (
    <FormContainer onSubmit={onSubmitForm}>
      <InputStyled
        placeholder="E-mail"
        name={"email"}
        value={form.email}
        onChange={onChange}
        type="text"
        required
      />
      <LabelStyled>E-mail*</LabelStyled>
      <InputStyled
        placeholder="Mínimo 6 caracteres"
        name={"password"}
        value={form.password}
        onChange={onChange}
        type="password"
        pattern="^.{6,10}$"
        required
        title="Password must have from 6 up to 10 characteres"
      />
      <LabelStyled>Password*</LabelStyled>
      <Button>Login</Button>
    </FormContainer>
  );
}
