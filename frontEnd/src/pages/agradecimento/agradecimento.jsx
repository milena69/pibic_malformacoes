import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ButtonWrapper,
  DivBody,
  DivRespostas,
  DivThanks,
} from "../home/styled";
import Lottie from "react-lottie";
import * as animation from "../../assets/lf20_mdg3meka.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Agradecimento = () => {
  //const { id } = useParams();

  //   const navigate = useNavigate();
  return (
    <DivBody>
      <DivThanks>
        <Lottie options={defaultOptions} height={400} width={800} />
      </DivThanks>
      <DivRespostas>
        {
          "Obrigada por chegar até aqui e nos ajudar a criar a melhor experiência possível! Por enquanto é só isso, mas o objetivo é que, depois de preenchidas todas as perguntas, a aplicação cruze os dados e mostre um relatório com probabilidade estimada da presença ou não de síndromes genéticas e indicando especialidades que o(a) paciente deve procurar. O usuário também terá a possibilidade de baixá-lo em formato pdf. Não deixe de preencher o formulário de feedback sobre suas impressões"
        }
      </DivRespostas>
      <ButtonWrapper>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfeY_o_dSRTasRt6XKdy_8O1MzZDVnx0HJSmakVZkReCPHvPw/viewform">
          Formulario
        </a>
      </ButtonWrapper>
    </DivBody>
  );
};

export default Agradecimento;
