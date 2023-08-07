import { useState } from "react"

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        {
            title: 'Paris',
            url: 'https://images.pexels.com/photos/5005305/pexels-photo-5005305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Kyoto',
            url: 'https://images.pexels.com/photos/16827772/pexels-photo-16827772/free-photo-of-castillo-de-osaka.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'NewYork',
            url: 'https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'RíoDeJaneiro',
            url: 'https://images.pexels.com/photos/6580702/pexels-photo-6580702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Venice',
            url: 'https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'CapeTown',
            url: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Sídney',
            url: 'https://images.pexels.com/photos/5707602/pexels-photo-5707602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Seoul',
            url: 'https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Instanbul',
            url: 'https://images.pexels.com/photos/7529416/pexels-photo-7529416.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            title: 'Buenos Aires',
            url: 'https://www.cronista.com/files/image/352/352344/61251b22add52.jpg'
        },
        {
            title: 'MexicoCity',
            url: 'https://images.pexels.com/photos/12295573/pexels-photo-12295573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: 'Tokyo',
            url: 'https://images.pexels.com/photos/2339009/pexels-photo-2339009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ];

    const prevSlide = () => {
        setCurrentSlide((prevSlideIndex) =>
            prevSlideIndex === 0 ? Math.ceil(images.length / 4) - 1 : prevSlideIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlideIndex) =>
            prevSlideIndex === Math.ceil(images.length / 4) - 1 ? 0 : prevSlideIndex + 1
        );
    };

    const startIndex = currentSlide * 4;
    const visibleImages = images.slice(startIndex, startIndex + 4);

    return (
        <div className="carousel flex flex-row justify-around items-center h-80 bg-indigo-600/10 my-4 lg:justify-evenly">
            <button className="prev-btn" onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-[4px] lg:mr-[-3rem]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className="slides grid grid-cols-2 grid-rows-2 gap-4 items-center h-64 w-96 lg:h-72 lg:w-[34rem]">
                {visibleImages.map((image, index) => (
                    <div key={index} className="slide h-full w-full shadow-fxc border-2 border-black/80">
                        <img
                            className="box-content object-cover object-center h-full w-full"
                            src={image.url}
                            alt={image.title}
                        />
                    </div>
                ))}
            </div>
            <button className="next-btn" onClick={nextSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-[4px] lg:ml-[-3rem]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export default Carousel