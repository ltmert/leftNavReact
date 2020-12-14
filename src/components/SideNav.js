import React from 'react';
import SideItem from './SideItem';
import {NavItems} from '../data/NavItemData'


const SideNav =()=> {
    
return (
    <div style={sideNavStyle}>
        <h2 style={headerStyle}>Side Navigation</h2>
        {NavItems.map((navItem, index)=>{
            return (
                <SideItem key={index} items={navItem}/>
            )
        }
            )}
    </div>
);
};

const sideNavStyle ={
    height:"100vh",
    width:"350px",
    
    background:"Linear-gradient(135deg,rgba(55,82,130,1) 0%,rgba(10,96,194,5) 100%)",
    position:"absolute",
    border:"1px solid transparent",
    left:0,
    textAlign:"left",
};
const headerStyle ={
    fontWeight:"600",
    padding:"0px 20px",
    color:"#fff",
}

export default SideNav;