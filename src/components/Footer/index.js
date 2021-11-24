import React from "react";
import { Link, Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
  home: {
    padding: theme.spacing(1),
    textTransform: "uppercase"
  },
  autor: {
    padding: theme.spacing(1),
  }
}))

const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth='false' className={classes.root}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" component="div" className={classes.home} >
          &copy; wa-front.vercel.app
        </Typography>
        <Typography variant="h6" component="div" className={classes.autor}>
          Projeto desenvolvido por:
          Joir Neto / {' '}
          <Link href="https://linkedin.com/in/joir-neto" underline="hover" color="inherit" >
            Linkedin
          </Link> / {' '}
          <Link href="https://github.com/joirneto" underline="hover" color="inherit">
            Github
          </Link>
        </Typography>
      </Box>
    </Container>
  )
};

export default Footer;

