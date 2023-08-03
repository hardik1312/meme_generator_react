import meme from '../images/meme.png'

function Header(){
    return(
        <div className='header'>
        <img src={meme} className='header--troll' alt='meme' />
        <h1 className='header--title'>Meme Generator</h1>
        <p className='header--project'>React Course - Project 3</p>
        </div>
    )
}

export default Header;