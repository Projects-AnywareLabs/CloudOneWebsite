import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { ROUTES } from './constants';
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from 'react';
function Header() {
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        return setOpen(!isOpen)
    }

    const scrollToFooter = () => {
        const footer = document.getElementById('footer');
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <header className='py-2 w-full flex justify-between bg-white drop-shadow-md sticky top-0 z-10'>
            <div className='container flex justify-between'>
                <Link to="/">
                    <div className='flex justify-center items-center'>
                        <div className="w-[60px] h-[60px] flex justify-center content-center"><img src={logo} alt="CloudoneLogo" /></div>
                        <div className='text-4xl font-bold text-cloudone-blue'>Cloudone</div>
                    </div>
                </Link>
                <nav className='hidden lg:block align-middle my-auto'>
                    {
                        ROUTES.map((route) => (<ListItem key={route.NAME} text={route.NAME} to={route.TO} />))
                    }
                </nav>
                <button onClick={scrollToFooter} className='hidden lg:block px-8 py-1 my-2 rounded-full font-semibold bg-[#1d313c] text-white'>Schedule a demo</button>
                <button onClick={toggleMenu} className='block lg:hidden px-8 py-1 my-2 rounded-full font-semibold bg-[#1d313c] text-white'><MdMenu /></button>
            </div>
            <div style={{ left: `${isOpen ? '0%' : '100%'}`, display:`${isOpen ? 'block' : 'none'}`  }} className='w-full h-screen absolute z-20 top-0 left-[100%] bg-white hidden'>
            <div className='container h-full py-28'>
            <Link to="/"><div onClick={toggleMenu} className='border-t-2 border-cloudone-blue/25 px-2 py-4 text-2xl jakarta-plus text-cloudone-blue'>Home</div></Link>
                {
                    ROUTES.map((route) => (
                        
                            <Link to={route.TO}><div onClick={toggleMenu} className='border-t-2 border-cloudone-blue/25 px-2 py-4 text-2xl jakarta-plus text-cloudone-blue'>{route.NAME}</div></Link>
                       
                    ))
                }
             </div>
                <button onClick={toggleMenu} className='absolute top-0 right-0 w-[24px] h-[24px] text-2xl pt-[36px] pr-[48px] text-gray-900'><MdClose /></button>
            </div>
        </header>
    )
}

const ListItem = ({ text, to }) => {
    return (
        <Link className="px-4 block md:inline-block text-lg text-[2vw] lg:text-[16px] font-bold uppercase text-center text-gray-700" to={to} >{text}</Link>
    )
}


export default Header
