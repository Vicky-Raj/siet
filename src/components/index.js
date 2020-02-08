import styled from "styled-components";

export const Title = styled.div`
font-family:"Roboto Slab";
font-weight:700;
text-transform:capitalize;
font-size:2.5rem;
color:rgba(255,255,255,0.8);
margin-left:8.7rem;
margin-top:3rem;
letter-spacing:2px;
`

export const ChartBox = styled.div`
padding:2rem;
box-sizing:border-box;
overflow:hidden;
width:40rem;
height:20rem;
background:#303030;
border-radius:57px;
box-shadow:0px 10px 20px rgba(0,0,0,0.4);
`
export const Description = styled.div`
font-family:"Roboto Slab";
color:#fff;
line-height:1.2;
letter-spacing:1.3px;
height:40rem;
width:25rem;
margin-top:3rem;
margin-left:2.5rem;
`

export const DateButton = styled.button`
margin-left:5rem;
outline:none;
border:none;
padding: 1rem 3rem;
background:linear-gradient(to right, #9C1DE7,#9100E7);
border-radius:5px;
color:#fff;
letter-spacing:1.3px;
font-weight:600;
box-shadow:0px 10px 20px rgba(146,0,232,0.3);
:hover{
    cursor:pointer;
}
`