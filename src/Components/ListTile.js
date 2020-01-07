import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: '10px',
    boxShadow: '1px 1px 3px 1px #CCC',
    margin: '10px auto',
    height: '400px',
    overflowY: 'auto'
  },
  inline: {
    display: 'inline',
  }
}));

export default function ListTile(props) {
  const classes = useStyles();

  return (
    <>
    <List className={classes.root}>
      

      {props.listData.map((publication, index) => (
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <MenuBookIcon />
        </ListItemAvatar>
        <ListItemText
          button component="a"  
          primary={publication.title_t}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {publication.publishDate_dt}
              </Typography>
              
            </React.Fragment>
          }
        />
      </ListItem>
      ))}
      <Divider variant="inset" component="li" />
    </List>
    </>
  );
}