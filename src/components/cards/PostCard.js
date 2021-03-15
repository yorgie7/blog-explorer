import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
  title: { 
    minHeight : '40px', margin: '10px 10px'
   },
  name: { 
    minWidth: '10vw', marginRight: 'auto'
   },
    
   button: {
   minWidth: 'fit-content'
  },
  footer: {
    padding: '10px 20px'
  },
  body: {
   minHeight:"100px",
   padding: '0px 20px'
  }
});


export default function PostCard(props) {
  const [state, setState] = useState({})
  const history = useHistory();
  const { id, userId, title, body } = props.post;
  const classes = useStyles();

  const getUppercase = (loginStr) => {
    return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
  }

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
      await setState(...result.data);
    }
    fetchData();

  }, [id, userId]);

  function handleClick() {
    history.push(`/blogs/${id}`);
  }



  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea className={classes.card}>
        <CardContent className={classes.body}>
          <Typography gutterBottom variant="body1" height='' component="p" className={classes.title}>
            {getUppercase(title)}
          </Typography>

          <Typography variant="body2" color="textSecondary" component="p" className={classes.body} >
            {getUppercase(body)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.footer}>
        <Typography variant="body1" color="primary" component="p">
          Author:
          </Typography>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.name}>
          {state && state.name}
        </Typography>
        <Button size="small" color="primary" onClick={handleClick} className={classes.button}>
          SEE MORE
        </Button>

      </CardActions>
    </Card>
  );
}
