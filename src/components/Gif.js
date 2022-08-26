export default function Gif({url, webp, title}) {
    return (
        <picture className="gif">
            <source srcset={webp} type="image/webp" />
            <source srcset={url} type="image/jpeg" /> 
            <img src={url} alt={title}/>
        </picture>
    )
}