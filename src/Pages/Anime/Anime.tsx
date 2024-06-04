import axios from 'axios';
import '../Anime/Anime.css';
import React, { ChangeEvent, useState } from 'react';
import { GiDoubleDragon } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

const Anime: React.FC = () => {

    const [Search, setSearch] = useState("")
    const [Animes, setAnimes] = useState([])
    const [SearchError, setSearchError] = useState("")

    const handleSearch = (e: ChangeEvent<HTMLInputElement> ) => {
        setSearch(e.target.value)
    }

    const getAnime = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    if(Search === "") {
        setSearchError("Kindly enter a search item")
    } else {
        const options = {
            method: 'GET',
            url: 'https://anime-db.p.rapidapi.com/anime',
            params: {
                page: '1',
                size: '35',
                search: Search
            },
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
            }
        };
            try {
                const response = await axios.request(options);
                setAnimes(response.data.data)
                console.log(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const onSearch = (e: React.MouseEvent<SVGAElement>) => {
        e.preventDefault()
        getAnime
    }

    const handleClick = (Link: any) => {
        window.open(Link)
    }

return (
    <div>
        <section id='AnimeSearchPage' className="flex flex-col items-center justify-center gap-4 mb-5 text-white">
            <h1 className='text-4xl'>Welcome to AniWorld.Search your Anime.</h1>
            <form onSubmit={getAnime} className='bg-white flex flex-row justify-between gap-1 px-1 py-1 rounded w-2/5'>
                <GiDoubleDragon size="1.8rem" color="black" />
                <input type="text" placeholder="Search Anime..." className='outline-none px-2 py-1 text-black w-11/12' value={Search} onChange={handleSearch} />
                <IoSearchSharp size="1.8rem" color="black" className='cursor-pointer' onClick={onSearch} />
            </form> 
            <span className="Error" >{SearchError}</span>
            <p>Search your favourite Animes e.g Naruto, One Piece, Hunter X Hunter </p>
        </section>
        <section id='SearchResults' className='grid grid-cols-3 gap-5 justify-between px-10'>
            {
            (!Animes) ? <h2 className='Failure'>No Results Found</h2> :
            Animes.map((Anime: any) => {
            return (
                <div className='cursor-pointer px-2 py-2' onClick={()=>handleClick(Anime.link)} >
                    <section>
                        <figure className='flex flex-col items-center justify-center gap-2 mb-4'>
                            <img src={Anime.image} alt="" width="250px" className='mb-4 rounded' /> 
                            <figcaption>
                                <h2 className='font-bold mb-2 text-2xl text-center'>{Anime.title}</h2>
                                <p className='mb-4'>{Anime.synopsis}</p>
                                <p>Status: <i>{Anime.status}</i></p>
                            </figcaption>
                        </figure>
                    </section>
                </div>
            )
            })
            } 
        </section>
    </div>
)
}

export default Anime