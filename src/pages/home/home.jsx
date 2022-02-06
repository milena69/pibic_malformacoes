import { Checkbox, FormControlLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Buttons, Body, Titulo, ProgressBar } from '../../components';
import questionario from '../../assets/questionario.json';

const Home = () => {
  //console.log(questionario);
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(!!questionario);
  const [checked, setChecked] = useState([]);
  const [arrayQuestionario, setArrayQuestionario] = useState([]);
  const [respostasQuestionario, setRespostasQuestionario] = useState([]);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    console.log('antes', questionario.perguntas);
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
    console.log('depois', newArrayQuestionario);
    setArrayQuestionario(newArrayQuestionario);
    setIsLoading(false);
    // return () => {
    //   second;
    // };
  }, []);

  const handleCheck = (ev) => {
    const target = ev.target;
    const id = target.id;
    let questao = arrayQuestionario[step];
    let newRespondidas = questao.respostas.map((resposta) => ({
      ...resposta,
      respondida: false,
    }));

    newRespondidas = questao.respostas[id].respondida = target.checked;
    questao.respostas = newRespondidas;
    let newQuestionario = arrayQuestionario.filter(
      (questao) => questao[step].respostas[id].id != id
    );
    setArrayQuestionario([newQuestionario, questao]);
    // console.log("cagada", arrayQuestionario);
    // let newChecked = [];
    // newChecked[id] = target.checked;
    // console.log("checkou: " + newChecked);
    // setChecked(newChecked);
  };

  const handleAvancar = () => {
    setIsAnimated(true);
    setStep(step + 1);
    setTimeout(() => setIsAnimated(false), 1000);
  };
  const handleVoltar = () => {
    setIsAnimated(true);
    setStep(step - 1);
    setTimeout(() => setIsAnimated(false), 1000);
  };

  return (
    <>
      <Body>
        {!isLoading && (
          <>
            <ProgressBar
              progresso={((step + 1) * 100) / arrayQuestionario.length}
              animated={isAnimated}
            />
            <div>
              {step + 1}/{arrayQuestionario.length}
            </div>
            <div style={{ marginTop: 30 }} />
            <Titulo>{arrayQuestionario[step].pergunta}</Titulo>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '25px',
                alignItems: 'justify',
              }}
            >
              {arrayQuestionario[step].respostas.map(({ resposta, id }) => {
                return (
                  <FormControlLabel
                    key={id}
                    control={
                      <Checkbox
                        id={id}
                        checked={resposta.respondida}
                        onChange={handleCheck}
                        //onClick={(e) => this.handleClick(this, id)}
                      />
                    }
                    // defaultChecked
                    label={resposta}
                  />
                );
              })}
            </div>
            <div
              style={{
                justifyContent: 'space-between',
                display: 'flex',
                width: '100%',
                marginTop: '50px',
              }}
            >
              <Buttons titulo='Voltar' voltar='true' onClick={handleVoltar} />
              <Buttons titulo='Próximo' onClick={handleAvancar} />
            </div>
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
