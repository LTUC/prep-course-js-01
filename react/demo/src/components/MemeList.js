
function MemeList(props) {
    console.log(props);
    return (
        <>
            {
                props.data.map(meme => {
                    return (
                        <>
                            <h1>Name: {meme.name}</h1>
                            <img src={meme.image} alt={meme.name}/>
                            <p>Rank: {meme.rank} </p>
                            <p> Text: {meme.bottomText} </p>
                        </>
                    )
                })
            }

        </>
    )
}

export default MemeList;