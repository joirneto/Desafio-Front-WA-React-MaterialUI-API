import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Alerts from '../../components/Alert';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,

  },
  boxOne: {
    padding: theme.spacing(2),
    marginTop: '1rem',
    marginBottom: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#ffffff',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  typoOne: {
    textAlign: 'center',
  },
  inputOne: {
    [theme.breakpoints.up('sm')]:{
      textAlign: 'center',
      width: '30%',
    marginBottom: '5rem'
    },
    textAlign: 'center',
    width: '100%',
    marginBottom: '5rem'
  },
  button: {
    [theme.breakpoints.up('md')]:{
      padding: theme.spacing(2),
    size: "25px",
    width: '30%',
    marginBottom: 2
    },
    padding: theme.spacing(2),
    size: "25px",
    width: '100%',
    marginBottom: 2
  }
}))

const Home = () => {
  const history = useHistory();
  const [num, setNum] = useState('');
  const [alertQuestionnaire, setAlertQuestionnaire] = useState(false)
  const [alert, setAlert] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    let existingQuestionnaire = localStorage.getItem('questions');
    if (existingQuestionnaire !== null) {
      setAlertQuestionnaire(true)
    }
  }, [])

  const onChange = evt => {
    const value = evt.target.value
    setNum(value)
  }

  const save = () => {
    if (num.length === 0 || isNaN(num)) {
      setAlert(true)
    } else {
   
      history.push({
          pathname: '/questions',
          search: `?num=${num}`
        }) 
    }
  }

  const pushQuestionnaire = () => {
    history.push('/report')
  }

  return (

    <div className={classes.root}>
      <Container fixed maxWidth='false' >
        <Box className={classes.boxOne}>
          <Typography variant="h4" component="div" className={classes.typoOne}>
            CHOOSE HOW MANY QUESTIONS YOU WANT TO ANSWER:
          </Typography>

          <TextField margin="normal" id="num" label="NUMBER OF QUESTIONS" variant="outlined" color="secondary"
            value={num} onChange={onChange} className={classes.inputOne} />

          <Button className={classes.button} size="large" variant="contained" onClick={save} >SUBMIT ANSWERS</Button>

          <Box sx={{ m: 1, width: "100" }} />

          {alertQuestionnaire && (
            <Button className={classes.button} size="large" variant="contained" onClick={pushQuestionnaire} >There is a questionnaire already carried out. Click here to see the fix.</Button>
          )}
          {alert && (
            <Alerts msg={'ENTER A VALID NUMBER'} />
          )}
        </Box>
      </Container>
    </div>

  )
}

export default Home