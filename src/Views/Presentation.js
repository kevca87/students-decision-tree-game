import { Box, Typography } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";

function Title() {
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        navigate('/');
    }
    let congratulationsMessage = "Predecimos tu futuro con AI 🌳🔮";
    return (
        <Box sx={{margin:10, display:'flex',flexDirection:'column',alignItems: 'center'}}>
        <Typography variant='h1' color="#1f2329" textAlign='center'>
            {congratulationsMessage}
        </Typography>
        <Button variant="contained" onClick={handleFormSubmit}>
        <Typography variant='h3' textAlign='center'>
        Comenzar
        </Typography>
        </Button>
        </Box>
    );
}

export default Title;