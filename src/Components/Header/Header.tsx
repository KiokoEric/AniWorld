import React from 'react';
import Logo from "../../assets/Anime_Logo.webp"

const Header: React.FC = () => {
return (
    <div className='flex justify-between items-center px-2 py-1 shadow-xl sm:justify-between sm:items-center'>
        <section>
            <figure className='flex items-center gap-1'>
                <img src={Logo} alt="" width="60px" />
                <figcaption>
                    <h1 className='font-bold text-3xl' >AniWorld</h1>
                </figcaption>
            </figure>
        </section>
        <section>
            <nav className='flex flex-col cursor-pointer list-none text=lg sm:flex-row sm:gap-14'>
                <li>Anime</li>
                <li>Manga</li>
                <li>Create</li>
            </nav>
        </section>
        <section>
            <button className='bg-black px-2 py-2 rounded text-base text-white'>Favourite Animes</button>
        </section>
    </div>
)
}

export default Header