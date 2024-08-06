import React from 'react';
import {links} from './data';
import './style.css';
import logo from '../../../images/logo.jpg' ;
interface IHeaderProps{

}


const Header:React.FC<IHeaderProps>= ():JSX.Element =>{
 return(
    <>
    <header className='header-box'>
    <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <ul className='links-box'>
            {
                links.map((link)=>{
                    return(
                            <li key={link.id}>
                                <a href={link.url}>{link.text}</a>
                            </li>
                    )
                })
            }
        </ul>
        
    </header>
    </>
 )
}


export default Header;