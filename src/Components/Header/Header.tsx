import React from 'react';
import Logo from "../../assets/Anime_Logo.webp";
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
return (
    <div className='flex justify-between items-center px-2 py-0 shadow-xl sm:justify-between sm:items-center'>
        <section>
            <figure className='flex items-center justify-center gap-1'>
                <img src={Logo} alt="" width="40px" />
                <figcaption>
                    <h1 className='font-bold text-2xl'>AniWorld</h1>
                </figcaption>
            </figure>
        </section>
        <section>
            <nav className='flex flex-col cursor-pointer list-none text=lg sm:flex-row sm:gap-14'>
                <Link to="/Home" className='text-black no-underline'>Anime</Link>
                <Link to="/Genre" className='text-black no-underline'>Anime Genre</Link>
                <Link to="/Manga" className='text-black no-underline'>Manga</Link>
                <li>Create</li>
            </nav>
        </section>
        <section>
            <button className='bg-black px-4 py-1 rounded text-base text-white'>Favourite Animes</button>
        </section>
    </div>
)
}

export default Header