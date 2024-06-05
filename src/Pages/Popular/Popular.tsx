import axios from 'axios';
import '../Popular/Popular.css';
import React, { useEffect, useState } from 'react';
import SearchPage from '../../Components/Common/SearchPage/SearchPage';

const Popular: React.FC = () => {

    const [Mangas, setMangas] = useState([])

    useEffect(() => {

        const getPopularManga = async () => {

            const options = {
                method: 'GET',
                url: 'https://myanimelist.p.rapidapi.com/manga/top/%7Bcategory%7D',
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

        getPopularManga()
    }, [])

    const handleClick = (Link: any) => {
        window.open(Link)
    }

return (
    <div>
        <SearchPage 
            idName='PopularSearchPage'
            ContainerStyle= 'flex flex-col items-center justify-center mb-5 text-white'
            Heading='Top Mangas'
            HeadingStyle='text-4xl'
            formStyle='hidden'
        />
        <section id='SearchResults' className='grid grid-cols-3 gap-5 justify-between px-10'>
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
                                <p className='mb-4'>{Manga.synopsis}</p>
                                <div className='flex justify-between gap-10' >
                                    <p>Rank: <i>{Manga.rank}</i></p>
                                    <p>Score: <i>{Manga.score}</i></p>
                                </div>
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

export default Popular