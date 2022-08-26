import { useEffect, useState } from "react";
import SearchService from "../services/SearchService";
import Gif from "./Gif";

function ListOfGifs ({keyword, explicitContent}) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(()=> {
        setLoading(true)
        SearchService({keyword}, {explicitContent})
            .then(res => res.json())
            .then(response => {
                setGifs(response.data)
                setLoading(false)
            })
    }, [keyword, explicitContent])

    if (loading) {
        return loading && <>Loading... </>
    }

    return (keyword && 
        <>
            <h2>Search result for {keyword}</h2>
            <div className="gifs">
            {
                gifs.map(singleGif => 
                    <Gif 
                        key={singleGif.id}
                        title={singleGif.title} 
                        url={singleGif.images.downsized_large.url}
                    />
                )
            }
            </div>
        </>
    )
}

export default ListOfGifs;