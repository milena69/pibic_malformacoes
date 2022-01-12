// import Container from "@mui/material/Container";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Buttons } from "../button";
import { Containers, DivCenter, InputIguim } from "./styled";

export const Body = () => {
  return (
    <div>
      <Containers>
        <DivCenter dark>
          Qual a sua profissão?
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="enfermeiro(a)"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="médico(a)"
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
            <Buttons></Buttons>
          </div>
        </DivCenter>
      </Containers>
    </div>
  );
};
