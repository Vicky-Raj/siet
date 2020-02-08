import React,{useState,useEffect} from "react";
import {Line} from "react-chartjs-2";
import {Title,ChartBox,Description,DateButton} from "../components";
import DateFns from  "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from "styled-components";
import moment from "moment";

export default ()=>{
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
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
    const [open,setOpen] = useState(false);
    const [date,setDate] = useState(new Date());
    const [i,seti] = useState(0);
    useEffect(()=>{
        seti(i=>++i%3 === 0 ? 1 : i%3)
    },[date])
    return(
        <div>
            <Title style={{display:"flex",alignItems:'center'}}>
                People
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
            <Description>
                This graph is between the current actual count of people and the predicted output using Time Series Prediction by taking previous data into account. 
            </Description>
            </div>
        </div>
    );
}