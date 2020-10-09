let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
let req = new XMLHttpRequest()

let values = []

let xScale
let yScale

let width = 800
let height = 600
let padding = 40

let svg = d3.select('svg')

let drawCanvas = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}

let generateScales = () => {
    xScale = d3.scaleLinear()
        .domain([d3.min(values, (el) => el['Year']), d3.max(values, (el) => el['Year'])])
        .range([padding, width - padding])

    yScale = d3.scaleTime()
        .range([padding, height - padding])

}

let drawPoints = () => {
    svg.selectAll('circle')
        .data(values)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('r', '5')
        .attr('data-xvalue', (el) => el['Year'])
        .attr('data-yvalue', (el) => new Date(el['Seconds']))

}

let generateAxes = () => {
    let xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format('d'))
    let yAxis = d3.axisLeft(yScale)
    svg.append('g')
        .call(xAxis)
        .attr('id', "x-axis")
        .attr('transform', 'translate(0,' + (height - padding) + ')')
    svg.append('g')
        .call(yAxis)
        .attr('id', 'y-axis')
        .attr('transform', 'translate(' + padding + ", 0) ")
}

req.open("GET", url, true)
req.onload = () => {
    values = JSON.parse(req.responseText)
    console.log(values)
    drawCanvas()
    generateScales()
    drawPoints()
    generateAxes()
}
req.send()