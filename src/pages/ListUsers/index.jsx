import { useEffect } from "react";
import api from "../../services/api";
import Button from "../../components/Button";
import TopBackground from "../../components/TopBackground";

function ListUsers() {

  useEffect(() => {
    // função que vai buscar os usuários do banco de dados
    // e vai renderizar na tela
    async function getUsers() {
      const usersFromApi = await api.get("/usuarios")
      console.log(usersFromApi.data)
    }
    getUsers();       
  }, [])



  return (
    <div>
      <TopBackground />
      <h1>Lista de Usuários</h1>
      <Button>Voltar</Button>
    </div>
  );
}

export default ListUsers;
