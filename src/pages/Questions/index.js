import React, { useState } from "react";
import { getQuestions } from '../../lib/apiQuestions'


import { Radio, Button, Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Alerts from '../../components/Alert';
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'

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
    flexDirection: 'row',
    alignItems: 'center'
  },

  boxButtons: {
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#ffffff',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxForm: {
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
  boxQuestion: {
    marginBottom: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: '#ffffff',
    borderRadius: '16px',
  },
  boxAnswers: {
    background: '#ffffff',
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center'
  },
  typoOne: {
    textAlign: 'center',
  },
  inputOne: {
    textAlign: 'center',
  },
  button: {
    padding: theme.spacing(2),
    margin: '1rem',
    fontSize: "25px",
    width: '30%'
  }

}))

const Questions = () => {

  const [success, setSuccess] = useState(false)
  const [alert, setAlert] = useState(false)
  const [questions, setQuestions] = useState([]);
  const [questionsAnswersCorrects, setQuestionsAnswersCorrects] = useState({});
  const [form, setForm] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const num = query.get('num');

  const alertVerify = () => {
    setAlert(false)
  }

  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }

  const onClick = async () => {
    const { questionsConverted, questionsCorrects } = await getQuestions(num)
    setQuestions(questionsConverted)
    setQuestionsAnswersCorrects(questionsCorrects)
    setSuccess(true)
  }

  const controlProps = (item, question) => ({
    checked: form[question] === item,
    onChange: onChange,
    value: item,
    name: question,
    inputProps: { 'aria-label': item },
  });

  const save = () => {
    if (Object.keys(form).length !== questions.length) {
      setAlert(true)
    } else {
      localStorage.setItem('questions', JSON.stringify(questions),);
      localStorage.setItem('questionsCorrects', JSON.stringify(questionsAnswersCorrects));
      localStorage.setItem('questionsUser', JSON.stringify(form));
      history.push('/report')
      setAlert(false)
    }
    setTimeout(alertVerify, 3000)
  }

  return (
    <div className={classes.root}>
      <Container fixed maxWidth='false' className={classes.boxForm}>


        {!success && (
          <Box className={classes.boxButtons}>
            <Button size="large" variant="contained" className={classes.button} onClick={onClick} >START</Button>
            <Box sx={{ m: 1, width: "100" }} />
            <Button href='/' size="large" variant="contained" className={classes.button}  >CANCEL</Button>
          </Box>
        )}

        {success && (
          <Box sx={{
            boxShadow: 2,
            bgcolor: '#ffffff',

          }} className={classes.boxForm}>

            {questions.map((item, index) => {
              return (
                <Box key={index} name={index} className={classes.boxQuestion}>
                  <Typography component="h5">
                    <Box sx={{ fontWeight: 'bold', m: 1, fontSize: 'h5.fontSize' }} >{`Question ${index + 1}: `} {item.question}</Box>
                  </Typography>
                  {item.answers.map((ans, index) => {
                    return (
                      <Container key={index} name={index} >
                        <Box className={classes.boxAnswers}>
                          <Radio {...controlProps(ans, item.question)} />
                          <Typography component="h6">
                            <Box sx={{ fontWeight: 'ligth', m: 1, fontSize: 'h6.fontSize' }} >{ans}</Box>
                          </Typography>
                        </Box>
                      </Container>
                    )
                  })}
                </Box>

              )
            })}

          </Box>
        )}

        {success && (
          <Box className={classes.boxAnswers}>
            <Button size="large" variant="contained" className={classes.button} onClick={save} >SUBMIT ANSWERS</Button>
          </Box>
        )}

        {alert && (
          <Box className={classes.boxAnswers}>
            <Alerts msg={'All questions have to be answered'} />
          </Box>
        )}

      </Container>

    </div>
  )
};

export default Questions;