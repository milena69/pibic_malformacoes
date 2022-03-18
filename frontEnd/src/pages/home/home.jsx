import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Buttons,
  Body,
  Titulo,
  ProgressBar,
  AlertaToastError,
} from "../../components";
import questionario from "../../assets/questionario.json";
import {
  ButtonWrapper,
  DivRespostas,
  ProgressWrapper,
  SpanProgress,
} from "./styled";
import { useAlert } from "react-alert";
import { types } from "react-alert";
import { positions } from "react-alert";

import * as animation from "../../assets/animation.json";
import { useParams, useNavigate } from "react-router-dom";
import { HorizontalLinearStepper } from "../../components/linear-stepper/linear-stepper";

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(!!questionario);
  const [arrayQuestionario, setArrayQuestionario] = useState([]);
  const [respostasQuestao, setRespostasQuestao] = useState([]);
  const alert = useAlert();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    setRespostasQuestao(questionario.perguntas[step]?.respostas);
    setArrayQuestionario(questionario.perguntas);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log("Questionário:", arrayQuestionario);
  }, [arrayQuestionario]);

  const handleAvancar = () => {
    // verifica se tem alguma resposta marcada
    if (respostasQuestao.some((resposta) => resposta.checked)) {
      const newStep = step + 1;
      let newRespostas = arrayQuestionario.map((x) => x); // Copia array
      newRespostas[step].respostas = respostasQuestao;
      newRespostas[step].respondida = true;
      setArrayQuestionario(newRespostas);

      setRespostasQuestao(arrayQuestionario[newStep].respostas); // Para aparecer as novas questões
      setIsAnimated(true);
      setStep(newStep);
      setTimeout(() => setIsAnimated(false), 1000);
    } else {
      alert.show("Preencha uma resposta", {
        //position: positions.MIDDLE_RIGHT,
      });
    }
  };

  const handleVoltar = () => {
    setRespostasQuestao(arrayQuestionario[step - 1].respostas); // Para aparecer as novas questões
    setIsAnimated(true);
    setStep(step - 1);
    setTimeout(() => setIsAnimated(false), 1000);
  };

  console.log("Olha as respostas", respostasQuestao);

  const handleCheckChange = ({ target: { checked } }, idResposta) => {
    const index = respostasQuestao?.findIndex((x) => x.id === idResposta);
    let newRespostas = [];

    // Se não for múltiplaEscolha troca tudo pra falso antes de trocar o que foi clicado
    if (!arrayQuestionario[step]?.multiplaEscolha) {
      newRespostas = respostasQuestao.map(({ id, resposta }) => {
        return {
          id,
          resposta,
          checked: false,
        };
      });
    } else {
      newRespostas = respostasQuestao.map(
        ({ id, resposta, checked: check }) => {
          return {
            id,
            resposta,
            checked: check,
          };
        }
      );
    }
    newRespostas[index].checked = checked;
    setRespostasQuestao(newRespostas);
  };

  const handleConcluir = () => {
    if (respostasQuestao.some((resposta) => resposta.checked)) {
      window.location.href =
        "https://docs.google.com/forms/d/e/1FAIpQLSfeY_o_dSRTasRt6XKdy_8O1MzZDVnx0HJSmakVZkReCPHvPw/viewform";
    } else {
      alert.show("Preencha uma resposta", {
        //position: positions.MIDDLE_RIGHT,
      });
    }
  };

  return (
    <>
      <Body>
        {!isLoading && (
          <>
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
            <Titulo>{arrayQuestionario[step]?.pergunta}</Titulo>
            <DivRespostas>
              {arrayQuestionario[step]?.respostas.map(({ resposta, id }) => {
                return (
                  <FormControlLabel
                    key={id}
                    control={
                      <Checkbox
                        id={id}
                        checked={respostasQuestao[id].checked}
                        onChange={(evento) => handleCheckChange(evento, id)}
                      />
                    }
                    label={resposta}
                  />
                );
              })}
            </DivRespostas>
            <ButtonWrapper>
              <Buttons
                titulo="Voltar"
                voltar="true"
                onClick={handleVoltar}
                disabled={step < 1}
              />
              <Buttons
                titulo="Próximo"
                onClick={handleAvancar}
                style={{ textDecoration: "none" }}
                {...(step + 1 === arrayQuestionario.length && {
                  titulo: "Concluir",
                  onClick: handleConcluir,
                })}
              />
            </ButtonWrapper>
            {/* <div>
              <button onClick={() => navigate("/agradecimento")}>
                exemplo de steeper
              </button>
            </div> */}
          </>
        )}
      </Body>
    </>
  );
};

export default Home;
