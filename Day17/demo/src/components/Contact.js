
export default function Contact(props) {
console.log(props.mode);

    return (
        <>
            <div style={{ backgroundColor: props.mode?"black": "white" }}>
                <p>{ props.mode}</p>
                <h1>Contact Us Page</h1>
            </div>
        </>
    )
}