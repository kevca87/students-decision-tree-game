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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function PredictionForm() {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        carrer: '',
        daysBeforeStart: 0,
        age:18
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
        <Box sx={{display:'flex',justifyContent: 'center'}}>
            <Box sx={{width:0.70}}>
            <FormContainer title="Mis decisiones">
                <TextField fullWidth
                    sx={sxInput}
                    id="outlined-number"
                    label="¿Con cuántos días de anticipación te inscribiste o inscribirás?"
                    type="number"
                    name='daysBeforeStart'
                    value={formValues.daysBeforeStart}
                    onChange={handleChange}
                />
                <TextField fullWidth
                    sx={sxInput}
                    id="outlined-age"
                    label="¿Qué edad tienes?"
                    type="number"
                    name='age'
                    value={formValues.age}
                    onChange={handleChange}
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} fullWidth>
                    <TimePicker label="¿A qué hora comienza tu clase?" sx={{width:1}}/>
                </LocalizationProvider>
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
                <FormControl fullWidth sx={sxInput}>
                <FormLabel id="demo-radio-buttons-group-label">¿Estás repitiendo la materia?</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="no"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="si" control={<Radio />} label="Si" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
                <Box sx={{display: 'inline'}}>
                        <Button variant="contained" onClick={handleFormSubmit} disableElevation>
                        Predice mi futuro
                        </Button>
                </Box>
            </FormContainer>
        </Box>
        </Box>
    );
}
export default PredictionForm;