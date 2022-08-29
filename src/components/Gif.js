import { Link } from "wouter";

export default function Gif({id, url, webp, title}) {
    return (
        <Link to={`/view/gif/${id}`} >
            <div className="gif">
                <picture>
                    <source srcset={webp} type="image/webp" />
                    <source srcset={url} type="image/gif" /> 
                    <img src={url} alt={title} />
                </picture>
            </div>
        </Link>
    )
}