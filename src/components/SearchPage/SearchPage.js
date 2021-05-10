import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css';


const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();
    const {data} = useGoogleSearch();

    console.log(data);
    return (
        <div className="searchPage">
            
            <div className="searchPage__header">
                <Link to="/">
                    <img className="searchPage__logo"
                     src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png" alt="" />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons />
                </div>
            </div>

            <div className="searchPage__results">

            </div>
        </div>
    );
};

export default SearchPage;