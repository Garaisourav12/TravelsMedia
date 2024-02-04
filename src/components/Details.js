import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import { useNavigate, useParams } from 'react-router-dom'
import share from '../assets/share.png'
import heart from '../assets/heart.png'
import { FaArrowLeftLong } from "react-icons/fa6";

function Details() {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data} = useSelector(state => state)
    const [details, setDetails] = useState(true);

    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        data?.forEach(item => {
            if(item?.id == id) setSelectedPost(item);
        })
        setDetails(true);
    }, [id])

    return (
        <div className='details-component'>
            <div className="heading">
                <p className='back' onClick={() => navigate('/')}><FaArrowLeftLong /></p>
                <h1>Post Number #{id}</h1>
            </div>
            <div className="selected-post">
                <div className="post-img-box">
                    <img src={`https://picsum.photos/200?random=${id}`} alt="" />
                    <div className="overlay">
                        <h2 className="title">{selectedPost?.title}</h2>
                        <div className="social">
                            <img src={share} alt="" />
                            <img src={heart} alt="" />
                        </div>
                    </div>
                </div>
                <div className="details-box">
                    <div className="details-info">
                        <button className={`details-btn ${details?'btn-active':''}`} onClick={() => setDetails(true)}>Details</button>
                        <button className={`info-btn ${details?'':'btn-active'}`} onClick={() => setDetails(false)}>User Info</button>
                    </div>
                    {
                        details?(
                            <p className="selected-detals">{selectedPost?.body}</p>
                        ):(
                            <p className="user-info">Post Was Posted By {selectedPost?.userId}</p>
                        )
                    }
                </div>
            </div>
            <h1>More Post</h1>
            <div className="container">
                {
                    data.map((item) => {
                        if(id == item?.id) return;
                        return <Card item={item} key={item.id} />;
                    })
                }
            </div>
        </div>
    )
}

export default Details