import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import {
  Title,
  Container,
  Form,
  ContainerInputs,
  Input,
  ImputLabel,
} from "./styles";

import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";
function Home() {
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

const navigate = useNavigate()

  async function registerNewUser() {
    await api.post("/usuarios", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value,
    })
    navigate ("/lista-de-usuarios")
  }

  return (
    <Container>
      <TopBackground />

      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <ImputLabel>
              Nome<span> *</span>
            </ImputLabel>
            <Input type="text" placeholder="Nome do Usuário" ref={inputName} />
          </div>

          <div>
            <ImputLabel>
              Idade<span> *</span>
            </ImputLabel>
            <Input
              type="number"
              placeholder="Idade do Usuário"
              ref={inputAge}
            />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <ImputLabel>
            E-mail<span> *</span>
          </ImputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>

      <Button type="button" onClick={() => navigate ("/lista-de-usuarios")}>Ver Lista de Usuário</Button>
    </Container>
  );
}

export default Home;
