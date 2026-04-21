import Image from 'next/image';

const FoodDetails = async ({ params }) => {
    const { id } = await params  // 

    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const result = await res.json()
    const foods = result.data

    const food = foods.find(f => f.id === id)  // ✅ params.id না, শুধু id

    if (!food) return <p className="text-center mt-20">Food not found!</p>

    const { dish_name, category, rating, price, image_link,
            cuisine, origin_and_popularity, main_ingredients,
            cooking_steps, approximate_nutrition_per_serving } = food

    return (
        <div className="container mx-auto px-4 py-10 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                    <Image src={image_link} alt={dish_name} width={600} height={400}
                        className="rounded-2xl w-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <h1 className="text-3xl font-bold">{dish_name}</h1>
                    
                    <p className="text-gray-500">{origin_and_popularity}</p>
                    <div className="flex justify-between mt-4">
                        <span className="text-2xl font-bold">৳ {price}</span>
                        <span className="text-2xl">⭐ {rating}</span>
                    </div>
                    <div className="bg-base-200 rounded-xl p-4 mt-2">
                        <h3 className="font-semibold mb-2">Nutrition per serving</h3>
                        {Object.entries(approximate_nutrition_per_serving).map(([key, val]) => (
                            <div key={key} className="flex justify-between text-sm">
                                <span className="capitalize">{key}</span>
                                <span>{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-3">🧂 Ingredients</h2>
                <ul className="list-disc list-inside grid grid-cols-2 gap-1">
                    {main_ingredients.map((ing, i) => (
                        <li key={i} className="text-sm">{ing}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-3">👨‍🍳 Cooking Steps</h2>
                <ol className="list-decimal list-inside flex flex-col gap-2">
                    {cooking_steps.map((step, i) => (
                        <li key={i} className="text-sm leading-relaxed">{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default FoodDetails;