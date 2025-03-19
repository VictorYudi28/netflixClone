import { Movie } from "@/types/Movie";
import { ReactNode } from "react";
import { Container } from "./Container";
import { useOriginals } from "@/utils/queries";

type Props = {
    children: ReactNode
}


export const Banner = ({ children }: Props) => {

    const truncate = (str: string,n: number)=> {
        return str?.length > n ? str.slice(0, n-1) + "..." : str
    }

    const categoryOriginals = useOriginals();

    const originals: Movie[] | undefined = categoryOriginals?.results;

    if (!originals || !originals || originals.length === 0) return null;

    const randomMovieindex = Math.round(Math.random() * (originals.length - 1 < 0 ? 15 : originals.length - 1));

    const movieBanner = originals[randomMovieindex] as Movie;

    const urlBanner: string = 'https://image.tmdb.org/t/p/original'
    const imageUrl: string = `${urlBanner}${encodeURIComponent(movieBanner.backdrop_path)}`

    return (
        <div className=""
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${imageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}>

            <Container>
                {children}
                <div className="flex flex-col justify-center items-start h-screen px-4 gap-4">
                    <h1 className="text-white max-w-xl text-4xl font-bold md:text-6xl">{movieBanner.title}</h1>
                    <div className="flex gap-3">
                        <button className="bg-white text-black rounded-md px-4 py-2">Assistir</button>
                        <button className="bg-gray-600 bg-opacity-80 text-white rounded-md px-4 py-2">Mais informações</button>
                    </div>
                    <p className="text-white max-w-md lg:text-lg">{truncate(movieBanner.overview,300)}</p>
                </div>
            </Container>
        </div>
    )

}