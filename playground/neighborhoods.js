const svg = d3.select("svg")

svg.attr("viewBox", "0 0 1000 600")

const worldGroup = svg.append("g")
const projection = d3.geoAlbers()
    .scale( 190000 )
    .rotate( [71.057,0] )
    .center( [0, 42.313] )
    .translate( [500,300] );

const mapGenerator = d3.geoPath()
  .projection(projection)

  const colorScale = d3.scaleSequential(d3.interpolateMagma)
    .domain([65000, 0])

  const scrollScale = d3.scaleLinear()
    .domain([0, 400, 10000])
    .range([-1, 6000, 55000])
    .clamp(true)

d3.json("databoston.json").then(function(data) {
  console.log(data.length)
  d3.json("boston_neighborhoods.json").then(function(mapData){

    worldGroup
      .selectAll("path")
      .data(mapData.features)
      .enter()
      .append("path")
      .attr("d", mapGenerator)
      .style("fill", (d, i) => {
        const neighborhood = data.find((neighborhood) => { return neighborhood.name == d.properties.Name })

        if (neighborhood) {
          return colorScale(neighborhood.density)
        } else {
          return "#111111"
        }
      })

    window.addEventListener("scroll", function() {
      const pixels = window.pageYOffset
      const threshold = scrollScale(pixels)


      const format = d3.format(".1f")
      d3.select("span.counter").text(format(threshold / 1000))

      worldGroup
        .selectAll("path")
        .style("fill", (d, i) => {
          const neighborhood = data.find((neighborhood) => { return neighborhood.name == d.properties.Name })

          if (neighborhood && neighborhood.density > threshold) {
            return colorScale(neighborhood.density)
          } else {
            return "#111111"
          }
        })
    })
  })
})
