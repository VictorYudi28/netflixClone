import { Movie } from "@/types/Movie"
import { useState } from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

type Props = {
    movies: Movie[],
    title: string
}

export const MovieComp = ({ movies, title }: Props) => {

    const urlBanner: string = 'https://image.tmdb.org/t/p/original';
    const urlNull: string = 'https://image.tmdb.org/t/p/originalnull';
    const [scrollX, setScrollX] = useState(0);
    const [contImg, setContImg] = useState(movies.length)

    const checkImgList = () => {

        for (let i in movies) {
            if(`${urlBanner}${movies[i].poster_path}` === urlNull){
                setContImg(contImg-1)
            }
        }

    }

    useState(() => {
        checkImgList()
    })

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }

        setScrollX(x);
    }

    const handleRightArrow = () => {

        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = contImg * 216;

        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 80;
        }

        setScrollX(x)

    }

    return (
        <div className="movieRow my-16 ">

            <h1 className="text-white text-3xl mb-5 pl-8 font-bold">{title}</h1>

            <div data-exp="movieRow-left" onClick={handleLeftArrow}
                className="movieRow-left absolute flex items-center left-0 bg-[rgba(0,0,0,0.6)] h-[288px] w-10 z-50 overflow-hidden cursor-pointer transition-all ease-in-out opacity-1 xl:opacity-0">
                <MdNavigateBefore className="text-5xl text-white" />
            </div>
            <div data-exp="movieRow-right" onClick={handleRightArrow}
                className="movieRow-right absolute flex items-center right-0 bg-[rgba(0,0,0,0.6)] h-[288px] w-10 z-50 overflow-hidden cursor-pointer transition-all ease-in-out opacity-1 xl:opacity-0">
                <MdNavigateNext className="text-5xl text-white" />
            </div>

            <div className="overflow-hidden pl-8 " data-exp="movieRow--listarea: area total">

                <div className="movieRow-list transition-all ease-in-out" data-exp="movieRow-list: alterar a margin"
                    style={{
                        marginLeft: scrollX, width: movies.length * 216
                    }}>

                    {movies.map((item, index) => (
                        <div key={index} className="max-w-48 inline-block mr-6 hover:rounded-md" data-exp="movie-item">
                            <img key={index} src={`${urlBanner}${item.poster_path}`}
                                className="w-full rounded-md cursor-pointer min-h-72 bg-cover transition-all ease-in-out hover:scale-105" alt="" />
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )

} 