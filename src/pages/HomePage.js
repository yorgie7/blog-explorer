import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Box, Link, Avatar, Card } from '@material-ui/core/';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 400,
    alignItems: "center",
    maxWidth: "100%"
  },
  card: {
    paddingTop: '20%',
    justifyContent: 'center',
    height: 200,
    width: 230,
  },
  avatar: {
    margin: '0 30% 20% 30%',
    backgroundColor: theme.palette.secondary.main,
    height: 90,
    width: 90,
  },
})
);

export default function HomePage() {
  const spacing = 2;
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing} >

          <Grid item>
            <Card className={classes.card}>
              <Avatar className={classes.avatar}>
                <PeopleOutlineOutlinedIcon />
              </Avatar>
              <Box component="span" m={10}>
                <Button varient='outlined' color='primary'>
                  <Link varient='outlined' color='primary' href='/users/'>
                    Users
                  </Link>
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item>
            <Card className={classes.card}>
              <Avatar className={classes.avatar}>
                <SpeakerNotesIcon />
              </Avatar>
              <Box component="span" m={10}>
                <Button><Link href='./blogs/'>Blogs</Link></Button>
              </Box>
            </Card>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}