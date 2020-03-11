import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import * as Actions from '../store/Actions/Actions';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: '1rem',
    },
    title: {
        flexGrow: 1,
    },
}

function Navbar({classes, theme, dispatch}){
    return (
        <AppBar position="static" style={{backgroundColor: theme ? 'white' : '#1976d2'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Switch
                value="checkedB"
                color="primary"
                color='secondary'
                onClick={() => dispatch(Actions.toggleTheme())}
            />
          </IconButton>
          <Typography variant="h6" className={classes.title} style={{color: theme ? 'black' : 'white'}}>
            {theme ? 'dark mode' : 'light mode'}
          </Typography>
          <Button style={{color: theme ? 'black' : 'white'}}>Login</Button>
        </Toolbar>
      </AppBar>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        theme: state.Theme
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Navbar));