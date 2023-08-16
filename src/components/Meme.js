import React from 'react' 
import memesData from "../memesData";

function Meme(){

        const [memeImage, setMemeImage] = React.useState('')

        function getMemeImage(){
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url
            setMemeImage(url)
        }
    return(
        <main>
            <div className="form">
                    <input type="text" placeholder="Top Text" className="form--input"></input>
                    <input type="text" placeholder="Bottom Text" className="form--input"></input>
                    <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
                    <img src={memeImage} className='meme--image' alt='meme'/>
                      
            </div>
        </main>
    )
}

export default Meme;