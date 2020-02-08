import React from "react";
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./reset.css";
import SideNav from "./components/SideNav";
import Users from "./pages/Users";
import Energy from "./pages/Energy";
import Compare from "./pages/Compare";


const Body = styled.div`
height:100%;
width:100%;
box-sizing:border-box;
padding-top:4rem;
padding-left:5rem;
`

const NavBar = styled.nav`
position:fixed;
padding-left:2rem;
display:flex;
align-items:center;
color:#faee1c;
font-weight:800;
font-size:1.7rem;
text-transform:capitalize;
letter-spacing:2px;
width:100%;
height:4rem;
background:linear-gradient(to right, #9C1DE7,#9100E7);
box-shadow:0px 10px 20px rgba(146,0,232,0.3);
`


export default ()=>{
    
        return(
        <section>
            <header>
                <NavBar>
                    dashboard
                </NavBar>
            </header>
            <main>
            <Router>
                <SideNav/>
                <Body>
                    <Switch>
                        <Route exact path="/">
                            <Users/>
                        </Route>
                        <Route exact path="/energy">
                            <Energy/>
                        </Route>
                        <Route exact path="/compare">
                            <Compare/>
                        </Route>
                    </Switch>
                </Body>
            </Router>
            </main>
        </section>
    );
}

