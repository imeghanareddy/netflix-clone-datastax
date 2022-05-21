import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
function HeroSection() {

    const [movie, setMovie] = useState(null)
    const pageState = null;
    const fetchData = async ()=>{
        const response = await fetch("/.netlify/functions/getMovies", {
            method: "POST",
            body: JSON.stringify({ genre: "Anime", pageState: pageState})
        })
        const responseBody = await response.json()
        // console.log(responseBody);
        const movies = responseBody.data.movies_by_genre.values
        setMovie(movies[Math.floor(Math.random() * movies.length)])
        // setPageState(responseBody.data.movies_by_genre.pageState)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <HeroContainer>
            
            {movie && (
                <Hero>
                    <video src={movie.thumbnail} type="video/mp4" muted controls autoPlay={true}></video>
                    <Info>
                        <h3>{movie.synopsis}</h3>
                        <Button>
                            <Play>
                                play
                            </Play>
                            <Add>
                                wishlist 
                            </Add>
                        </Button>
                    </Info>
                </Hero>
            )}
        </HeroContainer>
    )
}

export default HeroSection
const HeroContainer = styled.div`
    /* width: 100vh; */

`;
const Hero = styled.div`
    width: 100%;
    margin-top: -100px;
    padding: 0;
    > video{
        width: 100%;
        float: left;
        top: 0;
        padding: none;
        margin-bottom: 30px;
    }
`;
const Info = styled.div`
    position: absolute;
    margin-top: 30%;
    margin-left: 50px;
    width: 600px;
`;
const Button = styled.div`

    display: flex;
`;
const Play = styled.div`
    background-color: #fff;
    color: #000000;
    padding: 10px 20px;
    margin: 3px;
`;
const Add = styled.div`
    background-color: #fff;
    color: black;
    padding: 10px 20px;
    margin: 3px;
`;