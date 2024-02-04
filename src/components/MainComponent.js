import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from './Card';
import search from '../assets/search.png'

function MainComponent() {
    const {loading, data, error} = useSelector(state => state);
    const [copy, setCopy] = useState(data); 

    const [input, setInput] = useState('');

    useEffect(() => {
        let newArray = data.filter((item) => !input || (item?.title.toLowerCase()).includes(input.toLowerCase()));
        setCopy(newArray);
    }, [input, data])


    return (
        <div className='main-component'>
            <h1>Social Media For Travellers</h1>
            <div className="search-bar">
                <img src={search} alt="" />
                <input type="search" placeholder='Search here...' value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className="container">
                {loading && <h2>Loading...</h2>}
                {
                    copy.map((item) => (
                        <Card item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default MainComponent