import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ImgMediaCard from '../ImgMediaCard';



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

export default function FullWidthGrid(props) {
    const { data } = props;
    const [first, second, third, ...otherNews] = data
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ImgMediaCard data={first} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImgMediaCard data={second} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ImgMediaCard data={third} />
                </Grid>
                {otherNews.map((noticia) => <Grid key={noticia.news_id} item xs={6} sm={3}>

                    <ImgMediaCard data={noticia} />
                </Grid>)}


            </Grid>
        </div>
    );
}
