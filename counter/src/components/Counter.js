import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/styles';

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

function Counter({classes}){
    return (
        <Grid item xs={12}>
          <Paper className={classes.Container}>
            <Grid item xs={6} className={classes.innerContainer}>
                <h1 style={{textAlign: 'center'}}>Redux Counter</h1>
                <Paper style={{padding: '2rem'}}>
                    <h1 style={{textAlign: 'center'}}>Count</h1>
                </Paper>
            </Grid>
          </Paper>
        </Grid>
    )
}

export default withStyles(styles)(Counter);