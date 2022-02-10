import TableInfo from "./Table";


function UserInfo(props) {
    // console.log("props in UserInfo",props.data);
    return (
        <>
            <p style={{ color: props.favColor }}>My name is {props.username} </p>
            <p>My Fav Food is  {props.food}</p>
            <TableInfo data2={props.data} />
        </>
    )
}

export default UserInfo;