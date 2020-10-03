import React from 'react';
import './error.css'

const Error = () => {
    return (
    <>
    <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'></img>
    <span>Что-то пошло не так</span>
    </>
    )
}

export default Error;