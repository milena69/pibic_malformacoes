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

const Home = () => {
  const navigate = useNavigate();
  const [produtos, setProdutos] = useState(null);
  const [mensagemErro, setMensagemErro] = useState("");
  const [requestState, { get, post }] = useRequest();

  const buscarProdutos = async () => {
    try {
      const produtinhos = await get("produtos");
      const cep = await get("buscarcep/36773578");
      setProdutos(produtinhos);
      console.log(cep);
      console.log(produtinhos);
    } catch (err) {
      setMensagemErro(err?.data?.mensagem ?? "Algo de errado não está certo");
      console.log("Error", err?.data?.mensagem);
    }
  };

  return (
    <>
      <div>
        <Body>
          <DivCenter dark>
            <Titulo>Qual a sua profissão?</Titulo>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="médico(a)"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="enfermeiro(a)"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="técnico(a) de enfermagem"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="estudante da saúde"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="outro profissional da área de saúde"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="paciente"
              />
            </div>
            <div
              style={{
                justifyContent: "space-between",
                display: "flex",
                width: "100%",
                marginTop: "50px",
              }}
            >
              <Buttons titulo="Voltar" voltar />
              <Buttons titulo="Próximo" />
            </div>
          </DivCenter>
        </Body>
      </div>
      {/* <Outlet /> */}
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
