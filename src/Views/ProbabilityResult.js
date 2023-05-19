import { Box, Typography } from "@mui/material";
import { useLocation } from 'react-router-dom';

function formatAsPercentage(num) {
    return new Intl.NumberFormat('default', {
      style: 'percent'
    }).format(num / 100);
}

function aprove(formAnswers){
    let answer = 'Si';
    formAnswers['daysBeforeStart'] = parseInt(formAnswers['daysBeforeStart']);
    if(formAnswers['daysBeforeStart']>3){
        answer = 'Si, felicidades #KeepGoing';
    }
    else{
        answer = 'Tienes todo en tu contra. #CreoEnLaRemontada!'
    }
    return answer;
}

function ProbabilityResult() {
    let probability = 50;
    let congratulationsMessage = "¿Aprobarás tus materias?";
    let finalRecomendations = ["Recomendation 1"];
    const location = useLocation();
    const formAnswers = location.state;
    let studentAprove = aprove(formAnswers);
    let variant = 'h2'
    return (
        <Box>
        <Typography variant='h3' color="#1f2329">
            {congratulationsMessage}
        </Typography>
        <Typography variant={variant} color="#1f2329">
            {studentAprove}
        </Typography>
        </Box>
    );
}

export default ProbabilityResult;