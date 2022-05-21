import React, { useState } from 'react'
import styled from 'styled-components'
function MovieDisplay({movie}) {

    const [isShown, setIsShown] = useState(false)

    return (
        <MovieDisplayContainer onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=> setIsShown(false)} >
            
            {
                !isShown && (
                    <video src={movie.thumbnail} type="video/mp4" ></video>
                )
            }
            {
                isShown && (
                    <>
                    <video src={movie.thumbnail} type="video/mp4" autoPlay={true} controls loop ></video>
                    <h4>{movie.title}</h4>
                    <h4>{movie.duration}</h4>
                    </>
                )
            }
            
        </MovieDisplayContainer>
    )
}

export default MovieDisplay
const MovieDisplayContainer = styled.div`
    width: 230px;
    border-radius: 5px;
    margin: 2px;
    transition: transform 500ms;
    position: relative;
    display: block;
    margin: 0 20px;
    > video{
        width: 100%;
        border-radius: 5px;
    }
    
    &:hover{
        transform: scale(1.1);
        transition: all 1ms ease;
        /* margin: 0 10px; */
    }
`;

