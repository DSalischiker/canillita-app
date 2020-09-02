import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../containers/Layout';
const Search = () => {
    let { query } = useParams();
    return (
        <Layout>
            <div>
                {`Search: ${query}`}
            </div>
        </Layout>
    )
}

export default Search;