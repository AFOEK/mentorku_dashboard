import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import { FilledInput, IconButton, InputAdornment, InputLabel, Input, Button } from "@mui/material";
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
        <div className="App=header">
            Mentorku
        </div>
        <div className="header_title">Login</div>
        <Box component="form" autoComplete="off">
            <div>
                <FormControl variant="filled" sx={{ m: 1, width: '25ch' }}>
                    <TextField required label="Telegram Username" id="txtbox-username" variant="filled"/>
                    <InputLabel htmlFor="txtbox-passwd">Password</InputLabel>
                    <FilledInput id="txtbox-passwd" type={showPasswd ? 'text' : 'password'} endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toogle password visibility"
                                onClick={handleClickShwPasswd}
                                onMouseDown={handleMouseDwnPasswd}
                                edge="end"> 
                                {showPasswd ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Button variant="outlined">Login</Button>
                </FormControl>
            </div>
        </Box>
        </>
    )
}