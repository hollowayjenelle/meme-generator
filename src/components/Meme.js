export default function Form(){
    return (
        <main>
            <form className="form-section">
                <div className="input-fields">
                    <input type="text" placeholder="Top text"></input>
                    <input type="text" placeholder="Bottom text"></input>
                </div>
                <input className="submit-btn" type="submit" value="Get a new meme image  🖼"></input>
             </form>
        </main>
    )
}