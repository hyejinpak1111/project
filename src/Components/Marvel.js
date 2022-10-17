import React, {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Marvel = () => {
    const {id} = useParams();
    const [item, setItem] = useState();

    const fetch = async() => {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=3b75f9fe85ca471b4e75ff0781327861&hash=51cff038a041818794738efa1bea184b`)
        setItem(res.data.data.results[0])
    }
    fetch();

    return (
        <>
        {
            (!item)? "":(
                <div className="box-content">
                    <div className="right-box">
                        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
                    </div>
                    <div className="left-box">
                        <h1>{item.name}</h1>
                        <h4>{item.description}</h4>
                    </div>
                </div>
            )
        }
        </>
    )
}

export default Marvel