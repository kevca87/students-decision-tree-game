import { Box, Typography } from "@mui/material";

function formatAsPercentage(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent'
    }).format(num / 100);
}

function ProbabilityResult() {
    let probability = 50;
    let congratulationsMessage = "Probabilidad de aprobar tus materias";
    let finalRecomendations = ["Recomendation 1"];
    return (
        <Box>
        <Typography variant='h3' color="#1f2329">
            {congratulationsMessage}
        </Typography>
        <Typography variant='h1' color="#1f2329">
            {formatAsPercentage(probability)}
        </Typography>
        </Box>
    );
}

export default ProbabilityResult;