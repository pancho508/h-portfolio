let req = new XMLHttpRequest()
let values, heightScale, xScale, xAxisScale, yAxisScale
let width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) * .9;
let height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) * .8;
let padding = 60
let svg = d3.select('svg')
let drawCanvas = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}
let generateScales = () => {
    heightScale = d3.scaleLinear()
        .domain([0, d3.max(values, (el) => el[1])])
        .range([0, height - (2 * padding)])
    xScale = d3.scaleLinear()
        .domain([0, values.length - 1])
        .range([padding, width - padding])
    let datesArray = values.map((el) => new Date(el[0]))
    xAxisScale = d3.scaleTime()
        .domain([d3.min(datesArray), d3.max(datesArray)])
        .range([padding, width - padding])
    yAxisScale = d3.scaleLinear()
        .domain([0, d3.max(values, (el) => el[1])])
        .range([height - padding, padding])
}
let drawBars = () => {
    let tooltip = d3.select('body')
        .append('div')
        .attr('id', 'tooltip')
        .style('visility', 'hidden')
        .style('height', 'auto')
    svg.selectAll('rect')
        .data(values)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('width', (width - (2 * padding)) / values.length)
        .attr('data-date', (el) => el[0])
        .attr('data-gdp', (el) => el[1])
        .attr('height', (el) => heightScale(el[1]))
        .attr('x', (el, id) => xScale(id))
        .attr('y', (el) => (height - padding) - heightScale(el[1]))
        .on('mouseover', (el) => {
            tooltip.transition()
                .style('visibility', 'visible')
            tooltip.text(el[0])
            document.querySelector('#tooltip')
                .setAttribute('data-date', el[0])
        })
        .on('mouseout', (el) => {
            tooltip.transition()
                .style('visibility', 'hidden')
        })
}
let generateAxes = () => {
    let xAxis = d3.axisBottom(xAxisScale)
    let yAxis = d3.axisLeft(yAxisScale)
    svg.append('g')
        .call(xAxis)
        .attr('id', 'x-axis')
        .attr('transform', 'translate(0,' + (height - padding) + ")")
    svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', 'translate(' + padding + ", 0)")
}
req.open('GET', 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json', true)
req.onload = () => {
    let data = JSON.parse(req.responseText)
    values = data.data
    drawCanvas()
    generateScales()
    drawBars()
    generateAxes()
}
req.send()