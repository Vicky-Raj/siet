import React,{useState,useEffect} from 'react'
import {Line} from 'react-chartjs-2'
import styled from "styled-components"
import {Title,ChartBox,Description,DateButton} from "../components";
import DateFns from  "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import moment from "moment";

const Energy = () => {
    const energy = ["200","400","300"]
    const data = [{
        labels:["6","12","18","24"],
        datasets:[
            {
                label:"current",
                data:[
                    111,
                    333,
                    300
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 99, 130, 1)',
                    "rgba(255, 99, 132, 1)"
                ],
                fill:false
            },
            {
                label:"predicted",
                data:[
                    111,
                    333,
                    280,
                    330
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderColor: "rgba(255,0,0)",
                fill:false
            }
        ]
    },{
        labels:["6","12","18","24"],
        datasets:[
            {
                label:"history",
                data:[
                    200,
                    50,
                    300,
                    400
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                fill:false
            }
        ]
    },
    {
        labels:["6","12","18","24"],
        datasets:[
            {
                label:"history",
                data:[
                    111,
                    333,
                    300,
                    400
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
                ],
                fill:false
            }
        ]
    }]

    const Key = styled.div`
        width:135px;
        font-family:'Roboto Slab';
        line-height:2;
        font-size:2rem;
        font-weight:700;
        letter-spacing: 1.5px;
        text-transform: capitalize;
    `

    const Val = styled.div`
        line-height:2;
        padding:4px;
        font-size:1.8rem;
        font-weight:500;
        letter-spacing: 1px;
    `

    const [open,setOpen] = useState(false);
    const [date,setDate] = useState(new Date());
    const [i,seti] = useState(0);
    useEffect(()=>{
        seti(i=>++i%3 === 0 ? 1 : i%3)
    },[date])

    return (
        <div>
            <Title style={{display:"flex",alignItems:'center'}}>
                Energy consumption
                <DateButton onClick={()=>setOpen(true)}>{moment(date).format("DD/MM/YYYY")}</DateButton>
                <MuiPickersUtilsProvider utils={DateFns}>
                <KeyboardDatePicker
                    open={open}
                    onOpen={()=>setOpen(true)}
                    onClose={()=>setOpen(false)}
                    style={{display:"none"}}
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    value={date}
                    onChange={(date)=>setDate(date)}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                </MuiPickersUtilsProvider>
            </Title>
            <div style={{display:"flex"}}>
                <ChartBox style={{marginLeft:"8rem",marginTop:"1.5rem"}}>
                    <Line 
                        data={data[moment(date).format("DD/MM/YYYY") === moment().format("DD/MM/YYYY") ?  0 : i]}
                        options={{maintainAspectRatio:false}}
                    />
                </ChartBox>
                <Description >
                    <div style={{display:"flex"}}>
                <Key>Energy : </Key>
                        <Val> {energy[moment(date).format("DD/MM/YYYY") === moment().format("DD/MM/YYYY") ?  0 : i]} Watts</Val>
                    </div>
                </Description>
            </div>
            
        </div>
    )
}

export default Energy
