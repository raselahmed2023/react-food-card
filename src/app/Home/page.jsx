import Cards from '@/components/ui/Cards';
import React from 'react';

const page = async () => {
    const data = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const result = await data.json()
    const foods = result.data
    return (


        <div className='grid grid-cols-3 gap-5 container mx-auto mt-10'>

            {foods.map((food) => (
                <Cards key={food.id} food={food}></Cards>
            ))}



        </div>
    );
};

export default page;