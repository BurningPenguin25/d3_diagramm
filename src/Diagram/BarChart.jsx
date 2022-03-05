import React, {useEffect, useRef, useState} from "react"
import * as d3 from 'd3'
import csvFile from './Population.csv'

export default  function BarChart() {
    const [data, setData] = useState([]);
    const chartRef = useRef();
    const dataCsv = 'https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv' // полный список стран
    const myDataCsv = 'https://gist.githubusercontent.com/BurningPenguin25/93617a08f71e0fb0e1bafea0c56756c0/raw/490f091f6feeb76b8749b8aaf576e3d9fb958e4f/Countries.csv' // топ 10 стран(сокращенный)



    useEffect(()=>{
        const row = d =>{
             d.Population = +d['2020']
            return d;
      }
        d3.csv(myDataCsv, row).then(setData)

    console.log(data)

    },[])


    return (
        <div >
            <svg ref={chartRef}> </svg>
        </div>
    )
};