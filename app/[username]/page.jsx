const username = ({ params }) => {
    const userName = params.username; 

    return (
        <div>Code With : {userName}</div>
    );
};

export default username;
