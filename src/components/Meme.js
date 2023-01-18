export default function Form(){
    return (
        <main>
            <form className="form-section">
                <div className="input-fields">
                    <input type="text" placeholder="Top text"></input>
                    <input type="text" placeholder="Bottom text"></input>
                </div>
                <button className="submit-btn">Get a new meme image  🖼</button>
             </form>
        </main>
    )
}