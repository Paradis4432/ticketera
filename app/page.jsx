import Feed from "/components/Feed";

function Home() {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className={"head_text text-center"}>
                Header
                <br className={"max-md:hidden"}/>
                <span className={"orange_gradient text-center"}>Discover</span>
            </h1>
            <p className={"desc text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet, atque
                consequuntur debitis dolorem est
                laboriosam maxime officia porro, quis quo temporibus voluptas? Ad at eius harum itaque sunt velit.</p>

            <Feed/>
        </section>
    );
}

export default Home;