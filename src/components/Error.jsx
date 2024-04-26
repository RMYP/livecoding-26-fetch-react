export default function Error({title, message}) {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <p>
                {message}
            </p>
            {onConfirm && (
                <div id="confirmation-actions">
                    <button onClick={onConfirm} className="button"> Okay</button>
                </div>
            )}
        </div>
    )
}