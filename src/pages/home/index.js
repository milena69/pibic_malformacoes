import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useRequest, RequestActionTypes } from "../../utils/hooks";
import { Buttons } from "../../components/button";
import { Body } from "../../components/container";
import { DivCenter } from "../../components/container/styled";
import { Titulo } from "../../components/titulo";
import questionario from "../../assets/questionario.json";

const Home = () => {
  //console.log(questionario);
  const [step, setStep] = useState(0);
  const [isLoading, setisLoading] = useState(!!questionario);
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = (check) => {
    // check.target.name = check.target.checked;
    const teste = { [check.target.name]: check.target.checked };
    //console.log("target", check.target);

    setChecked(check.target.checked);
  };
  // function handleClick(e, c) {
  //   console.log("teste", e);
  //   // this.setChecked({ [check.target.id]: check.target.checked });
  // }

  // const navigate = useNavigate();
  // const [produtos, setProdutos] = useState(null);
  // const [mensagemErro, setMensagemErro] = useState("");
  // const [requestState, { get, post }] = useRequest();

  // const buscarProdutos = async () => {
  //   try {
  //     const produtinhos = await get("produtos");
  //     const cep = await get("buscarcep/36773578");
  //     setProdutos(produtinhos);
  //     console.log(cep);
  //     console.log(produtinhos);
  //   } catch (err) {
  //     setMensagemErro(err?.data?.mensagem ?? "Algo de errado não está certo");
  //     console.log("Error", err?.data?.mensagem);
  //   }
  // };

  return (
    <>
      <Body>
        <DivCenter dark="true">
          <Titulo>{questionario.perguntas[step].pergunta}</Titulo>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "25px",
              alignItems: "justify",
            }}
          >
            {isLoading &&
              questionario.perguntas[step].respostas.map(({ resposta, id }) => {
                return (
                  <FormControlLabel
                    key={id}
                    control={
                      <Checkbox
                        id={"id" + id}
                        // name={"".concat("id", id)}
                        //checked={checked}
                        //onChange={toggleCheckbox}
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
              justifyContent: "space-between",
              display: "flex",
              width: "100%",
              marginTop: "50px",
            }}
          >
            <Buttons
              titulo="Voltar"
              voltar="true"
              onClick={() => setStep(step - 1)}
            />
            <Buttons titulo="Próximo" onClick={() => setStep(step + 1)} />
          </div>
        </DivCenter>
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
