import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { Button } from '@mui/material';
import FormContainer from '../Components/FormContainer';
import axios from 'axios'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';

function PredictionForm() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        carrer: '',
        daysBeforeStart: 0
    });
    const carrerOptions = [
        "Ing. Química",
        "Ing. de Sistemas",
        "Contaduría Pública",
        "Derecho",
        "Ing. de Telecomunicaciones",
        "Administración de Empresas",
        "Comunicación Social",
        "Ing. Comercial",
        "Ing. Medio Ambiental",
        "Ing. Industrial",
        "Filosofía y Letras",
        "Psicología",
        "Ing. Financiera",
        "Ing. Mecatrónica"
    ];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
        }));
        
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formValues)
        navigate('/prediction',{'state':formValues});
    }
    let sxInput = {my:2}
    return (
        <Box>
            <FormContainer title="Mis decisiones">
                <TextField fullWidth
                    id="outlined-number"
                    label="¿Con cuantos días de anticipación te inscribiste o inscribiras?"
                    type="number"
                    name='daysBeforeStart'
                    value={formValues.daysBeforeStart}
                    onChange={handleChange}
                />
                <FormControl fullWidth sx={sxInput}>
                    <InputLabel id="carrer-label">Carrera</InputLabel>
                    <Select labelId="carrer-label" id="carrer" name={"carrer"} value={formValues.carrer} label="Carrera" onChange={handleChange}>
                        {
                            carrerOptions.map((c)=>{
                                return (<MenuItem value={c}>{c}</MenuItem>);
                            })
                        }
                    </Select>
                </FormControl>
                <Box sx={{display: 'inline'}}>
                        <Button variant="contained" onClick={handleFormSubmit} disableElevation>
                        Predice mi futuro
                        </Button>
                </Box>
            </FormContainer>
        </Box>
    );
}
export default PredictionForm;