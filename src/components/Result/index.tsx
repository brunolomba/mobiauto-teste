import { useContext, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import { SearchContext } from '@/context/SearchContext'
import { Styled } from '@/typings/types'
import { fetchPrice } from '@/utils/fetchPrice'

const styled: Styled = {
  containerResult: {
    margin: "0 auto",
    padding: "40px 0",
    textAlign: "center",
    width: "100%",
    bgcolor: "#dcf5f2",
  },
  h2: {
    fontSize: "25px",
    fontWeight: "700",
    marginBottom: "15px"
  },
  price: {
    display: "inline-block",
    fontSize: "25px",
    fontWeight: "700",
    marginBottom: "15px",
    backgroundColor: "#079f86",
    borderRadius: "50px",
    color: "white",
    padding: "5px 15px",
  },
  smallText: {
    display: "block",
    fontSize: "12px",
    fontWeight: "400",
    color: "gray",
  },
}

export default function Result() {
  const {
    selectedBrandCode,
    selectedVehicleType,
    selectedModel,
    selectedYear,
    searchedVehicleResult, setSearchedVehicleResult,
  } = useContext(SearchContext)

  useEffect(() => {
    if (selectedBrandCode && selectedModel && selectedYear) {
      fetchPrice(
        selectedVehicleType,
        selectedBrandCode,
        selectedModel,
        selectedYear,
        setSearchedVehicleResult
      )
    }
  }, [selectedBrandCode, selectedModel, selectedYear]);
  
  return (
    <Box style = {styled.containerResult}>
      <Typography variant="h2" style={styled.h2}>
        {`Tabela Fipe: Preço ${searchedVehicleResult?.Marca} ${searchedVehicleResult?.Modelo} ${searchedVehicleResult?.AnoModelo}`}
      </Typography>
      <Typography variant="h2" style={styled.price}>
        {searchedVehicleResult?.Valor}
      </Typography>
      <Typography variant="caption" style={styled.smallText}>
          Este é o preço de compra do veículo
      </Typography>
    </Box>
  )
}