import React from 'react'
import {Line} from "react-chartjs-2";
import {Title,ChartBox,Description} from "../components";


const Compare = () => {
    const data = {
        labels:["Jan","Feb","Mar","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets:[
            {
                label:"People",
                data:[
                    100,
                    300,
                    200,
                    350,
                    400,
                    250,
                    100,
                    500,
                    400,
                    600,
                    550,
                    300
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderColor: [
                    '#9C1DE7',
                ],
                fill:false
            }
        ]
    }
    return (
        <div>
            <Title>Details</Title>
            <div style={{display:"flex"}}>
                <ChartBox style={{marginLeft:"8rem",marginTop:"1.5rem"}}>
                    <Line data={data} options={{maintainAspectRatio:false}}></Line>
                </ChartBox>
                <Description>
                    With the help of predicted data of people count an organisation can not only monitor and reduce energy consumption but also can make preplanned arrangements to make out thier best.
                </Description>
            </div>
            
        </div>
    )
}

export default Compare
