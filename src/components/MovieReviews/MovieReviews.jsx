import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchReviewsById } from "../../services/api";

 const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setRevies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
            const data = await fetchReviewsById(movieId);
            setRevies(data);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, [movieId]);

    return (
        <div>
        <ul>
            {reviews.map((item) => (
              <Link to={item.url} key={item.id}>
                <li key={item.id}>{item.author}</li>
              </Link>  
            ))}
        </ul>
        </div>
    );
 };

 export default MovieReviews;