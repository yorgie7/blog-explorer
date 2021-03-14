import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import '../App.js';

const useStyles = makeStyles({
  root: {
    maxWidth: '70vw', height: '300px',
    margin: '50px 20px',
  },
  title: {
    margin: "10px", padding: '0 10vw'
  },
  body: {
    padding: '15vh 5vh'
  },
  back: {
    margin: '10vh 0 0 0'
  }

});


export default function PostDetails(props) {
  const [state, setState] = useState({postData:{} , userData: {}});
  // const [userData, setUserData] = useState({});
  const { blog_id } = props.match.params;

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`https://jsonplaceholder.typicode.com/posts?id=${blog_id}`);
      const user = await axios(`https://jsonplaceholder.typicode.com/users?id=${result.data[0].userId}`);
    
      await setState({postData : result.data[0], userData: user.data[0]});
    }

    fetchData();
  }, [blog_id]);

  const classes = useStyles();

  const toUpperCase = (loginStr) => {
    return loginStr.toUpperCase().slice(0, 1) + loginStr.slice(1);
  }
  // console.log(userData)
  return (
    <div className="PostDetails">
      <Card className={classes.root}>
        <CardActionArea >

          <CardContent >
            <Typography gutterBottom variant="subtitle1" component="h3" className={classes.title}>
              {state.postData.title && toUpperCase(state.postData.title)}
            </Typography>
            <Typography variant="body2" color="textSecondary" height='500px' component="h3" className={classes.title}>
              {state.postData.body && toUpperCase(state.postData.body)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Grid>
          <Typography variant="body1" color="primary" component="p">
            {state.userData.name}
          </Typography>


          <Button size="small" color="primary" className={classes.back}>
            <Link to="./">Back to Blogs </Link>
          </Button>

        </Grid>
      </Card>
    </div>
  );
}



