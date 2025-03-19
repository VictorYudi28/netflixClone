import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useEffect, useState } from 'react';

export const Header = () => {

    const [bgHeader, setBgHeader] = useState('transparent');

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 20) {
                setBgHeader('black')
            } else {
                setBgHeader('transparent')
            }
        }

        window.addEventListener('scroll', handleScroll)

    })

    return (
        <div className={`fixed top-0 left-0 right-0 ${bgHeader === 'black' ? 'bg-[#141414]' : 'bg-transparent'}`}>
            <header className={`container mx-auto px-4 transition-all ease-linear`}>
                <nav className="flex justify-between items-center h-[100px]">
                    <div className="flex items-center gap-6 text-white">
                        <img className="w-28 cursor-pointer" src="/assets/imgs/logonetflix.webp" alt="Logo netflix" />
                        <div className="">
                            <ul className="list-none hidden lg:flex lg:gap-3">
                                <li className="cursor-pointer">Início</li>
                                <li className="cursor-pointer">Séries</li>
                                <li className="cursor-pointer">Filmes</li>
                                <li className="cursor-pointer">Bombando</li>
                                <li className="cursor-pointer">Minha lista</li>
                                <li className="cursor-pointer">Navegar por idiomas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-white">

                        <div className="hidden sm:block cursor-pointer">
                            <SearchIcon />
                        </div>
                        <p className="hidden sm:block cursor-pointer">Infantil</p>
                        <div className="cursor-pointer">
                            <NotificationsIcon />
                        </div>
                        <div className="flex items-center cursor-pointer">
                            <img className="rounded-md" src="/assets/imgs/iconPerfil.png" alt="icon perfil" />
                            <ArrowDropDownIcon />
                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )

}