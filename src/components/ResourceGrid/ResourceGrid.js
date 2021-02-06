import React, { useState } from 'react';
import { Card, Grid, CardContent, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles({
    resourceContainer:{
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    }
})

const getResourceCard = () => {
    return (
        <Grid item xs={12} sm={6}>
            <Card>
                <CardContent>
                   Hello    
                </CardContent>
            </Card>
        </Grid>
    )
}


const ResourceGrid = () => {
    const classes = useStyles();
    const [resourceData, setResourceData] = useState();

    return (
        <Grid container justify="center">
        { resourceData ? (
                <Grid container spacing={2} className={classes.resourceContainer}>
                    {getResourceCard()}
                    {getResourceCard()}
                    {getResourceCard()}
                    {getResourceCard()}
                    {getResourceCard()}
                    {getResourceCard()}

                </Grid>

            ) : (
                <Grid item className={classes.resourceContainer}>
                <CircularProgress />
                </Grid>
            )}
        </Grid>
       
    )
}

export default ResourceGrid;