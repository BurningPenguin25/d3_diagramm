import React, {useEffect, useRef, useState} from "react"
import * as d3 from 'd3'

const Population = [
    {year: "2010", val: 34127},
    {year: "2011", val: 34484},
    {year: "2012", val: 34880},
    {year: "2013", val: 35293},
    {year: "2014", val: 35667},
    {year: "2015", val: 35981},
    {year: "2016", val: 36503},
    {year: "2017", val: 36963},
    {year: "2018", val: 37075},
]



export default function  TestChart(){

    useEffect(()=>{
        const Per = d3.histogram().value(elem => elem.val)(Population)

const Ue = Population.map(d => d.val)
        const Year = Population.map(d => +(d.year))
        console.log(Ue)



        const margin = {top: 30, right: 30, bottom: 30, left: 40},
        width = 1000 - margin.left - margin.right,
        height = 1000 - margin.top - margin.bottom;

        const svg = d3.select("svg")
       .append("svg")
       .attr("width", width + margin.left + margin.right)
       .attr("height", height + margin.top + margin.bottom)
       .append("g")
       .attr("transform",
       `translate(${margin.left},${margin.top})`);

       const x = d3.scaleLinear()
       x.domain([d3.min(Year), d3.max(Year)])
       .range([0, width]);
        x.tickFormat(d3.format(",.0f")) // запятые у тысячи ---------------


        svg.append("g")
       .attr("transform", `translate(0, 930)`)
       .call(d3.axisBottom(x))
        x.tickFormat(d3.format(",.0f")) // запятые у тысячи  ---------------

        const y = d3.scaleLinear()
       .range([height, 0]);
       y.domain([0, d3.max(Ue)]);
        svg.append("g")
       .call(d3.axisLeft(y));



        const histogram = d3.histogram()
     .value(Population)
    .domain(x.domain())
     .thresholds(x.ticks(9));





        svg.selectAll("rect") // обрашщение ко всем треугольникам/барам
            .data(Per)
            .join("rect") //Метод возвращает выборку, содержащую все соединенные элементы
            .attr("x", 5)
            .attr("transform",  `translate( 0  , ${Year} )`) // положение
            .attr("width", 40) // ширина баров
            .attr("height", 20) // высота баров
            .style("fill", "red")
    }, [])



    return(
        <div>
            <svg width={1000} height={1000}> </svg>
        </div>
    )

}

