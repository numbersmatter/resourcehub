import {Grid, Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import Link from 'next/link';


// UI component for program infor profile

export default function ProgramInfoCard({ programs }) {
    return (
        <Grid container spacing={2} justify='center'>

        {programs ? programs.map((program) => <ProgramInfo program={program} key={program.externalId} />) : null }
        </Grid>
    )
    
    
}

function ProgramInfo({ program }) {
    return (
        <Grid item xs={12} >
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {program.name}
                </Typography>
                <Typography  color="textSecondary" gutterBottom>
                    A program of {program.organizationName}
                    <br />
                </Typography>
                <Typography variant='subtitle2'>
                    Program Description:
                </Typography>
                
                <Typography variant="body2" component="p">
                    {program.description}
                </Typography>
                <br />
                <Typography variant='subtitle2'>
                    Program Eligibility:
                </Typography>
                <Typography variant="body2" component="p">
                    {program.program_eligibility}
                    
                </Typography>
                <br />
                <Typography variant='subtitle2'>
                    Referral Process:
                </Typography>
                <Typography variant="body2" component="p">
                    {program.referral.process}
                   
                </Typography>
                <br />
                <Typography variant='subtitle2'>
                    Referral Contact:
                </Typography>
                <Typography variant="body2" component="p">
                    {program.referral.contact}
                    
                </Typography>
                <br />
                <Typography variant='subtitle2'>
                    Referral Email:
                </Typography>
                <Typography variant="body2" component="p">
                    {program.referral.email}
                    
                </Typography>
                <br />
                <Typography variant='subtitle2'>
                    Referral Phone:
                </Typography>
                <Typography variant="body2" component="p">
                    {program.referral.phone}
                    
                </Typography>
                <br />

                <Typography  color="textSecondary">
                    <br />
                    {program.referral.website}
                    <br />
                </Typography>
                <CardActions>
                    <Link href="/programs" >Back</Link>
                </CardActions>    
            </CardContent>
        </Card>
    </Grid>

    )
}