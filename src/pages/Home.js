import React, { useEffect, useState } from "react";
import Layout from "../containers/Layout";
import FullWidthGrid from "../components/FullWidthGrid";
import axios from "axios";
import GridSkeleton from "../components/GridSkeleton";

import dayjs from "dayjs"; // load on demand
dayjs.locale("es"); // use Spanish locale globally
const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const date = new Date();
        const dateFormated = dayjs(date).locale("es").format("YYYY-MM-DD");
        const response = await axios.get(
          `https://api.canillitapp.com/latest/${dateFormated}`
        );
        const data = response.data.slice(0, 45);
        /* const data = response.data.slice(0, 15);
        const data2 = response.data.slice(16, 30);
        const data3 = response.data.slice(31, 45); */

        setNews(data);
        setLoading(false);
      } catch (error) {
        console.error("este es mi error", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Layout loading={loading}>
      {!loading ? <FullWidthGrid data={news} /> : <GridSkeleton />}
    </Layout>
  );
};

export default Home;
