import React from "react"

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: ""
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage(){
        const randomNum = Math.round(Math.random() * allMemes.length)
        const url = allMemes[randomNum].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: url
        }))
    }

    return (
        <main>
            <div className="form-section">
                <div className="input-fields">
                    <input type="text" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}></input>
                    <input type="text" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}></input>
                </div>
                <button className="submit-btn" onClick={getMemeImage}>Get a new meme image  🖼</button>
             </div>
             <div className="meme">
                <img src={meme.randomImg} className="meme-image" alt="random meme"/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
             </div>
        </main>
    )
}