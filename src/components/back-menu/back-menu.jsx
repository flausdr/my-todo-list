import Desk from '../desk/desk';
import './back-menu.scss';
import { ReactComponent as Github } from '../../assets/img/github.svg';
import { ReactComponent as Linkedin } from '../../assets/img/linkedin.svg';
import { ReactComponent as Mail } from '../../assets/img/mail.svg';

import client from '../../assets/img/1.jpg';

const BackMenu = () => {
    return(
        <div className='header'>
            <div className='header-top'>
                <div className='header__logo'>
                    Flaus
                </div>
                <h1 className='header__title'>Todo List with Drag and Drop</h1>
                <div className="header__client">
                    <img src={client} alt="" />
                </div>
            </div>
            <div className='header-navigation'>
                <a href="https://github.com/flausdr">
                   <Github />
                </a>
                <a href="https://www.linkedin.com/in/maks-rychkov-86bb93246/">
                    <Linkedin />
                </a>
                <a href="https://mail.google.com/mail/u/1/#inbox">
                    <Mail />
                </a>
            </div>

            <Desk />
        </div>
    )
};

export default BackMenu;