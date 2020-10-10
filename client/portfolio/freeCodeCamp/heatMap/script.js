let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
let req = new XMLHttpRequest()
let baseTemp
let values
let xScale
let yScale
let minYear
let maxYear
let width = 1200
let height = 600
let padding = 60

let canvas = d3.select('#canvas')
canvas.attr('width', width)
canvas.attr('height', height)
let tooltip = d3.select('#tooltip')
let generateScales = () => {
    minYear = d3.min(values, (el) => el['year'])
    maxYear = d3.max(values, (el) => el['year'])
    xScale = d3.scaleLinear()
        .domain([minYear, maxYear + 1])
        .range([padding, width - padding])
    yScale = d3.scaleTime()
        .domain([new Date(0, 0, 0, 0, 0, 0, 0), new Date(0, 12, 0, 0, 0, 0, 0)])
        .range([padding, height - padding])

}

let drawCells = () => {
    canvas.selectAll('rect')
        .data(values)
        .enter()
        .append('rect')
        .attr('class', 'cell')
        .attr('fill', (el) => {
            if (el['variance'] < -1) {
                return 'SteelBlue'
            } else if (el['variance'] < 0) {
                return 'LightSteelBlue'
            } else if (el['variance'] < 1) {
                return 'Orange'
            } else {
                return 'Red'
            }
        })
        .attr('data-year', (el) => el['year'])
        .attr('data-month', (el) => el['month'] - 1)
        .attr('data-temp', (el) => baseTemp + el['variance'])
        .attr('height', (height - (2 * padding)) / 12)
        .attr('y', (el) => yScale(new Date(0, el['month'] - 1, 0, 0, 0, 0, 0)))
        .attr('width', (el) => {
            return (width - 2 * padding) / (maxYear - minYear)
        })
        .attr('x', (el) => xScale(el['year']))
        .on('mouseover', (el) => {
            tooltip.transition()
                .style('visibility', 'visible')
            let monthNames = [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]
            tooltip.text(el['year'] + ' ' + monthNames[el["month"] - 1] + ' - ' + (baseTemp + el['variance']) + ' (' + item['variance'] + ")")
            tooltip.attr('data-year', 'hidden')
        })
        .on('mouseout', (el) => {
            tooltip.transition()
                .style('visibility', 'hidden')
        })
}

let drawAxes = () => {
    let xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format('d'))
    let yAxis = d3.axisLeft(yScale)
        .tickFormat(d3.timeFormat('%B'))
    canvas.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0,' + (height - padding) + ")")
    canvas.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', 'translate(' + padding + ", 0)")
}

req.open('GET', url, true)
req.onload = () => {
    let obj = JSON.parse(req.responseText)
    baseTemp = obj['baseTemperature']
    values = obj['monthlyVariance']
    console.log('baseTemp', baseTemp)
    console.log("values", values)
    generateScales()
    drawCells()
    drawAxes()


}
req.send()