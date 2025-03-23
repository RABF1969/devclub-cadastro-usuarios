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
import UsersImage from "./assets/users.png";
function Home() {
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
            <Input type="text" placeholder="Nome do Usuário" />
          </div>

          <div>
            <ImputLabel>
              Idade<span> *</span>
            </ImputLabel>
            <Input type="number" placeholder="Idade do Usuário" />
          </div>
        </ContainerInputs>

        <div style={{ width: "100%" }}>
          <ImputLabel>
            E-mail<span> *</span>
          </ImputLabel>
          <Input type="email" placeholder="Email do Usuário" />
        </div>

        <Button>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;
