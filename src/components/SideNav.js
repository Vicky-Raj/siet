import React from "react";
import styled,{css} from "styled-components";
import {useLocation,useHistory} from "react-router-dom";

const SideBar = styled.div`
padding-top:30px;
position:fixed;
top:4rem;
width:5rem;
height:100%;
background:#303030;
display:flex;
flex-direction:column;
align-items:center;
`
const NavLink = styled.div`
display:flex;
align-items:center;
justify-content:center;
margin-top:30px;
width:4rem;
height:4rem;
border-radius:50%;
background:#424242;
box-shadow:0px 10px 20px rgba(0,0,0,0.4);
color:#9C1DE7;
:hover{
    cursor:pointer;
    box-shadow:none;
}
transition:all 0.2s ease-out;
${props=>{
    if(props.active)
    return css`
    color:rgba(255,255,255,0.8);
    background:#9C1DE7;
    `
}}
`

const Icon = styled.i`
font-size:2.4rem;
color:inherit;
`

export default ()=>{
    const history = useHistory();
    const {pathname} = useLocation();
    return(
        <SideBar>
            <NavLink onClick={()=>history.push("/")} active={pathname === "/"}>
                <Icon className="material-icons">person</Icon>
            </NavLink>
            <NavLink onClick={()=>history.push("/energy")} active={pathname === "/energy"}>
                <Icon className="material-icons">flash_on</Icon>
            </NavLink>
            <NavLink onClick={()=>history.push("/compare")} active={pathname === "/compare"}>
                <Icon className="material-icons">compare</Icon>
            </NavLink>
        </SideBar>
    );
}