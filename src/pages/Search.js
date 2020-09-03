import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Layout from '../containers/Layout';
import FullWidthGrid from '../components/FullWidthGrid';
import axios from 'axios';
import GridSkeleton from '../components/GridSkeleton';
const Search = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    const { query } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://api.canillitapp.com/search/${query}`);
                const data = response.data.slice(0, 15);
                setNews(data);
                setLoading(false);
            } catch (error) {
                console.error('este es mi error', error);
            }
        }
        fetchData()
    }, [location])
    return (
        <Layout loading={loading}>
            <div>
                {`Search: ${query}`}
            </div>
            {!loading ? news.length !== 0 ? <FullWidthGrid data={news} /> : 'no hay resultados para mostrar' : <GridSkeleton />}
        </Layout >
    )
}

export default Search;