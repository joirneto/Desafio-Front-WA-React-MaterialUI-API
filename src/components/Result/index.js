import React from "react";
import { calcWidthCss } from '../../lib/calcWidthCss'
import { Radio, TextField, Link, Button, Box, Toolbar, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

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
      fontSize: "1.5rem",
      background: '#a5d6a7',
  
  
    },
  
    error: {
      margin: '1',
      fontSize: "1.3rem",
      background: '#ff8a65',
  
  
    },
  
  
  }))

const Result = ({ total, right, errors }) => {
    const classes = useStyles();

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        margin: 5,
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.primary.main,
        },
    }));

    const BorderLinearProgressRigth = styled(LinearProgress)(({ theme }) => ({
        margin: 5,
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#a5d6a7',
        },
    }));

    const BorderLinearProgressError = styled(LinearProgress)(({ theme }) => ({
        margin: 5,
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#ff8a65',
        },
    }));


    return (
        <Box sx={{
            width: '50%', boxShadow: 3, bgcolor: '#ffffff', padding: 3

        }}>
            <Box className={classes.quiz}>CORRECTION </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'

            }}>
                <Box className={classes.titleCorretions}>All Questions </Box>
                <Box className={classes.titleCorretions}>{total}</Box>
            </Box>
            <BorderLinearProgress variant="determinate" value={100} />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'

            }}>
                <Box className={classes.titleCorretions}>RIGHTS </Box>
                <Box className={classes.titleCorretions}>{`${right}/${total}`}</Box>
            </Box>
            <BorderLinearProgressRigth variant="determinate" value={right / total * 100} />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'

            }}>
                <Box className={classes.titleCorretions}>ERRORS </Box>
                <Box className={classes.titleCorretions}>{`${errors}/${total}`}</Box>
            </Box>
            <BorderLinearProgressError variant="determinate" value={(errors) / total * 100} />

        </Box>
    )
}

export default Result;