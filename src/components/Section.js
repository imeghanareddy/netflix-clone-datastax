import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from "react";
import MovieDisplay from './MovieDisplay';

function Section({genre}) {

    const [movies, setMovies] = useState(null)
    const [pageState, setPageState] = useState(null)
    const fetchData = async ()=>{
        const response = await fetch("/.netlify/functions/getMovies", {
            method: "POST",
            body: JSON.stringify({ genre: genre, pageState: pageState})
        })
        const responseBody = await response.json()
        // console.log(responseBody);
        setMovies(responseBody.data.movies_by_genre.values)
        setPageState(responseBody.data.movies_by_genre.pageState)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <SectionContainer>
            <Genre>
            <h2>{genre}</h2> 
            {
                movies && (
                    <Movie>
                        {
                            movies.map((movie, index)=>(
                                <MovieDisplay movie= {movie} key={index} />
                            ))
                        }
                        <Button onClick={()=>{
                            setPageState(pageState)
                            fetchData()
                        }}>
                
                        </Button>
                    </Movie>
                    
                )
            }
            </Genre>
            
            
        </SectionContainer>
    )
}

export default Section
const SectionContainer = styled.div``;
const Genre = styled.div``;
const Movie = styled.div`
    display: flex;
`;
const Button = styled.div`
    /* width: 100px; */
    height: 100%;
    display: flex;
    padding: 40px 10px;
    border-radius: 0 10px 10px 0;
    background-color:#302f2fb9;
    &:hover{
        background-color: rgb(255,255,255,0.5);
    }
`