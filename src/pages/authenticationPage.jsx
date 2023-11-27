import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useNavigate } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import { QueryClientProvider, QueryClient } from "react-query"
import Typography from '@mui/material/Typography';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth"
import { auth } from '../firebase-config'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 360000,
            refetchInterval: 360000,
            refetchOnWindowFocus: false
        },
    },
})

export default function LoginOrSignupPage() {
    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [user, setUser] = useState({});
    const [loginError, setLoginError] = useState(null);
    const [registerSuccess, setRegisterSuccess] = useState(null);



    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
            console.log(user);
            setRegisterSuccess("Account successfully created!");
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
            setLoginError(error.message);
        }
    };
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setLoginError(null);
    };

    const logout = async () => {
        await signOut(auth);
    };

    const handleRegisterClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
    
        setRegisterSuccess(null);
    };
    

    return (
        <Grid>
            <Box className="App" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                {user ? (
                     <>
                        <Typography variant="h6" sx={{ marginBottom: '1rem' }}> User Logged In: {user.email} </Typography>
                         <Button variant="contained" color="secondary" onClick={logout}> Sign Out </Button>
                    </>
                ):(
                    <>
                    <Typography variant="h4" sx={{ marginBottom: '2rem' }}> Register User </Typography>
                    <TextField
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                        sx={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                        sx={{ marginBottom: '1rem' }}
                    />
        
                    <Button variant="contained" color="primary" onClick={register}> Create User</Button>

                    <Snackbar open={registerSuccess !== null} autoHideDuration={6000} onClose={handleRegisterClose}>
                        <Alert onClose={handleRegisterClose} severity="success" sx={{ width: '100%' }}>
                            {registerSuccess}
                        </Alert>
                    </Snackbar>
    
                    <Typography variant="h4" sx={{ marginBottom: '1rem', marginTop:'2rem' }}> Login </Typography>
                    <TextField
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                        sx={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        placeholder="Password..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                        sx={{ marginBottom: '1rem' }}
                    />
        
                    <Button variant="contained" color="primary" onClick={login}> Login</Button>
                    <Snackbar open={loginError !== null} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                            Invalid email or password!
                        </Alert>
                    </Snackbar>
                </>
                )}
                    {/* <Typography variant="h4" sx={{ marginBottom: '2rem' }}> Register User </Typography>
                    <TextField
                        placeholder="Email..."
                        onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                        sx={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        placeholder="Password..."
                        onChange={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                        sx={{ marginBottom: '1rem' }}
                    />
        
                    <Button variant="contained" color="primary" onClick={register}> Create User</Button>

                    <Snackbar open={registerSuccess !== null} autoHideDuration={6000} onClose={handleRegisterClose}>
                        <Alert onClose={handleRegisterClose} severity="success" sx={{ width: '100%' }}>
                            {registerSuccess}
                        </Alert>
                    </Snackbar>

        
                    <Typography variant="h4" sx={{ marginBottom: '1rem' }}> Login </Typography>
                    <TextField
                        placeholder="Email..."
                        onChange={(event) => {
                            setLoginEmail(event.target.value);
                        }}
                        sx={{ marginBottom: '1rem' }}
                    />
                    <TextField
                        placeholder="Password..."
                        onChange={(event) => {
                            setLoginPassword(event.target.value);
                        }}
                        sx={{ marginBottom: '1rem' }}
                    />
        
                    <Button variant="contained" color="primary" onClick={login}> Login</Button>

        
                <Typography variant="h6" sx={{ marginBottom: '1rem' }}> User Logged In: {user?.email} </Typography>
        
                <Button variant="contained" color="secondary" onClick={logout}> Sign Out </Button>
                <Snackbar open={loginError !== null} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        Invalid email or password!
                </Alert>
            </Snackbar> */}
            </Box>
        </Grid>
    )
}