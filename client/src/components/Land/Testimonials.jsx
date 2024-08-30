import React from 'react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Aakarsh Singh",
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi inventore sequi quia modi doloremque?",
            rating: 5,
            avatar: "https://imgs.search.brave.com/OlsenO8KW04unLVrkKUMVKpJHzx_t7qQ0DARqJgWCFs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMy8y/MDIzLzAxL1JvYmxv/eC1pbWFnZS1JRC1s/aXN0LWdhbGxlcnkt/OS0zOWI1YmY3Lmpw/Zz9xdWFsaXR5PTkw/JmZpdD00MjAsMjgw"
        },
        {
            name: " Abina Baghat",
            review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At hic dolorem sunt quam, doloribus consequatur assumenda eius esse ipsum error.",
            rating: 5,
            avatar: "https://imgs.search.brave.com/qaRK2MGcvNFv5B9GDYBL0_Os1hv2125y1V_7llWuT00/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMy8y/MDIzLzAxL1JvYmxv/eC1pbWFnZS1JRC1s/aXN0LWdhbGxlcnkt/MTAtOTk4ODE1NC5q/cGc_cXVhbGl0eT05/MCZmaXQ9NDIwLDI4/MA"
        },
        {
            name: "Suman Dahal",
            review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. At hic dolorem sunt quam, doloribus consequatur assumenda eius esse ipsum error.",
            rating: 5,
            avatar: "https://imgs.search.brave.com/ce4aNVRPkjBw5i05eqNVABaIEUAvTFyZ_0J1qImqzb0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW1tZWRpYXRl/LmNvLnVrL3Byb2R1/Y3Rpb24vdm9sYXRp/bGUvc2l0ZXMvMy8y/MDIzLzAxL1JvYmxv/eC1pbWFnZS1JRC1s/aXN0LWdhbGxlcnkt/MTMtNDkwM2RiZi5q/cGc_cXVhbGl0eT05/MCZmaXQ9NDIwLDI4/MA"
        }
    ];

    return (
        <div className="bg-white text-white py-12">
            <h2 className="text-4xl font-bold text-purple-500 mb-8 text-center"> Review</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
                {reviews.map((review, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-300 rounded-lg p-6 shadow-lg w-full md:w-1/3 text-center transition-transform duration-300 hover:scale-105"
                    >
                        <div className="mb-4 flex justify-center">
                            <img src={review.avatar} alt={review.name} className="w-20 h-20 rounded-full border-4 border-purple-400" />
                        </div>
                        <p className="text-gray-800 mb-6 italic">"{review.review}"</p>
                        <h3 className="text-xl font-semibold text-gray-900">{review.name}</h3>
                        <div className="text-yellow-400 mt-4">
                            {Array(review.rating).fill('⭐')}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
