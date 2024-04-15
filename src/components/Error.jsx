export default function Error({title, message}) {
    return (
        <div className="eror">
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}