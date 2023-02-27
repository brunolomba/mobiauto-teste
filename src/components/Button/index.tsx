import { Styled } from "@/typings/types";
import { Button, Box } from "@material-ui/core";
import Link from "next/link";
import { useContext} from "react";
import { SearchContext } from "@/context/SearchContext";

const styled: Styled = {
  containerButton: {
    display: "flex",
    justifyContent: "center"
  },
  button: {
    marginTop: "10px",
    padding: "7px 30px",
    fontWeight: "700",
    backgroundColor: "#5d00c0",
    color: "#FFFFFF",
    textTransform: "lowercase"
  },
  buttonDisabled: {
    marginTop: "10px",
    padding: "7px 30px",
    fontWeight: "700",
    backgroundColor: "#d9d9d9",
    color: "#a1a1a1",
    textTransform: "lowercase"
  }
}

export function ButtonSearch() {
  const {
    selectedYear,
  } = useContext(SearchContext)

  return (
    <Box style={styled.containerButton}>
      {selectedYear ? (
        <Link href={"/search-result"}>
          <Button
            variant="contained"
            style={styled.button}
          >
            Consultar preço
          </Button>
        </Link>
      ) : (
        <Button
          variant="contained"
          color="primary"
          disabled
          style={styled.buttonDisabled}
        >
          Consultar preço
        </Button>
      )}
    </Box>
  )
}