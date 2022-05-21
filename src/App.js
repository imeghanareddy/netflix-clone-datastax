import { useEffect, useState } from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Section from "./components/Section";


function App() {
  const [genres, setGenres] = useState(null)
  const genrelimit = 4;
  const [limit, setLimit] = useState(genrelimit)
  


  const fetchData = async ()=>{
    const response = await fetch("/.netlify/functions/getGenres", {
      method: "POST",
      body: limit
    })
    const responseBody = await response.json()
    // console.log(responseBody.data.reference_list.values);
    setGenres(responseBody.data.reference_list.values)
  }



  useEffect(() => {
    fetchData()
  }, [, limit])
  console.log(limit);



  return (
    <AppContainer>

      <Navbar/>
      <HeroSection/>
      <GenreContainer>
        {
          genres && genres.map((genre, index)=>(
            
            <Section genre = {genre.value} key = {index}/>
          ))
        }
      </GenreContainer>
      <Button onMouseOver={()=>{setLimit(limit + genrelimit)}} >
      </Button>
      
        
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div``;
const Button = styled.div`
    width: 100%;
    height: 100px;
    background-color: blue;

`
const GenreContainer = styled.div`
  margin: 0 50px;

`;