import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Botao } from "./styled";

export const Buttons = ({ icone, isLoading, titulo, voltar }) => {
  return (
    <div>
      <Botao
        voltar={voltar}
        loading={isLoading}
        loadingPosition="end"

        // color="primary"
        //endIcon={<ArrowCircleRightIcon />} //{icone}
        // variant="contained"
      >
        {titulo}
      </Botao>
    </div>
  );
};
