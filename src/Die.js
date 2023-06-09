
export default function Die({held, hold, value}) {
    const styles = {
        backgroundColor: held ? "#59E391" : "white"
    }
    return (
        <div className="die-face" onClick={hold} style={styles}>
            <h2 className="text-3xl font-normal">{value}</h2>
        </div>
    )
}
