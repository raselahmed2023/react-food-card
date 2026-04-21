import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Cards = ({ food }) => {
    const { id,dish_name, category, rating, price, origin_and_popularity, image_link } = food;
    return (
        <Link href={`/foods/${id}`}>
            <div >


                <div className="card bg-base-100 shadow-sm h-full">
                    <figure className="h-56 overflow-hidden">
                        <Image src={image_link} alt='' height={100} width={200}
                            className=" object-cover"></Image>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {dish_name}
                            <div className="badge badge-secondary">{category}</div>
                        </h2>
                        <p>{origin_and_popularity}</p>
                        <div className='flex justify-between'>

                            <span className='text-2xl'>Price:TK {price}</span>
                            <span className='text-2xl'>Rating: {rating}</span>

                        </div>

                    </div>
                </div>


            </div>
        </Link>
    );
};

export default Cards;