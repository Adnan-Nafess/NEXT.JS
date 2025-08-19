const Files = async ({ params }) => {
    const { filePath } = await params; 
    return (
        <div>
            <h1>
                File <i>/{filePath.join("/")}</i>
            </h1>
        </div>
    );
};

export default Files;
