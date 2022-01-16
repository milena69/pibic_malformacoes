import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Botao } from "./styled";

export const Buttons = ({ icone, isLoading, titulo, voltar }) => {
  return (
    <div>
      <Botao
        variant="contained"
        {...(voltar && { variant: "outlined" })}
        loading={isLoading}
        voltar={voltar}
        // color="primary"
        // loadingPosition="end"
        //endIcon={<ArrowCircleRightIcon />} //{icone}
        // variant="contained"
      >
        {titulo}
      </Botao>
    </div>
  );
};
