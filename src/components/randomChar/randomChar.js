import React, {Component, useEffect, useState} from 'react';
import './randomChar.css';
import gotServic from '../../servives/gotService'
import Spinner from '../../components/spinner';
import Error from '../error';
import PropTypes from 'prop-types';

export default function RandomChar({interval}) {

           
    const gotService = new gotServic();
    
    const [data, setData] = useState({
        char: {},
        loading: true,
        error: false
          
    });    
   
    function onCharLoaded(char) {
        setData({
            char,
            loading: false
        });
    }   

    const onError = () => {
        setData({
            error: true,
            loading: false
        })
    }

    const updateChar = () => {
        console.log(`123`);
        const id = Math.floor(Math.random()*140 +25); //25-140
        gotService.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError)
    }
   
  
    useEffect(() => {
        updateChar();
        const timer = setInterval(updateChar, interval); 
        return function cleanup() {
            clearInterval(timer); 
        }  
          
    },[]); 
     
    const { char, loading, error} = data;

    const errorMsg = error ? <Error></Error> : null;
    const spinner = loading ? <Spinner></Spinner> : null;
    const content = !(loading || error) ? <View char={char}/> : null;
   

        return (
            <div className="random-block rounded">
                {errorMsg}
                {spinner}
                {content}
            </div>
       
        );
       
}

const View = ({char}) => {

    const { name, gender, born, died, culture} = char;

    return (
        <>
       
                <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>{born}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>{died}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>{culture}</span>
                    </li>
                </ul>         

        </>
    )
}

RandomChar.defaultProps = {
    interval: 5000
  }

RandomChar.propType = {
    interval: PropTypes.number
  }
  
