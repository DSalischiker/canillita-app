import React from 'react';
import '../components/App/index.css';
import SearchAppBar from '../components/SearchAppBar';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import GridSkeleton from '../components/GridSkeleton';
import Footer from '../components/Footer';
const Layout = ({ children, loading }) => {
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));
    return (
        <>
            <SearchAppBar />
            {loading && <LinearProgress color='secondary' />}
            <div className='inner'>
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout;