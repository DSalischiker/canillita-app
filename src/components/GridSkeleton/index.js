import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from '../ImgMediaCard';
import Skeleton from '@material-ui/lab/Skeleton';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function GridSkeleton(props) {


    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Skeleton variant="rect" width={1200} height={250} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Skeleton variant="rect" width={210} height={250} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Skeleton variant="rect" width={210} height={250} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={3}><Skeleton variant="rect" width={210} height={250} style={{ width: '100%' }} /></Grid>
                <Grid item xs={12} sm={3}><Skeleton variant="rect" width={210} height={250} style={{ width: '100%' }} /></Grid>
                <Grid item xs={12} sm={3}><Skeleton variant="rect" width={210} height={250} style={{ width: '100%' }} /></Grid>
                <Grid item xs={12} sm={3}><Skeleton variant="rect" width={210} height={250} style={{ width: '100%' }} /></Grid>
            </Grid>
            {/* {otherNews.map((noticia) => <Grid item xs={6} sm={3}>

                    <Skeleton variant="rect" width={210} height={118} />
                </Grid>)} */}



        </div >
    );
}
