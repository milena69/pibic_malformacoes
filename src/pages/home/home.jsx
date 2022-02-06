import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Buttons, Body, Titulo, ProgressBar } from '../../components';
import questionario from '../../assets/questionario.json';
import {
  ButtonWrapper,
  DivRespostas,
  ProgressWrapper,
  SpanProgress,
} from './styled';

const Home = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(!!questionario);
  const [arrayQuestionario, setArrayQuestionario] = useState([]);
  const [respostasQuestao, setRespostasQuestao] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    let newArrayQuestionario = questionario.perguntas.map((pergunta) => {
      let newRepostas = pergunta.respostas.map((resposta) => ({
        ...resposta,
        checked: false,
      }));
      return {
        ...pergunta,
        respostas: newRepostas,
        respondida: false,
      };
    });
    setArrayQuestionario(newArrayQuestionario);
    setRespostasQuestao(newArrayQuestionario[step].respostas);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log('Questionário:', arrayQuestionario);
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
      window.alert('preenche direito');
    }
  };

  const handleVoltar = () => {
    setRespostasQuestao(arrayQuestionario[step - 1].respostas); // Para aparecer as novas questões
    setIsAnimated(true);
    setStep(step - 1);
    setTimeout(() => setIsAnimated(false), 1000);
  };

  console.log('Olha as respostas', respostasQuestao);

  const handleCheckChange = ({ target: { checked } }, idResposta) => {
    const index = respostasQuestao?.findIndex((x) => x.id === idResposta);
    let newRespostas = [];

    // Se não for múltiplaEscolha troca tudo pra falso antes de trocar o que foi clicado
    if (!arrayQuestionario[step].multiplaEscolha) {
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
    window.alert('acabouuu, que festa!');
  };

  return (
    <>
      <Body>
        {!isLoading && (
          <>
            <ProgressWrapper>
              <ProgressBar
                progresso={((step + 1) * 100) / arrayQuestionario.length}
                animated={isAnimated}
              />
              <SpanProgress>
                {step + 1}/{arrayQuestionario.length}
              </SpanProgress>
            </ProgressWrapper>
            <Titulo>{arrayQuestionario[step].pergunta}</Titulo>
            <DivRespostas>
              {arrayQuestionario[step].respostas.map(({ resposta, id }) => {
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
                titulo='Voltar'
                voltar='true'
                onClick={handleVoltar}
                disabled={step < 1}
              />
              <Buttons
                titulo='Próximo'
                onClick={handleAvancar}
                {...(step + 1 === arrayQuestionario.length && {
                  titulo: 'Concluir',
                  onClick: handleConcluir,
                })}
              />
            </ButtonWrapper>
          </>
        )}
      </Body>
    </>
  );
};

export default Home;

//  <div
//   style={{
//     justifyContent: "center",
//     alignItems: "center",
//     display: "flex",
//   }}
// >
//   {requestState.status === RequestActionTypes.FETCHING && (
//     <div>
//       <CircularProgress color="inherit" size={16} />
//     </div>
//   )}
//   {requestState.status === RequestActionTypes.SUCCESS &&
//     produtos?.payload?.produtos?.map((produto, index) => (
//       <div key={index}>
//         <li>{produto.descricao}</li>
//         <li>{produto.conveniada}</li>
//       </div>
//     ))}
//   {requestState.status !== RequestActionTypes.SUCCESS && (
//     <h1>{mensagemErro}</h1>
//   )}
// </div>

// const handleCheck = (ev) => {
//   const target = ev.target;
//   const id = target.id;
//   let questao = arrayQuestionario[step];
//   let newRespondidas = questao.respostas.map((resposta) => ({
//     ...resposta,
//     respondida: false,
//   }));

//   newRespondidas = questao.respostas[id].respondida = target.checked;
//   questao.respostas = newRespondidas;
//   let newQuestionario = arrayQuestionario.filter(
//     (questao) => questao[step].respostas[id].id != id
//   );
//   setArrayQuestionario([newQuestionario, questao]);
//   // console.log("cagada", arrayQuestionario);
//   // let newChecked = [];
//   // newChecked[id] = target.checked;
//   // console.log("checkou: " + newChecked);
//   // setChecked(newChecked);
// };
