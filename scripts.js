// Manipulating the DOM using d3.js ======>

// d3.select('h1').style('color', 'red')
// .attr('class', 'heading')
// .text('Updated h1 tag')

// d3.select('body').append('p').text('Hi this is first paragraph')
// d3.select('body').append('p').text('Hi this is second paragraph')

// d3.selectAll('p').style('color', 'blue')


// Data loading and binding ======>

// let dataset = [1, 2, 3, 4, 5]

// d3.select('body')
//     .selectAll('p') // select all p tags (don't exist)
//     .data(dataset) // pass in dataset
//     .enter() // take data items one by one
//     .append('p') // each data item we append a p tag
//     .text('Awesome!') // add 'Awesome' text
//     .text(function(d) { // update text by creating function and getting value of data in parameter
//         return d;
//     })

// Bar chart in d3.js ======>

var dataset = [80, 100, 20, 30, 60, 120, 160] // Naming to barDataset does not work

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth/dataset.length)

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight)

var barChart = svg.selectAll('rect') // return empty selection
    .data(dataset) // provide dataset
    .enter() // enter method takes dataset for each item
    .append('rect') // for each we append
    .attr('y', function(d) { // provide y for height. Takes data in parameter
        return svgHeight - d
    })
    .attr('height', function(d) {
        return d
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d, i) {
        var translate = [barWidth * i, 0]
        return "translate(" + translate + ")"
    })


// Creating Labels ======>

var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
        return d // want text to be number 
    })
    .attr('y', function(d, i) {
        return svgHeight - d - 2 // text to be higher than bar (that's why -2)
    })
    .attr('x', function(d, i) { // starting point of each rectangle
        return barWidth * i // get it by using values of barWidth and index of the data element
    })
    .attr('fill', "#A64C38")


// SVG Elements ======>

var svgEWidth = 600, svgEHeight = 500;

var svg = d3.select('.svg-element')
    .attr('width', svgEWidth)
    .attr('height', svgEHeight)
    .attr('class', 'svg-element')

var line = svg.append('line')
    .attr('x1', 100) // starting points are (x1, y1), ending points are (x2, y2)
    .attr('x2', 500)
    .attr('y1', 50)
    .attr('y2', 50)
    .attr('stroke', 'red')
    .attr('stroke-width', 5)

var rect = svg.append('rect')
    .attr('x', 100)
    .attr('y', 100)
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', '#9B95FF')

var circle = svg.append('circle')
    .attr('cx', 200) // coordinates for center of circle are (cx, cy)
    .attr('cy', 300) 
    .attr('r', 80) // radius of circle
    .attr('fill', '#7CE8D5')


// https://www.youtube.com/watch?v=C4t6qfHZ6Tw&ab_channel=freeCodeCamp.org