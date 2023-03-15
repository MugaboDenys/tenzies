
export default function Die(props) {
    const styles = {
        backgroundColor: props.held ? "#59E391" : "white"
    }
    return (
        <div className="die-face" onClick={props.hold} style={styles}>
            <h2 className="text-3xl font-normal">{props.value}</h2>
        </div>
    )
}
