import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../containers/Layout';
import FullWidthGrid from '../components/FullWidthGrid';
import axios from 'axios';
import GridSkeleton from '../components/GridSkeleton';
const Category = () => {
    const { slug } = useParams();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    //Object categories
    const categoriesId = {
        politica: '1',
        internacionales: '2',
        tecnologia: '3',
        espectaculos: '4',
        deportes: '5'
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
                console.log(response.data);
                const data = response.data.slice(0, 15);
                setNews(data);
                setLoading(false);
            } catch (error) {
                console.error('este es mi error', error);
            }
        }
        fetchData()
    }, [])
    return (
        <Layout loading={loading}>
            <div>
                {`Categoria: ${slug}`}
            </div>
            {!loading ? <FullWidthGrid data={news} /> : <GridSkeleton />}
        </Layout >
    )
}

export default Category;