import '../styles/Loading.scss';

const Loading = () => {
    return (
        <div className="loading-frame">
            <span className="loading-dot color-yellow"></span>
            <span className="loading-dot color-green"></span>
            <span className="loading-dot color-blue"></span>
            <span className="loading-dot color-violet"></span>
            <span className="loading-dot color-orange"></span>
        </div>
    )
}

export default Loading;