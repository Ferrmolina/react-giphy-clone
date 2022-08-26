import { useEffect, useState } from "react";
import SearchService from "../services/SearchService";
import Gif from "./Gif";
import Loading from "./Loading";

function ListOfGifs ({keyword}) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState();
    
    useEffect(()=> {
        setLoading(true)
        SearchService({keyword})
            .then(res => res.json())
            .then(response => {
                setGifs(response.data)
                setLoading(false)
            })
    }, [keyword])

    if (loading) {
        return loading && <Loading />
    }

    return (keyword && 
        <>
            <h2>Search result for {keyword}</h2>
            <div className="gifs">
            {
                gifs.map(singleGif => 
                    <Gif 
                        id={singleGif.id}
                        key={singleGif.id}
                        title={singleGif.title} 
                        url={singleGif.images.original.url}
                        webp={singleGif.images.original.webp}
                    />
                )
            }
            </div>
        </>
    )
}

export default ListOfGifs;