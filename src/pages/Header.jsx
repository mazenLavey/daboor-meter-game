import HeaderCSS from './css/Header.module.css';
import logoImg from '../assets/icon-meter.png';


const Header = ()=>{
    return (
    <div className={HeaderCSS.wrapper}>
        <img src={logoImg} alt="logo" />
        <p>daboor meter</p>
    </div>
    )
};

export default Header;