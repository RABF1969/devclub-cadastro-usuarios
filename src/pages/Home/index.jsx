import { useRef } from "react";

import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  ImputLabel,
} from "./styles";
import UsersImage from "../../assets/users.png";
function Home() {
const inputName = useRef();
const inputAge = useRef();
const inputEmail = useRef();

function registerNewUser() {
  console.log(inputName.current.value);
  
}


  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="Imagem-de-usuários" />
      </TopBackground>

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
            <Input type="number" placeholder="Idade do Usuário" ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <ImputLabel>
            E-mail<span> *</span>
          </ImputLabel>
          <Input type="email" placeholder="Email do Usuário" ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;
