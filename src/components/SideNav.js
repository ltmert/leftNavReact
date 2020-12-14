import React, { useEffect, useState, useCallback } from 'react';
import SideItem from './SideItem';
import {NavItems} from '../data/NavItemData'


const SideNav =({ url = 'http://localhost:8000/data.php' })=> {
    const [navItems, setNavItems] = useState(NavItems);
    const handleItemClick = useCallback(
      (e) => {
        // clone the tree
        const newTree = [...navItems];
        // todo: find the item in the "navItems" state and change it.
        // modify newTree's matching item from the e.target
        setNavItems(newTree);
      },
      [navItems]
    );  
    
    useEffect(async () => {
        const response = await fetch(url);
        // const data = await response.json()
        // do something with the data
        // setNavItems(data)
      }, [url]);  

return (
    <div style={sideNavStyle}>
        <h2 style={headerStyle}>Side Navigation</h2>
        
        <SideItem items={navItems}  handleItemClick={handleItemClick}/>
     
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