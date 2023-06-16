import React, { useRef, useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import People from "../../assets/People.svg";
import Arrow from "../../assets/arrow.svg";

import  H1  from "../../components/Title/";
import ContainerItens from "../../components/ContainerItens";
import Button from '../../components/Button';

import {
  Container,
  Img,
  InputLabel,
  Input,
} from "./styles.js";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate()

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);

    navigate('/usuarios')
  }

  

  return (
    <Container>
      <Img alt="img-people" src={People}></Img>

      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />{" "}
        </Button>

      
      </ContainerItens>
    </Container>
  );
};

export default App;
