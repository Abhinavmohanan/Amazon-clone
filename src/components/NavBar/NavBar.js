import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../files/Amazon_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useNavigate} from 'react-router-dom';
import { useStatevalue } from '../../StateProvider';
import MenuIcon from '@mui/icons-material/Menu';
import { slide as Menu } from 'react-burger-menu'
import { SideBar } from './SideBar';



export const NavBar = () => {
  const [style, setStyle] = useState(null);
  const [flag,setflag] = useState(null);
  const [{cart},dispatch] = useStatevalue();

  const onSideBar = ()=>{
    if(flag === 0){
      setflag(1)
      document.body.style.overflow = 'unset';
    }
    else{
      setflag(0)
      document.body.style.overflow = 'hidden';
    }
  }


  const applyStyle = () => {
    setStyle({
      border: "3px solid #ff9900",
    })
  }

  const removeStyle = () => {
    setStyle(null)
  }

  const IconStyle = {
    height: "100%",
    width: "50px",
    padding: "7px",
    boxSizing: "border-box",
  }

  let navigate = useNavigate();

  function getOrderSize(cart){
    var size =0;
    cart.forEach(element => {
      size += element.qty
    });
    return size;
  }

  return (
    <>
      <div className='navBar'>
        <MenuIcon className='menu' onClick={onSideBar}/>
        <img src={logo} alt='Amazong Logo' className='logo' onClick={()=>{navigate("/");}}></img>
        <div className='location'>
          <LocationOnIcon />
          <div className='userAddress'>
            <div className='delivery'>Deliver to Abhinav</div>
            <div className='address txt-bold'>3rd lane , 123412</div>
          </div>
        </div>
        <div className='search' style={style}>
          <input className='searchBar' type='text' onFocus={applyStyle} onBlur={removeStyle} ></input>
          <SearchIcon className='searchIcon' style={IconStyle} />
        </div>
        <div className='signIn'>
            <div> Hello, User</div>
            <div className='txt-bold'>Sign In, Account</div>
        </div>
        <div className='orders'>
            <div>Return</div>
            <div className='txt-bold'>& Orders</div>
        </div>
        <div className='cart' onClick={()=>{navigate("cart");}}>
            <div><ShoppingCartIcon/></div>
            <div>Cart: {getOrderSize(cart)}</div>
        </div>
      </div>
      {flag === 0 ? <SideBar/>: <></>}
    </>
  )
}
