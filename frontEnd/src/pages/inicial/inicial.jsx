import { Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Body, Buttons, Titulo } from "../../components";
import { ButtonWrapper, DivRespostas, ProgressWrapper } from "../home/styled";
import Lottie from "react-lottie";
import * as animation from "../../assets/animation.json";
import { DivCenter } from "../../components/container/styled";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Inicial = () => {
  const navigate = useNavigate();

  return (
    <>
      <Body>
        <>
          <Lottie options={defaultOptions} height={300} width={400} />
          <ProgressWrapper>
            {/* <ProgressBar
                progresso={((step + 1) * 100) / arrayQuestionario.length}
                animated={isAnimated}
              /> */}
            {/* 
              <HorizontalLinearStepper
                activeStep={step + 1}
                arrayStep={arrayQuestionario.length}
              /> */}
            {/* {arrayQuestionario.length} */}
            {/* <SpanProgress>
                {step + 1}/{arrayQuestionario.length}
              </SpanProgress> */}
          </ProgressWrapper>
          <Titulo></Titulo>
          <DivCenter>
            {" "}
            Olá, estamos fazendo um app sobre síndrome genéticas e queremos sua
            opinião sobre as cores, botões, telas, textos explicativos, e o que
            mais você quiser nos contar. Clique no botão INICIAR. Vamos lá com
            apenas 5 minutos você nos ajuda a melhorar a experiência dos
            usuários do nosso app e ainda contribui para a ciência e saúde do
            Brasil
          </DivCenter>
          <div className="d-flex justify-content-end mt-4">
            <Buttons
              titulo="Iniciar"
              onClick={() => navigate("questionario")}
              style={{ textDecoration: "none" }}
            />
          </div>
        </>
      </Body>
    </>
  );
};

export default Inicial;
