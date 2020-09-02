import React, { useEffect, useState } from 'react';
import Layout from '../containers/Layout';
import FullWidthGrid from '../components/FullWidthGrid';
import axios from 'axios';
import GridSkeleton from '../components/GridSkeleton';
const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.canillitapp.com/latest/2020-08-27');

                const data = response.data.slice(0, 15)
                console.log(data);
                setNews(data)
                setLoading(false);
            } catch (error) {
                console.error('este es mi error', error);
            }
        }
        fetchData();
    }, [])
    return (
        <Layout loading={loading}>
            {!loading ? <FullWidthGrid data={news} /> : <GridSkeleton />}

        </Layout>
    )
}



export default Home;