function Meme(){
    return(
        <main>
            <form className="form">
                    <input type="text" placeholder="top text" className="form--input"></input>
                    <input type="text" placeholder="bottom text" className="form--input"></input>
                <button className="form--button"><span className="meme--text">Get a new meme image 🖼️</span></button>
            </form>
        </main>
    )
}

export default Meme;