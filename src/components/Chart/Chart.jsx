import React from "react";
import { useState, useEffect } from "react";
import { fetchDailyData } from "../../Api";
import { Line, Bar} from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart= ()=> {
    const [dailyData, setDailydata] = useState({});

    useEffect(()=>{
        const fetchAPI= async()=>{
            setDailydata(await fetchDailyData());
        }
        fetchAPI();
    });
    
    const lineChart =(
        dailyData.length?(
        <Line
        data={{
            labels: dailyData.map(({date})=>date),
            datasets: [
                {
                data: dailyData.map(({confirmed})=>confirmed),
                label:'Infected',
                borderColor: '#3333ff',
                backgroundColor: 'rgba(0,0,255,0.5)',
                fill: true,} ,
                {
                data: dailyData.map(({deaths})=>deaths),
                label: 'Deaths',
                borderColor: 'rgb(255, 0, 0)',
                backgroundColor: 'rgba(255,0,0,0.5)',
                fill: true,
            }],
        }}
        />
        ) : null


    );

    return(
        <div className={styles.container}>
            {lineChart}
        </div>
    )
}
export default Chart;
