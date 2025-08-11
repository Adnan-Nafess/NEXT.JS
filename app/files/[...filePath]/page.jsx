const Files = async ({ params }) => {
    console.log(await params)
    const { filePath } = await params; 
    console.log(filePath);
    return (
        <div>
            <h1>
                File <i>/{filePath.join("/")}</i>
            </h1>
        </div>
    );
};

export default Files;
