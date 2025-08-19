async function userName ({params}) {
    const { username } = await params;

    return (
        <>
          <h1>Catch All Route</h1>
          <p>UserName Path: {username.join(" / ")}</p>
        </>
    )
};


export default userName;