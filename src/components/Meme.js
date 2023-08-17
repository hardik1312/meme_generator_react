import React from 'react' 
import memesData from "../memesData";

function Meme(){

        const [meme, setMeme] = React.useState({
            topText:"",
            bottomText: "",
            randomImage:"https://i.imgflip.com/1ihzfe.jpg"
        })

        const [allMemeImages, setAllMemeImages] = React.useState(memesData)

        function getMemeImage(){
            const memeImages = allMemeImages.data.memes
            const randomNumber = Math.floor(Math.random() * memeImages.length)
            const url = memeImages[randomNumber].url
            setMeme(prevMeme => ({...prevMeme, randomImage:url})
            )

            
        }
    return(
        <main>
            <div className="form">
                    <input type="text" placeholder="Top Text" className="form--input"></input>
                    <input type="text" placeholder="Bottom Text" className="form--input"></input>
                    <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼️</button>
                    <img src={meme.randomImage} className='meme--image' alt='meme'/>
                      
            </div>
        </main>
    )
}

export default Meme;