import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import Details from './components/Details';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/action/actionCreators';
import Navbar from './components/navbar/Navbar';

function App() {
    const location = useLocation();
    console.log(location);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [])
    return (
        <div className='main'>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainComponent/>} />
                <Route path='/item/:id' element={<Details />} />
            </Routes>
        </div>
    )
}

export default App