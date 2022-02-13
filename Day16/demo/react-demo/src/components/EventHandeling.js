
export default function EventHandeling() {

    function handleClick(event) {

        alert("You clicked me!");
    }
    function handleSubmit(event) {
        event.preventDefault();
        
        alert("You Submitted the form");
    }

    return (
        <>
            <button onClick={handleClick}>Click Here</button>

            <form onSubmit={handleSubmit}>
                <button type="submit">Submit Form</button>
            </form>
        </>
    )
}

