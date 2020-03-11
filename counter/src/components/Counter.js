import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import * as Actions from '../store/Actions/Actions';

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

function Counter({classes, count, dispatch}){
    console.log(dispatch)
    return (
        <Grid item xs={12}>
          <Paper className={classes.Container}>
            <Grid item xs={6} className={classes.innerContainer}>
                <h1 style={{textAlign: 'center'}}>Redux Counter</h1>
                <Paper style={{padding: '2rem'}}>
                    <h1 style={{textAlign: 'center'}}>{count}</h1>
                    <button onClick={() => dispatch(Actions.increase())}>+</button>
                    <button onClick={() => dispatch(Actions.decrease())}>-</button>
                </Paper>
            </Grid>
          </Paper>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        count: state.Count
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Counter));