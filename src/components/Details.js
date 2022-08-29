import { useEffect, useState } from "react";
import GetByIdService from "../services/GetByIdService";

const Details = ({params}) => {
    const {keyword} = params;
    const [gif, setGif] = useState('');

    useEffect(()=> {
        GetByIdService({keyword})
            .then(r => r.json())
            .then(response => setGif(response.data))
    }, [keyword]);

    return (gif &&
        <div>
            <h2> Detail here: {gif.title}</h2>

            <div className="app-details-gif">
                <picture>
                    <img src={gif.images.original.url} alt={gif.title} />
                </picture>
            </div>

            <div className="app-details-link">
                <a href={gif.url} target='_blank' rel="noreferrer">View original</a>
            </div>
        </div>
    )
}

export default Details;