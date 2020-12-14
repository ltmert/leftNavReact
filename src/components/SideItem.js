
import React,{useState,useCallback} from "react";

const hasChildren = (item) => {
    const test = !!item && !!item.nodes && item.nodes.length > 0;
    console.log(`has children: `, item, `\ntest: `, test);
    return test;
  };

    const SideItem =({items,handleItemClick})=>{
        //const{name,links,image,open}=items;
        const [isOpen,setIsOpen]=React.useState(false);//open
        
        const handleClick = useCallback(
            (e) => {
              setIsOpen(!isOpen);
              handleItemClick(e, isOpen);
            },
            [handleItemClick, isOpen, setIsOpen]
          );
        //const openSideNav=()=> {
          //  setOpen(!isOpen);
        //};
    return (
        <div style={{ paddingLeft: '8px' }}>
        {items &&
          items.map((item) => {
            const { name, link, image,alt } = item;
            console.log(`name: `, name, ` link: `, link);
            return (
              <div key={name}>
                {(link && (
                  <div onClick={handleClick} style={linkContainerStyle}>
                    <a href={link} style={linkStyle}>
                    <img src={image} alt={alt} width="40" height="48"  align="left"></img>
                      <p style={nameStyle}>{name} <img src="./arrowImg.png" alt="arrow"></img>
                      </p>
                    </a>
                  </div>
                )) || (
                  <div onClick={handleClick}>
                  <img src={image} alt={alt} width="40" height="48" align="left"></img>
                    <p style={nameStyle}>{name}</p>
                  </div>
                )}
                {isOpen && hasChildren(item) && (
                  <SideItem style={sideItemStyle}
                  items={item.nodes}
                    handleItemClick={handleItemClick}
                  />
                )}
              </div>
            );
          })}
      </div>
    );
  };
const nameStyle ={
    margin:"10px",
    fontWeight:"600",
    paddingBottom: "10px",
};

const sideItemStyle = {
    height:"auto",
    minHeight:"50px",
    width:"350px",
    borderTop:"1px solid #CBCBCB",
    color:"#fff",
    display:"flex",
    alignItems:"flex-start",
    flexDirection:"column",
    
   
};

const linkContainerStyle ={
    height:"auto",
    width:"350px",
    marginLeft:"10px",
    paddingTop:"1px",
    textIndent:"5px",
    background:"rgb(187,187,187)",
    border:"2px solid #D6D6D6",
    "@keyframes:fadeTest":{
        from: {opacity:0},
        to: {opacity:1},
    },
    animation:"0.6s ease-in fadeTest 0s",
    cursor:"pointer",

};


const linkStyle ={
    textdecoration:"none",
    color:"#333333",
   
};

const arrow= {
    border: "solid black",
    borderWidth: "0 3px 3px 0",
    display: "inline-block",
    padding: "3px",
  };
  export default SideItem;

 



