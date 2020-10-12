let url = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json'

let data
// let values
// let heightScale
// let xScale
// let xAxisScale
// let yAxisScale

// let width = 800
// let height = 600
// let padding = 40

let canvas = d3.select('#canvas')

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function intToRGB(i) {
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

let drawTreeMap = () => {
    let hierarchy = d3.hierarchy(data, (node) => node['children'])
        .sum((node) => node['value'])
        .sort((node1, node2) => node2['value'] - node1['value'])
    let createTreeMap = d3.treemap()
        .size([1000, 600])
    createTreeMap(hierarchy)
    console.log(hierarchy.leaves())
    let block = canvas.selectAll('g')
        .data(hierarchy.leaves())
        .enter()
        .append('g')
        .attr('transform', (el) => 'translate(' + el['x0'] + ', ' + el['y0'] + ')')
    block.append('rect')
        .attr('class', 'tile')
        .attr('fill', (el) => {
            let category = el['data']['category']
            console.log(category)
            return "#" + intToRGB(hashCode(category))

        })
        .attr('data-name', (el) => el['data']['name'])
        .attr('data-category', (el) => el['data']['category'])
        .attr('data-value', (el) => el['data']['name'])
        .attr('width', (el) => el['x1'] - el['x0'])
        .attr('height', (el) => el['y1'] - el['y0'])
    block.append('text')
        .text((el) => el['data']['name'])
        .attr('x', 10)
        .attr('y', 20)
}

// let generateScales = () => {

// }

// let drawBars = () => {

// }

// let generateAxes = () => {

// }

d3.json(url).then(
    (d, err) => {
        if (err) {
            console.log(err)
        } else {
            data = d
            console.log(data)
            drawTreeMap()
        }
    }
)