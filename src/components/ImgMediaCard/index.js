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
import Icon from '@material-ui/core/Icon';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
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
    const { height } = props;
    const classes = useStyles();
    const img = img_url ? img_url : "/img.jpg"
    return (
        <Card className={classes.root}>
            <a target="_blank" href={url}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={title}
                        height={height}
                        image={img}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom color="textSecondary" variant="body2" component="p">
                            {source_name}
                        </Typography>
                        <Typography variant="body1" component="p" className="content-p">
                            {title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        <a target="_blank" href={`http://twitter.com/share?text=${title}&url=${url}`}><TwitterIcon /></a>
                    </Button>
                    <Button size="small" color="primary">
                        <a target="_blank" href={`http://api.whatsapp.com/send?text=${url}`}><WhatsAppIcon /></a>
                    </Button>
                </CardActions>
            </a>
        </Card>
    );
}
