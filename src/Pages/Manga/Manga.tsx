import axios from 'axios';
import '../Manga/Manga.css';
import React, { ChangeEvent, useState } from 'react';
import { GiDoubleDragon } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

const Manga: React.FC = () => {

    const [Search, setSearch] = useState("")
    const [Mangas, setMangas] = useState([])
    const [SearchError, setSearchError] = useState("")

    const handleSearch = (e: ChangeEvent<HTMLInputElement> ) => {
        setSearch(e.target.value)
    }

    const getManga = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

    if(Search === "") {
        setSearchError("Kindly enter a search item")
    } else {
        const options = {
            method: 'GET',
            url: 'https://myanimelist.p.rapidapi.com/v2/manga/search',
            params: {
                q: Search,
                n: '32'
            },
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
            }
        };          
            try {
                const response = await axios.request(options);
                setMangas(response.data)
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        }
    }

    const onSearch = (e: React.MouseEvent<SVGAElement>) => {
        e.preventDefault()
        getManga
    }

    const handleClick = (Link: any) => {
        window.open(Link)
    }

return (
    <div>
        <section id='MangaSearchPage' className="flex flex-col items-center justify-center gap-4 mb-5 text-white">
            <h1 className='text-3xl'>Welcome to AniWorld. Search your Manga.</h1>
            <form onSubmit={getManga} className='bg-white flex flex-row justify-between gap-1 px-1 py-1 rounded w-2/5'>
                <GiDoubleDragon size="1.8rem" color="black" />
                <input type="text" placeholder="Search Manga..." className='outline-none px-2 py-1 text-black w-11/12' value={Search} onChange={handleSearch} />
                <IoSearchSharp size="1.8rem" color="black" className='cursor-pointer' onClick={onSearch} />
            </form> 
            <span className="Error" >{SearchError}</span>
            <p>Search your Manga e.g My Hero Academia, Attack on Titan, Vinland Saga </p>
        </section>
        <section id='MangaSearchResults' className='grid grid-cols-3 gap-5 justify-between px-10'>
            {
            (!Mangas) ? <h2 className='Failure'>No Results Found</h2> :
            Mangas.map((Manga: any) => {
            return (
                <div className='cursor-pointer px-2 py-2' onClick={()=>handleClick(Manga.myanimelist_url)} >
                    <section>
                        <figure className='flex flex-col items-center justify-center gap-2 mb-4'>
                            <img src={Manga.picture_url} alt="" width="250px" className='mb-4 rounded' /> 
                            <figcaption>
                                <h2 className='font-bold mb-2 text-2xl text-center'>{Manga.title}</h2>
                                <p className='mb-4'>{Manga.description}</p>
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

export default Manga