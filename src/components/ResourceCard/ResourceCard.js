import React from 'react';
import { Card, Grid, CardContent, CardActions, Typography, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
// import firebase from '../../firebase';




const ResourceCard = ({ resource }) => {
    

    return (
        <Grid  item xs={12} sm={6}>
            <Card >
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
                        <Button variant="contained" size="small" href = {`/programs/${resource.programID}`} >Learn More</Button>
                    </CardActions>    
                </CardContent>
            </Card>
        </Grid>

    )
}

export default ResourceCard;