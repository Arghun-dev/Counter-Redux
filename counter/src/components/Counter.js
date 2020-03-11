import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import * as Actions from '../store/Actions/Actions';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const styles = {
    Container: {
        padding: '2rem',
        height: '100vh'
    },

    innerContainer: {
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}



function Counter({classes, count, theme, dispatch}){
    function renderColor(){
        if(count >= 0 && count < 2){
            return '#ffeb3b'
        } else if(count >= 2 && count < 4){
            return '#fff176'
        } else if(count >= 4 && count < 6){
            return '#f4ff81'
        } else if(count >= 6 && count < 8){
            return '#eeff41'
        } else if(count >= 8 && count < 10){
            return '#c6ff00'
        } else if(count >= 10 && count < 12){
            return '#b2ff59'
        } else if(count >= 12 && count < 14){
            return '#76ff03'
        } else if(count >= 14){
            return '#64dd17'
        } else if(count < 0 && count >= -2){
            return '#fdd835'
        } else if(count < -2 && count >= -4){
            return '#fbc02d'
        } else if(count < -4 && count >= -6){
            return '#f9a825'
        } else if(count < -6 && count >= -8){
            return '#f57f17'
        } else if(count < -8){
            return '#e65100'
        }   
    }
    return (
        <Grid item xs={12}>
          <Paper className={classes.Container} style={{backgroundColor: theme ? 'black' : 'white'}}>
            <Grid item xs={6} className={classes.innerContainer}>
                <h1 style={{textAlign: 'center', color: theme ? 'white' : 'black'}}>Redux Counter</h1>
                <Paper style={{padding: '2rem'}}>
                    <h1 style={{textAlign: 'center', color: renderColor()}}>{count}</h1>
                    <div style={{textAlign: 'center', marginTop: '2rem'}}>
                        <Button 
                            variant="contained" 
                            style={{backgroundColor: '#4caf50', marginRight: '.5rem'}} 
                            onClick={() => dispatch(Actions.increase())}
                        >
                            <ExpandLessIcon />
                        </Button>
                        <Button 
                            variant="contained" 
                            color='secondary' 
                            onClick={() => dispatch(Actions.decrease())}
                            style={{marginLeft: '.5rem'}}
                        >
                            <ExpandMoreIcon />
                        </Button>
                    </div>
                </Paper>
            </Grid>
          </Paper>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        count: state.Count,
        theme: state.Theme
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Counter));