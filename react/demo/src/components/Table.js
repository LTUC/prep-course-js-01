import "./table.css";

function TableInfo(props) {
    console.log("props in TableInfo", props);
    return (
        <>
            <h2>This is Table Info</h2>
            <table style={{color: "blue"}}>
                <tr>
                    <th> Name </th>
                    <th> Image</th>
                    <th> Rank</th>
                </tr>
                {
                    props.data2.map(meme => {
                        return (
                                <tr>
                                    <td>{meme.name}</td>
                                    <td>{meme.image}</td>
                                    <td>{meme.rank}</td>
                                </tr>
                             
                        )
                    })
                }


            </table>
        </>
    )
}
export default TableInfo;