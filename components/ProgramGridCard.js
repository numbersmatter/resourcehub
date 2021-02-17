


import Link from 'next/link';
import { Card, Grid, CardContent, CardActions, Typography, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';
// import firebase from '../../firebase';




export default function ProgramGridCard({ programs }) {
    return (
        <Grid container spacing={4} justify='center'>

        {programs ? programs.map((program) => <ProgramCard program={program} key={program.externalId} />) : null}
        </Grid>
    )

}



function ProgramCard({ program }){
    return (
        <Grid  item xs={12} sm={6}>
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {program.name}
                    </Typography>
                    <Typography  color="textSecondary" gutterBottom>
                        A program of {program.organizationName}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {program.description}
                    </Typography>
                    <Typography  color="textSecondary">
                        <br />
                        {program.referral.website}
                    </Typography>
                    <CardActions>
                        <Link href={`/programs/${program.externalId}`}>
                            <Button variant="outlined" >Learn More</Button>
                            
                        </Link>
                    </CardActions>    
                </CardContent>
            </Card>
        </Grid>

    )
}
