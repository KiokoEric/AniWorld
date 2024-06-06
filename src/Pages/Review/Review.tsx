import React from 'react';
import "../Review/Review.css";
import { Link } from 'react-router-dom';
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useAppContext } from '../../Components/Context/AppContext';
import Heading from '../../Components/Common/HeadingPage/Heading';

const Review: React.FC = () => {

    const { Reviews, removeReview } = useAppContext()

return (
    <div>
        <Heading
            idName='Review'
            ContainerStyle= 'flex flex-col items-center justify-center mb-5 text-white'
            Heading='My Anime & Manga Reviews'
            HeadingStyle='text-4xl'
        />
        <section className='grid grid-cols-3 mb-10 px-16' >
        {
        Reviews.map((Review: any) => {
            return (
                <figure className='flex flex-col gap-5 items-center justify-center' key={Review.id}>
                    <img src={Review.Image} alt="" width="300px" className='rounded' />
                    <figcaption className='flex flex-col gap-2 text-center'>
                        <h3 className='font-bold text-2xl text-center'>{Review.Title}</h3>
                        <p>{Review.Review}</p>
                        <p>Genre: {Review.Genre}</p>
                        <div className='flex justify-center gap-10' >
                            <Link to={`/${Review.id}`} ><MdEditSquare color='green' size="1.8rem" className='cursor-pointer' /></Link>
                            <MdDelete color='red' size="1.8rem" className='cursor-pointer' onClick={() => removeReview(Review.id)}  />
                        </div>
                    </figcaption>
                </figure>
            )
        })
        }
        </section>
    </div>
)
}

export default Review