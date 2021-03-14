import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader,Avatar,} from '@material-ui/core/';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding:'5px 10px'

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    },
    avatar: {
      backgroundColor: 'skyblue',
    },
});

export default function UderCard({user}) {
  const classes = useStyles();

  const { name, address , email , website } = user;

  return (
  
    <Card className={classes.root} variant="outlined">
 <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name.slice(0,1)}
          </Avatar>
        }
        title={ name }
        subheader={email}
      />

      <CardContent>
        <Typography color="textSecondary" variant="subtitle1">
       
         {`Address: ${ address.street }, ${address.city}`}
          <br />
         
        </Typography>
        <Typography color="textPrimary" >
      
         {`Website: ${website}`} 
      </Typography>

      </CardContent>
    </Card>
  );
}
