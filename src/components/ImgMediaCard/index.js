import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextareaAutosize } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        maxWidth: 1200,
        minHeight: 350
    },
});

export default function ImgMediaCard(props) {
    const {
        category,
        date,
        img_url,
        source_id,
        source_name,
        title,
        url
    } = props.data;
    console.log(props);
    console.log(source_name);
    const classes = useStyles();
    const img = img_url ? img_url : "/img.jpg"
    return (
        <Card className={classes.root}>
            <a target="_blank" href={url}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={title}
                        height="140"
                        image={img}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {source_name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                </Button>
                    <Button size="small" color="primary">
                        Learn More
                </Button>
                </CardActions>
            </a>
        </Card>
    );
}
