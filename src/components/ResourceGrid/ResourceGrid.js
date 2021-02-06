import React from 'react';
import { Card, Grid, CardContent, CardActions, CircularProgress, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import firebase from '../../firebase';


const useStyles = makeStyles({
    resourceContainer:{
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    }
})

const getResourceCard = (resource) => {
    return (
        <Grid item xs={12} sm={6}>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {resource.program_name}
                    </Typography>
                    <Typography  color="textSecondary" gutterBottom>
                        A program of {resource.org_name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {resource.program_description}
                    </Typography>
                    <Typography  color="textSecondary">
                        <br />
                        {resource.program_website}
                    </Typography>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>    
                </CardContent>
            </Card>
        </Grid>
    )
}


const ResourceGrid = ({isLoading, resources}) => {
    const classes = useStyles();

    return (
        <Grid container justify="center">
        { isLoading ? (
            <Grid item className={classes.resourceContainer}>
            <CircularProgress />
            </Grid>

            ) : (
                <Grid container spacing={2} className={classes.resourceContainer}>
                    {resources.map((resource) =>(
                        getResourceCard(resource)
                    )
                    )}

                </Grid>

            )}
        </Grid>
       
    )
}

export default ResourceGrid;