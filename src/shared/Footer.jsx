import { FaFacebook, FaGithub, FaLinkedinIn, FaMobileAlt, FaPhoneAlt } from 'react-icons/fa';
// import logo from '../../../public/megapixel-fuchsia.png'
import { HiMail } from "react-icons/hi";
const Footer = () => {
    return (
        <div className='bg-slate-800'>
            <footer className="footer p-10  text-[#FCCB05] text-[18px] mt-16">
                <div className='flex flex-col items-center lg:block w-full'>
                    {/* <img src={logo} className='lg:h-28 h-20' alt="" /> */}
                    <h1 className='text-4xl font-bold'>Food Corner</h1>
                    <h2 className='text-xl'>A online food world</h2>
                </div>
                <div className='flex flex-col items-center space-y-3 lg:block w-full'>
                    <span className="footer-title">Physical Office</span>
                    <p>Barishal, Bangladesh</p>
                    <p>South Sagordi,</p>
                    <p>Food Corner,</p>
                    <p>House No. 001</p>
                </div>
                <div className='flex flex-col items-center space-y-3 lg:block w-full'>
                    <span className="footer-title">Contact Information</span>
                    <div className='flex items-center space-x-2'>
                        <HiMail />
                        <p>foodcorner@fooda.com</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaPhoneAlt /><p> +880 3659835</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <FaMobileAlt />
                        <p>+880 1712121212</p>
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-3 w-full lg:block'>
                    <span className="footer-title">Social Media</span>
                    <div className='flex space-x-4 text-2xl'>
                        <a href="https://www.facebook.com/shiningsudipto"><FaFacebook /></a>
                        <a href="https://github.com/shiningsudipto"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/shining-sudipto/"><FaLinkedinIn /></a>
                    </div>
                </div>
            </footer>
            <div className='text-center text-[#FCCB05] bg-slate-900 p-6 font-semibold'>
                <h2>Copyright © 2023 - All right reserved by Food Corner Ltd.</h2>
            </div>
        </div>
    );
};

export default Footer;