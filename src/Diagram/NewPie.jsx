import React, {useEffect, useRef} from "react"
import * as d3 from 'd3'

const data =[ // массив данных
    { thing: "Pie", val: 50},
    { thing: "Pie", val: 25},
    { thing: "Pie", val: 75},
    { thing: "Pie", val: 100},
]

export default function CirclePie() {

    const pie = useRef()

    useEffect(() => {
        const piedata = d3.pie().value(elem => elem.val)(data) //обращаемся перебором к значение val


        const bublik = d3.arc().innerRadius(150).outerRadius(200) // настройки бублика: радиус внешний и внутренний
        const colors = d3.scaleOrdinal(['#1600d5','#ef1900', '#000000', '#ffcc00']) // массив цветов: выбирает сам от самого большого значения к самому маленькому(массив слева-напарво)
        const svg = d3.select(pie.current)
            .attr('width', 500)
            .attr('height', 500)
            .append('g')
            .attr('transform', 'translate(300, 300)')  // перемещение бублика в центр страницы( можно через x y)



        svg.append('rect')
            .selectAll('path')
            .data(piedata) // путь откуда берем данные
            .join('path')
            .attr('d', bublik) // --- ???
            .attr('fill',(elem,i)=> colors(i)) //   строка по заливке элеменнтов через перебор(как происходит перебор цветов?)
            .attr('stroke', 'white') // цвет границ между "значениями"





                }, [])

    return (
        <div>
            <svg ref={pie} > </svg>
            <div> что то пошло не  так </div>
        </div>
    )
}


//вопросы по строчкам: 13, 19, 22, 25, 29,