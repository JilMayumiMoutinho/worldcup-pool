import React, { useContext, useState } from "react";
import { Button } from "../../constants/ButtonStyles";
import useForm from "../../hooks/useForm";
import SenhaImg2 from "../../assets/senha.png";
import SenhaImg from "../../assets/senha2.png";
import { Signup } from "../../services/requests";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinators";
import {
  InputStyled,
  FormContainer,
  LabelStyled,
  InputPassword,
  InputPContainer,
  ImgPassword,
} from "./styles";
import { greyWorldCup } from "../../constants/colors";
import { GlobalContext } from "../../global/GlobalContext";

export default function SignUpForm() {
  const [form, onChange, clear] = useForm({
    name: "",
    nickname: "",
    email: "",
    role: "",
    password: ""
  });

  const { setNickname, setToken } = useContext(GlobalContext);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const togglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const onChangeConfirm = (event) => {
    setConfirmPassword(event.target.value);
  };

  const onSubmitForm = (event) => {
    if (form.password !== confirmPassword) {
      setError(true);
      window.alert("Passwords don't math");
    } else {
      event.preventDefault();
      Signup(form, goToHome, navigate, clear, setToken);
      setNickname(form.nickname);
    }
  };

  return (
    <FormContainer onSubmit={onSubmitForm}>
      <InputStyled
        placeholder="Full name"
        name={"name"}
        value={form.name}
        onChange={onChange}
        type={"text"}
        required
      />
      <LabelStyled>Full name*</LabelStyled>
      <br />
      <InputStyled
        placeholder="Nickname"
        name={"nickname"}
        value={form.nickname}
        onChange={onChange}
        type={"text"}
        required
      />
      <LabelStyled>Nickname*</LabelStyled>
      <br />
      <InputStyled
        placeholder="E-mail"
        name={"email"}
        value={form.email}
        onChange={onChange}
        type={"text"}
        required
      />
      <LabelStyled>E-mail*</LabelStyled>
      <br />
      <InputStyled
        placeholder="Role"
        name={"role"}
        value={form.role}
        onChange={onChange}
        type={"text"}
        required
      />
      <LabelStyled>Role*</LabelStyled>
      <br />
      <InputPContainer style={{ borderColor: error ? "red" : `${greyWorldCup}` }}>
        <InputPassword
          placeholder="6 characteres minimum"
          name={"password"}
          value={form.password}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          pattern="^.{6,10}$"
          required
        />
        <ImgPassword
          onClick={togglePassword}
          src={showPassword ? SenhaImg2 : SenhaImg}
        />
      </InputPContainer>
      <LabelStyled>Password*</LabelStyled>
      <InputPContainer style={{ borderColor: error ? "red" : `${greyWorldCup}` }}>
        <InputPassword
          placeholder="Confirm your password"
          name={"confirmPassword"}
          value={confirmPassword}
          onChange={onChangeConfirm}
          type={showPassword2 ? "text" : "password"}
          pattern="^.{6,10}$"
          required
          title="Password must have from 6 up to 10 characteres"
        />
        <ImgPassword
          onClick={togglePassword2}
          src={showPassword2 ? SenhaImg2 : SenhaImg}
        />
      </InputPContainer>
      <LabelStyled>Confirm*</LabelStyled>
      <Button>Create</Button>
    </FormContainer>
  );
}
