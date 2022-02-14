
export default function LoggIn(props) {
    return (
        <>
        <h3>Logged In component</h3>
        <div>
                {
                    props.isLoggedIn ?   
                    <button onClick={props.handleLogg}>Log Out</button> :
                    <button onClick={props.handleLogg} >Log In</button>
                }
            </div>
        </>
    )

}