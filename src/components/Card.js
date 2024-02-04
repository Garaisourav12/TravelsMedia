import React, { useState } from 'react';
import arrow from '../assets/arrow.png';
import { useNavigate } from 'react-router-dom';

function Card({ item }) {
    const navigate = useNavigate();
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <div className='item-card'>
            <div className="card-img-box">
                <div className="overlay"></div>
                <img src={`https://picsum.photos/200?random=${item?.id}`} alt="" />
            </div>
            <div className="item-details">
                <h4 className="title">{item?.title}</h4>
                <div className="body-details-box">
                    <div className="body-details">
                        <span className='para'>{showFullContent ? `${item?.body}` : `${item?.body.slice(0, 100)}...`}</span>
                        {item?.body.length > 100 && (
                            <span className='read-more' onClick={toggleContent}>
                                {showFullContent ? ' Read less' : ' Read more'}
                            </span>
                        )}
                    </div>
                    <button>
                        <img src={arrow} alt="" onClick={() => navigate(`/item/${item?.id}`)} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
