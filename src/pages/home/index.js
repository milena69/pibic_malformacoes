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
import { Bottun } from "../../components/button";
import { Body } from "../../components/container";

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
        {/* <Typography variant="h1">Home</Typography> */}
        {/* <Bottun></Bottun> */}
        <Body>
         
        </Body>
        {/* <LoadingButton
          loadingIndicator={<CircularProgress color="inherit" size={16} />}
          loading={requestState.status === RequestActionTypes.FETCHING}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="outlined"
          onClick={buscarProdutos}
        >
          SAVE
        </LoadingButton>
        <Button
          loading={true}
          variant="outlined"
          onClick={() => navigate("login")}
        >
          Login
        </Button>
        <Button variant="outlined" onClick={() => navigate("cadastro")}>
          Cadastre-se
        </Button>
        <Button variant="outlined" onClick={() => navigate("dashboard")}>
          Dashboard
        </Button>
        <Button variant="outlined" onClick={() => navigate("dashboard/5")}>
          Dashboard Com parâmetro
        </Button>
        <Button variant="outlined" onClick={buscarProdutos}>
          Buscar Produtos
        </Button> */}
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        {requestState.status === RequestActionTypes.FETCHING && (
          <div>
            <CircularProgress color="inherit" size={16} />
          </div>
        )}
        {requestState.status === RequestActionTypes.SUCCESS &&
          produtos?.payload?.produtos?.map((produto, index) => (
            <div key={index}>
              <li>{produto.descricao}</li>
              <li>{produto.conveniada}</li>
            </div>
          ))}
        {requestState.status !== RequestActionTypes.SUCCESS && (
          <h1>{mensagemErro}</h1>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Home;
