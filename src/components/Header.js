import meme from '../images/meme.png'

function Header(){
    return(
        <div className='header'>
        <img src={meme} className='header--image' alt='meme' />
        <h2 className='header--title'>Meme Generator</h2>
        <h4 className='header--project'>React Course - Project 3</h4>
        </div>
    )
}

export default Header;