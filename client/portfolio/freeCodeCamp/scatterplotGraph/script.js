let url = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
let req = new XMLHttpRequest()

let values = []

let xScale
let yScale

let width = 800
let height = 600
let padding = 40

let svg = d3.select('svg')
let tooltip = d3.select('#tooltip')
let drawCanvas = () => {
    svg.attr('width', width)
    svg.attr('height', height)
}

let generateScales = () => {
    xScale = d3.scaleLinear()
        .domain([d3.min(values, (el) => el['Year']) - 2, d3.max(values, (el) => el['Year']) + 2])
        .range([padding, width - padding])

    yScale = d3.scaleTime()
        .domain([d3.min(values, (el) => new Date(el['Seconds'] * 1000)), d3.max(values, (el) => new Date(el['Seconds'] * 1000))])
        .range([padding, height - padding])

}

let drawPoints = () => {
    svg.selectAll('circle')
        .data(values)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('r', '6')
        .attr('data-xvalue', (el) => el['Year'])
        .attr('data-yvalue', (el) => new Date(el['Seconds'] * 1000))
        .attr('cx', (el) => xScale(el["Year"]))
        .attr('cy', (el) => yScale(new Date(el['Seconds'] * 1000)))
        .attr('fill', (el) => el["Doping"] != "" ? 'red' : 'white')
        .on('mouseover', (el) => {
            tooltip.transition()
                .style('visibility', 'visible')
            if (el['Doping'] != "") {
                tooltip.text("DETAILS => " + el['Year'] + ' | ' + el['Name'] + ' | ' + el['Time'] + ' | ' + el['Doping'])
            } else {
                tooltip.text("DETAILS => " + el['Year'] + ' | ' + el['Name'] + ' | ' + el['Time'] + ' | ' + "No Drugs")
            }
            tooltip.attr('data-year', el['Year'])
        })
        .on('mouseout', (el) => {
            tooltip.transition()
                .style('visibility', 'hidden')
        })
}

let generateAxes = () => {
    let xAxis = d3.axisBottom(xScale)
        .tickFormat(d3.format('d'))
    let yAxis = d3.axisLeft(yScale)
        .tickFormat(d3.timeFormat('%M:%S'))
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