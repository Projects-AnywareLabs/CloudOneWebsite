import logo from '../assets/logo.svg'
import { FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6'
import { SOCIAL_LINKS } from './constants'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <footer className='w-full '>
            <div className='container'><h1 className='text-center md:text-left md:w-2/3 text-4xl md:text-6xl text-[#20343c] font-extrabold uppercase leading-none'>At Cloudone AI Robotics Lab</h1></div>
            <div className='bg-[#20343c]'>
                <section className='container md:flex md:justify-between md:gap-3 text-center md:text-left'>
                    <div className=' md:w-2/3 text-4xl md:text-6xl font-responsive font-bold uppercase'>
                        <h1 className='text-gray-100'>Our innovations are synchronized with your</h1>
                        <h1 className='text-yellow-500'>operational objectives</h1>
                    </div>
                    <div className='md:w-1/3 md:mt-[-8%] rounded-xl '>
                        <SayHelloForm />
                    </div>
                </section>
                <section className='container pt-8'>
                    <div className='md:flex md:flex-row-reverse md:justify-between '>
                        <nav className='self-end'>
                            <Links text="Home" to="/" />
                            {/* <Links text="Products" to="/products" />
                            <Links text="Pricing" to="/pricing" />
                            <Links text="Resources" to="/resources" /> */}
                        </nav>
                        <div className=''>
                            <div className='flex justify-center md:justify-normal'>
                                <div className='w-[70px]'><img src={logo} alt="Cloudone Logo" /></div>
                                <p className='ml-[6px] text-4xl font-bold my-auto text-gray-100'>Cloudone</p>
                            </div>
                            <p className='text-gray-300 text-center md:text-left'>Chennai | Bengaluru | Thiruvananthapuram</p>
                            <p className='text-gray-300 text-center md:text-left'>Head Office: B3 42 Vedantha Desikar Swamy Street, Palathoppu, Mylapore, Chennai, Tamil Nadu 600004</p>
                        </div>
                    </div>
                </section>
                <section className='text-center py-4 container'>
                    <div className='md:flex md:justify-between md:flex-row-reverse '>
                        <div className='flex justify-center content-center gap-2 p-4'>
                            <a href={SOCIAL_LINKS.FACEBOOK} target='_blank' rel="noreferrer" className='text-gray-100 text-[24px]'><FaSquareFacebook /></a>
                            <a href={SOCIAL_LINKS.INSTAGRAM} target='_blank' rel="noreferrer" className='text-gray-100 text-[24px]'><FaSquareInstagram /></a>
                            <a href={SOCIAL_LINKS.X} target='_blank' rel="noreferrer" className='text-gray-100 text-[24px]'><FaSquareXTwitter /></a>
                        </div>
                        <p className='text-xs text-gray-50/30 my-auto'>ALL RIGHTS RESERVED, COPYRIGHT &copy; 2022 LTD.</p>
                    </div>
                </section>
            </div>
        </footer>
    )
}

const SayHelloForm = () => {
    const submitForm = (e) => {
        e.preventDefault();
        console.log("yo");
    };
    return (
        <div className='bg-white py-4 px-6 rounded-[18px] border-8 border-[#20343c]'>
            <form onSubmit={submitForm}>
                <textarea id="contact" placeholder='Say Hi!' name="contact" rows="8" cols="50" className='w-full  rounded-xl p-4 text-gray-800 bg-stone-200' />
                <button className='w-full p-4 mt-2 text-lg font-bold text-[#20343c] bg-yellow-500  rounded-xl' type="submit">Send email</button>
            </form>
        </div>
    )
}
const Links = ({ text, to }) => {
    return (<Link className="p-4 md:py-0 block md:inline-block text-lg font-bold uppercase text-center text-gray-100" to={to}>{text}</Link>)
}
export default Footer