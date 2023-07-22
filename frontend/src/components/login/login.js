import React, { useState } from "react";
import axios from "axios";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, Button } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Visibility } from "@mui/icons-material";


export default function Login(){

    const [showPasswd, setShowPasswd] = useState(false);
    const handleClickShwPasswd = () => setShowPasswd((show) => !show);
    const [loginCreds, setloginCreds] = useState({
        username: "",
        passwd: ""
    })

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.post('/login', loginCreds).then(response => {
            console.log(response.data);
        }).catch(error => {
            console.error('Error:', error);
        });
    };

    function handleChange(event) {
        const {value, name} = event.target
        setloginCreds(prevLogin => ({
            ...prevLogin, [name]: value  
        }))
    }

    return(
        <>
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
        </HelmetProvider>
        <div className="header-title-form">Login</div>
        <Box className="boxfrm" component="form" autoComplete="off" display="flex" flexDirection="column" justifyContent="center-evenly" alignItems="center" ml={-35} onSubmit={handleSubmit}>
                <TextField required name="username" className="txtbox txtbox-username" label="Telegram Username" text={loginCreds.username} variant="filled" value={loginCreds.username} onChange={handleChange}/>
                <Box marginTop={2}/>
                <TextField
                required
                className="txtbox txtbox-passwd"
                label="Password"
                variant="filled"
                text={loginCreds.passwd}
                type={showPasswd ? 'text' : 'password'}
                value={loginCreds.passwd}
                onChange={handleChange}
                name="passwd"
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={handleClickShwPasswd} edge="end">
                        {showPasswd ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
                <Box marginTop={3.5}/>
                <Button name="submit" className="submit-btn" variant="outlined" onClick={handleSubmit} sx={{ maxWidth: '25vw', minWidth: '25vw' }}>Login</Button>
        </Box>
        </>
    )
}