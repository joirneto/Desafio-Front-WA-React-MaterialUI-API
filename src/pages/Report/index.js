import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import Result from "../../components/Result";

import { Radio, Button, Box, Typography, Container } from '@mui/material';

import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    background: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'

  },

  quiz: {
    color: theme.palette.secondary.main,
    fontSize: '2.5rem'
  },
  titleCorretions: {
    color: theme.palette.grey[500],
    fontSize: '1.5rem'
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
  },
  correct: {
    margin: '1',
    fontSize: "1.3rem",
    background: '#00e676',

    borderRadius: '0.2rem',


  },

  error: {
    margin: '1',
    fontSize: "1.3rem",
    background: '#f44336',
    borderRadius: '0.2rem',


  },


}))





const Report = () => {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  const [questionsCorrects, setQuestionsCorrects] = useState([]);
  const [questionsUser, setQuestionsUser] = useState([]);
  const [hits, setHits] = useState();

  const classes = useStyles();

  function correct(questions, questionsCorrects, questionsUser) {
    let i = 0;
    questions.forEach(item => {
      if (questionsCorrects[item.question] === questionsUser[item.question]) {
        i++
      }
    })
    return i;
  }

  const save = () => {
    history.push('/');
  }

  const controlProps = (item, question) => ({
    checked: questionsUser[question] === item,
    //  onChange: onChange,
    disabled: true,
    value: item,
    name: question,
    inputProps: { 'aria-label': item },
  });

  useEffect(() => {
    let questionsTemp = localStorage.getItem('questions');
    let questionsCorrectsTemp = localStorage.getItem('questionsCorrects');
    let questionsUserTemp = localStorage.getItem('questionsUser');
    if (questionsTemp !== null) {
      questionsTemp = JSON.parse(questionsTemp);
      questionsCorrectsTemp = JSON.parse(questionsCorrectsTemp);
      questionsUserTemp = JSON.parse(questionsUserTemp);

      setQuestions(questionsTemp);
      setQuestionsCorrects(questionsCorrectsTemp);
      setQuestionsUser(questionsUserTemp);
      setHits(correct(questions, questionsCorrects, questionsUser))
    }
    else {
      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hits]);

  return (
    <div className={classes.root}>

      <Container fixed maxWidth='false' className={classes.boxForm}>
        <Box className={classes.boxAnswers}>
          <Result total={questions.length} right={hits} errors={questions.length - hits} />
        </Box>

        <Box sx={{
          boxShadow: 2,
          bgcolor: '#ffffff',

        }} className={classes.boxForm}>



          {questions.map((item, index) => {
            return (
              <Box key={index} name={index} className={classes.boxQuestion}>
                <Typography component="h5">
                  <Box key={index} name={index} sx={{ fontWeight: 'bold', m: 1, fontSize: 'h5.fontSize' }} >{`Question ${index + 1}: `} {item.question}</Box>
                </Typography>
                {item.answers.map((ans, index) => {
                  return (
                    <Container key={index} name={index} >
                      <Box className={classes.boxAnswers}>
                        <Radio {...controlProps(ans, item.question)} />
                        <Typography component="h6">
                          <Box key={index} name={index} className={questionsCorrects[item.question] === ans ? classes.correct : classes.error} >{ans}</Box>
                        </Typography>
                      </Box>
                    </Container>
                  )
                })}

              </Box>

            )
          })}

        </Box>
        <Box className={classes.boxAnswers}>
          <Button onClick={save} size="large" variant="contained" className={classes.button} >RETURN</Button>
        </Box>
      </Container>

    </div>
  )
};

export default Report;