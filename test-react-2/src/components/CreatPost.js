import React from "react";

const CreatePost = () => {
    return (
        <div className="new-post-modal">
            <form>
                <textarea placeholder="Tapez votre texte ici"></textarea>
                <input type="submit" value="Envoyer" />
            </form>
        </div>
    )
}
export default CreatePost;