import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Botao } from "./styled";

export const Buttons = ({ icone, isLoading, titulo, voltar, ...rest }) => {
  return (
    <div>
      <Botao
        variant="contained"
        {...(voltar && { variant: "outlined" })}
        loading={isLoading}
        {...rest}
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
