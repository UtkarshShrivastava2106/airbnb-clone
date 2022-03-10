import React, { useState } from 'react'
import './CSS/Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Banner() {
    const navigate = useNavigate();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Link to="/searchpage">
                <Button  variant='outlined'>Explore Nearby</Button></Link>
            </div>
        </div>
    )
}

export default Banner