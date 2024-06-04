import "../Create/Create.css";
import React, { ChangeEvent, useState } from 'react';

const Create: React.FC = () => {

    const [Title, setTitle] = useState("")
    const [Review, setReview] = useState("")
    const [Genre, setGenre] = useState("")
    const [Image, setImage] = useState("")
    const [Success, setSuccess] = useState("")

    const handleTitle = (e: ChangeEvent<HTMLInputElement> ) => {
        setTitle(e.target.value)
    }

    const handleReview = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setReview(e.target.value)
    }

    const handleGenre = (e: ChangeEvent<HTMLSelectElement> ) => {
        setGenre(e.target.value)
    }

    const handleImage = (e: ChangeEvent<HTMLInputElement> ) => {
        setImage(e.target.value)
    }

    const AddAnime= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSuccess("Anime has been successfully created.")
    }

return (
    <div>
        <section id='Create' className="flex flex-col items-center justify-center mb-5 text-white">
            <h2 className="text-4xl">Anime & Manga Review</h2>
        </section>
        <form onSubmit={AddAnime} action="" method="get" className="flex flex-col items-center justify-center gap-8 mb-5">
            <p className="flex flex-col gap-2">
                <label htmlFor="Title">Anime/Manga Title</label>
                <input type="text" name="Title" id="Title" placeholder='Enter Anime/Manga Title...' value={Title} onChange={handleTitle} className='border-black border-b outline-none px-2 py-1 text-black w-96' required />
            </p>
            <p className="flex flex-col gap-2">
                <label htmlFor="Review">Anime/ Manga Review</label>
                <textarea name="" id=""  placeholder='Enter Anime/Manga Review...' value={Review} onChange={handleReview} required className="border-black border-b h-28 outline-none px-4 py-4 w-96"  ></textarea>
            </p>
            <p className="flex flex-col gap-2"> 
                <label htmlFor="Genre">Genre</label>
                    <select name="" id="" value={Genre} onChange={handleGenre} className='border-black border-b outline-none px-2 py-1 text-black w-96'  required>
                        <option value="">Select a Genre</option>
                        <option value="Action">Action</option>
                        <option value="Adventure">Adventure</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Mecha">Mecha</option>
                        <option value="Romance">Romance</option>
                        <option value="Science Fiction">Science Fiction</option>
                        <option value="Sports">Sports</option>
                </select>
            </p>
            <p className="flex flex-col gap-2">
                <label htmlFor="Image">Image Url</label>
                <input type="text" name="Image" id="Image" placeholder='Enter Image Url...' value={Image} onChange={handleImage} className='border-black border-b outline-none px-2 py-1 text-black w-96' required />
            </p>
            <p className='Green' >{Success}</p>
            <button className='bg-black px-5 py-2 rounded text-base text-white' type="submit">Add New Task</button> 
        </form>
    </div>
)
}

export default Create