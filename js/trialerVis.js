//helper
function RGBToHex(r,g,b) {
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  return "#" + r + g + b;
}

var width = 1000
height = 150
frames = 600
var Vids = [{title: "Portal2",key: "f1"},{title: "Sekiro",key: "f2"},{title: "Warframe",key: "f3"},{title: "H1Z1",key: "f4"},{title: "CS",key: "f5"}]
var cVids = d3.select("select.Vids")
    .on("change", function(d){
      $("div").empty();
      d3.csv("data/" + this.value + ".csv", plot)})

d3.csv("data/" + Vids[0].key + ".csv", plot)
function plot(data){
  var value = document.querySelector("select").value
  var vid = Vids.find(function(d){return d.key == value})
  vid.data = data
  var vidcontainer = d3.select('.vis')
  .append('video')
  .attr("width",150)
  var cursor = d3.select('.vis')
  .append('svg')
  .attr("class","tooltip")
  d3.select("video")
  .attr("src", "data/" + vid.key + ".mp4")
  d3.select(".vis")
      .datum(vid)
      .call(main)
}
function main(option){
  var $vid = document.querySelector("video")
  option.each(function(vid){
    
    var keys = vid.data.columns.slice(1)
    var stackData= d3.stack()
        .keys(keys)
        .order(d3.stackOrderReverse)(vid.data)

    HEX1=[]
    // console.log(keys)
    for (i=0;i<keys.length;i++){
    tempint = parseInt(keys[i]) / 100
    var digit100 = tempint.toString()[0]
    var digit10 = tempint.toString()[2] 
    var digit1 = tempint.toString()[3]
    if (digit100 == null){
    digit100 = 0
    }
    if (digit10 == null){
    digit10 = 0
    }
    if (digit1 == null){
    digit1 = 0
    }0
    temphex=RGBToHex(parseInt(digit100)*26,parseInt(digit10)*26,parseInt(digit1)*26)
    HEX1.push(temphex)
    }
    var item = this
    var color = d3.scaleOrdinal()
            .domain(keys)
            .range(HEX1)
    var ones = d3.range(0, stackData[0].length, frames).map(function(f,i){
      var stk = stackData.map(function(layer){
        var layertemp = layer.slice(f, f + frames)
        layertemp.key = layer.key
        return layertemp
      })
      return {
        data: stk,
        offset: f
      }
    })
    var x = d3.scaleLinear()
        .domain([0, frames])
        .range([0, width])
    var y = d3.scaleLinear()
        .domain([
          d3.min(stackData, d => d3.min(d, d => d[0])),
          d3.max(stackData, d => d3.max(d, d => d[1]))])
        .range([height, 0])
    var lyrs = d3.select(this).selectAll(".lyrs").data(ones)
    lyrs = lyrs.enter().append("lyrs")
        .attr("class", "lyrs")
        .html(`
        <svg></svg>
        <div></div>
        `)
    lyrs.select("div")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("width", width)
    .style("height", 90)
    var tooltip = d3.select(this).select(".tooltip")
      .attr("width", 0)
      .attr("height", height)
    var myarea = d3.area()
      .x(function(d, i) { return x(i); })
      .y0(function(d) { return y(d[0]); })
      .y1(function(d) { return y(d[1]); })
    lyrs.select("svg")
        .attr("width", width)
        .attr("height", height)
        .style("width", width)
        .style("height", height)
        .attr("class", function(d,i){return "g" + i})
        .each(function(one,i){
          // console.log(one)
          var thumb = lyrs.select(".g"+i)
                          .attr("width", width)
                          .attr("height", height)
                          .attr("class","svgcontainer")
          var thumb2 = thumb.selectAll("path").data(one.data)
              thumb2.exit().remove()
          var thumb3 = thumb2.enter()
                          .append("path")
                          .attr("class", "myArea")
                          .style("fill", function(d){return color(d.key)})
                          .attr("d", myarea)
                          .style("stroke","none")
                          .on("mouseover",function(d){
                            d3.select(this)
                              .style("stroke", "white")
                              .style("fill","white")
                              .style("opacity", 1)})
                          .on("mouseleave",function(d){
                            d3.selectAll(".myArea").style("opacity", 1).style("fill", function(d){return color(d.key)}).style("stroke", "none")})
          })
          //helper
        .on("mouseenter", function(d){$vid.style.display = "block"})
        .on("mouseleave", function(d){ $vid.style.display = "none";})
        .on("mousemove", function(d,i){
          var xPos = Math.round(x.invert(d3.mouse(this)[0]))          
          var t = xPos/23.98 + d.offset/23.98//frs
          $vid.currentTime = t
          $vid.style.top = -87+(250*i)+"px"
          $vid.style.left = d3.mouse(item)[0] - $vid.width/2 + "px"
          // console.log(i)
          var rect = tooltip
              .style("left", d3.mouse(item)[0] + "px")
              .style("top", -87+(250*i)+$vid.offsetHeight + "px")
            })
            })
}
