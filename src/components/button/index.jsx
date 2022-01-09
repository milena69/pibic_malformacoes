import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { Botao } from "./styled";

export const Bottun = ({ icone, isLoading }) => {
  return (
    <div>
      <Botao
        loading={isLoading}
        loadingPosition="end"
        color="primary"
        endIcon={<ArrowCircleRightIcon />} //{icone}
        variant="contained"
      >
        Próximo
      </Botao>
    </div>
  );
};
