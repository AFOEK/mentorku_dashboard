import * as React from "react";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import { IconButton, InputAdornment, Button } from "@mui/material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Visibility } from "@mui/icons-material";


export default function Login(){

    const [showPasswd, setShowPasswd] = React.useState(false);
    const handleClickShwPasswd = () => setShowPasswd((show) => !show);

    return(
        <>
        <Helmet><title>Login</title></Helmet>
        <div className="header-title-form">Login</div>
        <Box className="boxfrm" component="form" autoComplete="off" display="flex" flexDirection="column" justifyContent="center-evenly" alignItems="center" ml={-35}>
            <FormControl className="frmCtrl" variant="filled" sx={{ m: 1, width: '25ch' }}>
                <TextField required className="txtbox txtbox-username" label="Telegram Username" variant="filled"/>
                <Box marginTop={2}/>
                <TextField
                required
                className="txtbox txtbox-passwd"
                label="Password"
                variant="filled"
                type={showPasswd ? 'text' : 'password'}
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
                <Button className="submit-btn" variant="outlined"sx={{ maxWidth: '25vw', minWidth: '25vw' }}>Login</Button>
            </FormControl>
        </Box>
        </>
    )
}