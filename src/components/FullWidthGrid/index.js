import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../ImgMediaCard";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      marginTop: theme.spacing(2),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const { data } = props;
  /*  const data1 = data.slice(0, 15);
  const data2 = data.slice(16, 30);
  const data3 = data.slice(31, 45); */
  let dataNews = [];
  switch (page) {
    case 1:
      dataNews = data.slice(0, 15);
      break;
    case 2:
      dataNews = data.slice(15, 30);
      break;
    case 3:
      dataNews = data.slice(30, 40);
      break;
    default:
      dataNews = data.slice(0, 15);
      break;
  }
  const [first, second, third, ...otherNews] = dataNews;

  const handleChange = (event, value) => {
    console.log(page);
    setPage(value);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ImgMediaCard
            data={first}
            height={400}
            className="MediaCard-Biggest"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImgMediaCard data={second} height={300} className="MediaCard-Big" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImgMediaCard data={third} height={300} className="MediaCard-Big" />
        </Grid>
        {otherNews.map((noticia) => (
          <Grid key={noticia.news_id} item xs={6} sm={3}>
            <ImgMediaCard data={noticia} height={250} />
          </Grid>
        ))}
      </Grid>
      <div className="Div-Pagination">
        <Pagination
          size="large"
          count={3}
          page={page}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
