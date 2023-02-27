import { Styled } from "@/typings/types";
import { Box, Typography } from "@material-ui/core";

const styled: Styled = {
  containerTitle: {
    paddingTop: "30px",
    textAlign: "center"
  },
  h1: {
    fontSize: "35px",
    fontWeight: "700",
    marginBottom: "10px"
  },
  body1: {
    fontSize: "18px",
    fontWeight: "700",
    marginBottom: "10px"
  }
}

export default function Title() {
  return (
    <Box style={styled.containerTitle}>
      <Typography variant="h1" style={styled.h1}>
        Tabela Fipe
      </Typography>
      <Typography variant="body1" style={styled.body1}>
        Consulte o valor de um veículo de forma gratuita
      </Typography>
    </Box>
  )
}