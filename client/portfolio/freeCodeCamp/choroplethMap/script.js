let countyURL = "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"
let educationalURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json'

let countyData
let educationalData

let canvas = d3.select('#canvas')
let tooltip = d3.select('#tooltip')

let drawMap = () => {
    canvas.selectAll('path')
        .data(countyData)
        .enter()
        .append('path')
        .attr('d', d3.geoPath())
        .attr('class', 'county')
        .attr('fill', (countyEl) => {
            let id = countyEl['id']
            let county = educationalData.find((el) => el['fips'] === id)
            let percentage = county['bachelorsOrHigher']
            //average ppl with degree 33.4 percent
            return percentage > 33 ? "RGBA(255,50,50,." + Math.floor(percentage) + ")" : "RGBA(50,50,255,." + Math.floor(percentage) + ")"
        })
        .attr('data-fips', (el) => el['id'])
        .attr('data-education', (countyEl) => {
            let id = countyEl['id']
            let county = educationalData.find((el) => el['fips'] === id)
            let percentage = county['bachelorsOrHigher']
            console.log(percentage)
            return percentage
        })
        .on('mouseover', (countyEl) => {
            tooltip.transition()
                .style('visibility', 'visible')
            let id = countyEl['id']
            let county = educationalData.find((el) => el['fips'] === id)

            tooltip.text(county['fips'] + ' - ' + county['area_name'] + ', ' +
                county['state'] + ' : ' + county['bachelorsOrHigher'] + '%')

            tooltip.attr('data-education', county['bachelorsOrHigher'])
        })

        .on('mouseout', (countyEl) => {
            tooltip.transition()
                .style('visibility', 'hidden')
        })

}
d3.json(countyURL)
    .then((data, err) => {
        if (err) {
            console.log(log)
        } else {
            countyData = topojson.feature(data, data.objects.counties).features
            console.log(countyData)

            d3.json(educationalURL)
                .then((data, err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        educationalData = data
                        console.log(educationalData)
                        drawMap()
                    }
                })

        }
    })

