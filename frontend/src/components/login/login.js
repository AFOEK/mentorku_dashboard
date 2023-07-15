import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FilledInput, IconButton, InputAdornment, InputLabel } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Visibility } from "@mui/icons-material";


export default function Login(){

    const [showPasswd, setShowPasswd] = React.useState(false);
    const handleClickShwPasswd = () => setShowPasswd((show) => !show);
    const handleMouseDwnPasswd = (event) => {
        event.preventDefault();
    };

    return(
        <>
        <title>Login</title>
        <div className="header_title">Login</div>
        <Box component="form">
            <div>
                <TextField required label="Telegram Username" id="txtbox-username" variant="filled"/>
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput id="filled-adornment-password" type={showPasswd ? 'text' : 'password'} endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="password visibility"
                            onClick={handleClickShwPasswd}
                            onMouseDown={handleMouseDwnPasswd}
                            edge="end"
                            > 
                            {showPasswd ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                } 
            />
            </div>
        </Box>
        </>
    )
}