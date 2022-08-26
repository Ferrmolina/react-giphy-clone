export default function Gif({url, title}) {
    return (
        <div className="gif">
            <img src={url} alt={title}/>
        </div>
    )
}