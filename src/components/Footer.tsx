import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {

    return (
        <footer className="flex flex-col bg-[#141414] text-white max-w-5xl mx-auto gap-4 pb-16 px-4">
            <div className="flex gap-6 ">
                <FaFacebookF className="text-2xl cursor-pointer" />
                <FaInstagram className="text-2xl cursor-pointer" />
                <FaTwitter className="text-2xl cursor-pointer" />
                <FaYoutube className="text-2xl cursor-pointer" />
            </div>
            <div className="text-gray-400 flex flex-wrap gap-8 xl:gap-20">
                <div className="flex flex-col gap-4">
                    <p>Audiodescrição</p>
                    <p>Relações com investidores</p>
                    <p>Avisos legais</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Central de ajuda</p>
                    <p>Carreiras</p>
                    <p>Prefêrencias de cookies</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Cartão pré-pago</p>
                    <p>Termos de Uso</p>
                    <p>Informações corporativas</p>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Imprensa</p>
                    <p>Privacidade</p>
                    <p>Entre em contato</p>
                </div>
            </div>
            <div>
                <button className="p-2 text-gray-400 inline-block border border-gray-400 hover:text-white">Código do serviço</button>
            </div>
            <p className="text-gray-400">1997 - 2025 Netflix, Inc.</p>
        </footer>
    )

}