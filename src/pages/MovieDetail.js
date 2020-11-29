import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {MovieState} from "../movieState";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.find((stateMovie) => stateMovie.url === url)
        setMovie(currentMovie);
    }, [movies, url])

    return(
        <>
            {movie && (
                <Details>
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="img"/>
                    </HeadLine>
                </Details>
            )}
        </>
    )
}

const Details = styled.div`
  
`;

const HeadLine = styled.div`
  
`;

export default MovieDetail;