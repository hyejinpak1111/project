import React, {useEffect, useState} from 'react';
import { Card } from './Card';
import axios from "axios";

export const Main = () => {
    const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=3b75f9fe85ca471b4e75ff0781327861&hash=51cff038a041818794738efa1bea184b")
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");

    useEffect(() =>{
        const fetch = async() =>{
            const res = await axios.get(url)
            setItem(res.data.data.results);
        }
        fetch();
    }, [url])

    const searchMarvel = () =>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=3b75f9fe85ca471b4e75ff0781327861&hash=51cff038a041818794738efa1bea184b`)
    }

    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/bg.jpg" alt="" />
                </div>
                <div className="search-bar">
                    <img src="./Images/logo.png" alt="logo" />
                    <input type="search" placeholder='search here'
                    className='search' 
                    onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchMarvel}/>
                </div>
            </div>
            <div className="content">
                
                {
                    (!item)?<p>Not Found</p>:<Card data={item} />
                }
            </div>
        </>
    )
}
