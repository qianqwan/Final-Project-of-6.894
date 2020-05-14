var w = window.innerWidth;
var h = window.innerHeight;
console.log(w,h);
var h_tagAll = 0.05 * h; 
var w_tagAll = 0.9 * w;
var n_tags = 339;
var h_tagReport =h;
var stdTxtSize = Math.round(w/200); 

var tagSlct = []; // temp tag dataset! to be replaced by passing down new set 
var gameGridSizeX;
var gameGridSizeY;

// import data 1: tagsOverview
var tagsOverview;
var steamAll;




d3.csv("data/tags_overview.csv")
.then(function(dataset){
    tagsOverview = dataset;


    //initiate tags' palette as a svg
    var svgTags = d3.select("body")
                    .append("svg")
                    .attr("id","tagsFrame")
                    .attr("width", w_tagAll)
                    .attr("height", h_tagAll);
    //initiate selected tags' place as a svg // the new Generator botton             
    var svgGenBtn = d3.select("body")
                        .append("svg")
                        .attr("id","tagsSlctFrame")
                        .attr("width", w_tagAll)
                        .attr("height", h_tagAll);

    svgTags.selectAll("rect")
            .data(tagsOverview)
            .enter()
            .append("rect")
            .attr("class","tagsAll")
            .attr("id",function(d){
                return d.tag;
            })
            .attr("x",function(d,i){
                return 0.5*(w - w_tagAll) + i * (w_tagAll / n_tags);
            })
            .attr("y", 0)
            .attr("width",w_tagAll/n_tags)
            .attr("height",0.5*h_tagAll)
            .attr("stroke","black")
            .attr("stroke-width", "1px")
            .attr("fill",function(d){
            var r_value = Math.round(Math.random()*255);
            var g_value = Math.round(Math.random()*255);
            var b_value = Math.round(Math.random()*255);
            return "rgba(" + r_value +","+ g_value +","+ b_value + ",1)";
        });

    svgGenBtn.append("g")
                .attr("id","genButton")
                .append("rect")
                .attr("x", (w - 0.05 * w_tagAll)/2)
                .attr("y", (h_tagAll - 0.5 * h_tagAll)/2)
                .attr("width", 0.05 * w_tagAll)
                .attr("height", 0.5 * h_tagAll)
                .attr("fill","white")
                .attr("stroke","black")
                .attr("stroke-width", "1px");
    svgGenBtn.select("#genButton")
                .append("text")
                .attr("x", w/2)
                .attr("y", h_tagAll/2 + 0.5*stdTxtSize)
                .attr("text-anchor", "middle")
                .attr("font-size", stdTxtSize + "px")
                .attr("fill", "black")
                .text("Generate Report")
                .style("pointer-events", "none");


    // create a refresh bottom as group of rect and text     
    // +++++++++++++++++++++++++++++++++++++++++++++++++




    // import data 2: steam standard, INSIDE data1 csv
    d3.csv("data/steam_connect_3.0.csv")
    .then(function(dataset1){
        steamAll = dataset1;
    

        // initiate the initial tag flower segment
        var svgFlower = d3.select("body")
                            .append("svg")
                            .attr("id", "tagFlower")
                            .attr("width", w)
                            .attr("height", 0.3*h);
        
        // initiate the tagreport segment 
        var svgReport = d3.select("body")
                            .append("svg")
                            .attr("id", "tagReport")
                            .attr("width", w)
                            .attr("height", h_tagReport);

 
        // start on-click color event 
        // svgTags.selectAll(".tagsAll")
        //         .on("click",function(){

        //             // get the current element's tag 
        //             var thisTag = d3.select(this).attr("id");                                   
        //             var thisColor = d3.select(this).attr("fill");                                   
        //             var randomRatio = Math.random()*500; /////////// generate a random ratio as place holder  
        //             //console.log(this);                                  
        //             var thisTagItem = tagsOverview.filter(function(d){  // find the data object with the selected id ---> as a dataset with only one object
        //                 return (d.tag == thisTag);
        //             });                                   
        //             var thisTagWeight = thisTagItem[0].tag_weight;    // bracket nomination IS SUPER!!!  // here get whatever i want 
        //             console.log(thisTagWeight);  
                                    
        //             tagSlct.push({tagName: thisTag, tagRatio: randomRatio, tagColor: thisColor, tagWeight: thisTagWeight});
        //             console.log(tagSlct);


                    // start generate report with the tagSlct selection
                    svgGenBtn.select("#genButton")
                            .on("click",function(){
                                
                                console.log(selectTags);                               
                                tagSlct = [];
                                //for(var i=0; i<selectTags.length; i++){
                                for(var i=0; i<6; i++){
                                    
                                        var thisTag = selectTags[i].tag;
                                        var thisRatio = selectTags[i].count;
                                        var thisTagItem = tagsOverview.filter(function(d){  // find the data object with the selected id ---> as a dataset with only one object
                                                                          return (d.tag == thisTag);
                                                                       });  
                                        var thisTagWeight = thisTagItem[0].tag_weight;    // bracket nomination IS SUPER!!!  // here get whatever i want 
                                          //             console.log(thisTagWeight);  
                                        var thisColor;
                                        svgTags.selectAll("rect").each(function(){
                                        if (d3.select(this).attr("id") == thisTag){
                                            thisColor = d3.select(this).attr("fill");
                                        }else{
                                            var r_value0 = Math.round(Math.random()*255);
                                            var g_value0 = Math.round(Math.random()*255);
                                            var b_value0 = Math.round(Math.random()*255);
                                            thisColor = "rgba(" + r_value0 +","+ g_value0 +","+ b_value0 + ",1)";
                                        }
                                        })
                                        
                                        tagSlct.push({tagName: thisTag, tagRatio: thisRatio, tagColor: thisColor, tagWeight: thisTagWeight});                                 

                                }                             
                                console.log(tagSlct);



                                //PART I: generate the svg flower
                                // clean the previous display
                                svgFlower.selectAll(".flower").remove();
                                svgReport.selectAll(".gameDisplay").remove();
                                svgReport.selectAll(".label").remove();
                                svgReport.selectAll(".gameFlower").remove();
                                

                                var tagDisp = tagSlct;  // pass the current seleted tag name to a new dataset                                         
                                var weightMax = d3.max(tagDisp,function(d){return +d.tagWeight;}); /////note to add ++++++ here!!!!!! the d.tagWeight does not return numeric value Fxxk
                                
                                // create current tag flower
                                var pie_0 = d3.pie()
                                                .value(function(d){
                                                    return d.tagRatio;
                                                });
                                var arc_0 = d3.arc()
                                            //.innerRadius(0.8*0.5*0.25*h)
                                            //.outerRadius(0.5*0.25*h);
                                            .innerRadius(function(d,i){
                                                return 0.6*d.data.tagWeight*0.5*0.25*h/weightMax ;
                                            })
                                            .outerRadius(function(d,i){
                                                return d.data.tagWeight*0.5*0.25*h/weightMax ;
                                            });

                                var arcTag_0 = svgFlower.selectAll("g.flower")
                                                        .data(pie_0(tagDisp))
                                                        .enter()
                                                        .append("g")
                                                        .attr("class","flower")
                                                        .attr("transform", "translate(" + 0.5*w + "," + 0.5*0.3*h + ")");
                                
                                //console.log(pie_0(tagDisp));
                                
                                arcTag_0.append("path")
                                        .attr("fill",function(d){
                                            return d.data.tagColor;  // note: must add .data because each d here is an object, data{} is one of the attributes, pass twice
                                        })
                                        .attr("d", function(d,i){
                                            return arc_0(d,i);
                                        });
                                arcTag_0.append("text")
                                        .attr("transform", function(d){
                                            return "translate(" + arc_0.centroid(d) + ")"
                                        })
                                        .attr("text-anchor", "middle")
                                        .attr("font-size", stdTxtSize + "px")
                                        .attr("fill", "white")
                                        .text(function(d){
                                            return d.data.tagName;
                                        });





                                // PART II  generate the filtered game object set: judge if there is intersection btw two dataset
                                // filter dataset to be displayed 
                                var chosenTagName = [];
                                    for (var i = 0; i < tagDisp.length; i++){
                                        chosenTagName.push(tagDisp[i].tagName);
                                    };
                                    console.log(chosenTagName);
                                var gameDisp_0 = steamAll.filter(function(d){
                                    var gameTagName = [d.t1, d.t2, d.t3, d.t4, d.t5,d.t6]; // could add more tages for increased accuracy 
                                    var tagNameIntsct = gameTagName.filter(function(v){return chosenTagName.indexOf(v) > -1;})
                                    if (tagNameIntsct.length === 0){
                                        return false;
                                    }else{
                                        return true;
                                    }
                                });
                                gameDisp = gameDisp_0.filter(function(d){  // add a new filter here, delete owners less than 20000
                                    if (d.owners === "0-20000" || d.median_playtime === 0 || d.positive_ratings < 1000){
                                        return false;
                                    }else{
                                        return true;
                                    }
                                })
                                //console.log(gameDisp);

                                // get the current year demension of gameDisp
                                var yearDimension = []
                                for (var i=0; i<gameDisp.length; i++){
                                    yearDimension.push(gameDisp[i].release_year);
                                }
                                console.log(yearDimension);
                                function getYearCnt(dataset2){
                                    var obj = {};
                                    for(var i=0, l=dataset2.length; i<l; i++){
                                        var item = dataset2[i];
                                        obj[item] = (obj[item] + 1) || 1; // magic orz..
                                    }
                                    return obj;
                                }
                                var yearCount = getYearCnt(yearDimension);
                                console.log(yearCount);

                                var yearCountArr = Object.keys(yearCount).map(function(key){
                                    return [Number(key),yearCount[key]];
                                });
                                console.log(yearCountArr);
                                //for (var i=0; i<yearCountArr.length; i++){}
                                var yearMostCnt = d3.max(yearCountArr,function(d){return +d[1];});
                                var lastYear = d3.max(yearCountArr,function(d){return +d[0];});
                                var firstYear = d3.min(yearCountArr,function(d){return +d[0];});
                                console.log("yearMostCnt:" + yearMostCnt + "  ;lastYear:" + lastYear + "  ;firstYear:" + firstYear);
                                

                                //define the report view! 
                                gameGridSizeX = (w - 0.2*w) / (lastYear - firstYear +1); 
                                gameGridSizeY = (h_tagReport - 0.1*h) / yearMostCnt;
                                
                                var yPos = [];
                                for (var i = firstYear; i<(lastYear+1); i++){
                                    yPos.push({year : i, yCounter : 0});
                                }
                            
                                // generate report circles
                                // svgReport.selectAll("circle")
                                //          .data(gameDisp)
                                //          .enter()
                                //          .append("circle")
                                //          .attr("class","gameDisplay")
                                //          .attr("cx",function(d,i){
                                //              return (+d.release_year - firstYear)*gameGridSizeX + 0.5*0.2*w;
                                //          })
                                //          .attr("cy",function(d,i){
                                //             var thisYear = +d.release_year ;
                                //             var index = yPos.map(item => item.year).indexOf(thisYear);
                                //             yPos[index].yCounter = yPos[index].yCounter + 1;
                                //             return (yPos[index].yCounter-1)*gameGridSizeY + 0.5*0.1*h;
                                //          })
                                //          .attr("r", function(d){
                                //              return (gameGridSizeY*d.tag_sum/10000 + 0.2*gameGridSizeY);
                                //          })
                                //          .attr("fill","black");


                                // generate flower pie for each game displayed 
                                svgReport.selectAll("g.gameFlower")
                                            .data(gameDisp)
                                            .enter()
                                            .append("g")
                                            .attr("class","gameFlower")
                                            .attr("id", function(d){
                                                return d.appid;
                                            })
                                            .attr("transform", function(d,i){
                                            var thisYear = +d.release_year ;
                                            var index = yPos.map(item => item.year).indexOf(thisYear);
                                            yPos[index].yCounter = yPos[index].yCounter + 1; 
                                            
                                            return "translate("+ ((+d.release_year - firstYear)*gameGridSizeX + 0.5*0.2*w) + "," + ((yPos[index].yCounter-1)*gameGridSizeY + 0.1*h) + ")";
                                            })
                                svgReport.selectAll("g.gameFlower")
                                            .each(function(d,i){
                                            
                                            
                                            // prepare subset for each flower 
                                  
                                            var flowerEach = [{tagName0: d.t1, tagRatio0: +d.t1_num}, 
                                                                {tagName0: d.t2, tagRatio0: +d.t2_num},
                                                                {tagName0: d.t3, tagRatio0: +d.t3_num}, 
                                                                {tagName0: d.t4, tagRatio0: +d.t4_num}, 
                                                                {tagName0: d.t5, tagRatio0: +d.t5_num},
                                                                {tagName0: d.t6, tagRatio0: +d.t6_num}];
                                                                //{tagName0: "rest", tagRatio0: tag_rest}];   ///----> change to object and chill later 

                                            // get tag popularity & tag color
                                            flowerEach.forEach(function(element){
                                                thisTagName = element.tagName0;
                                                thisTagSearch = tagsOverview.filter(function(d6){
                                                    return (d6.tag == thisTagName);
                                                })                                                                
                                                // because some tags don't have match in tagsOverview.csv
                                                if (thisTagSearch.length === 0){
                                                    element.tagWeight0 = 50; /////// ++++++ magic const here, need further checkout!
                                                }else{
                                                    element.tagWeight0 = thisTagSearch[0].tag_weight;
                                                }
                                            
                                                svgTags.selectAll("rect").each(function(d7){
                                                    if (d3.select(this).attr("id") == thisTagName){
                                                        element.tagColor0 = d3.select(this).attr("fill");
                                                    };
                                                })
                                        
                                            });
                                            //console.log(flowerEach);
                                            //get tag color 
                                            
                                            
                                        
                                            var pie = d3.pie()
                                                        .value(function(d5){
                                                            return d5.tagRatio0;
                                                        });
                                            //var outR = gameGridSizeY*d.tag_sum/10000 + 0.2*gameGridSizeY;
                                            var outR = 0.25*gameGridSizeY*(1 + Math.pow(d.tag_sum,1/1.8)/10);
                                            //var outR = 0.5*gameGridSizeY;
                                            var inR = 0.5*outR;
                                            var arc = d3.arc()
                                                        .innerRadius(function(d8,i8){
                                                            return (Math.pow(d8.data.tagWeight0,1/2) * inR / 25); /// need further check the scale !! 
                                                        })
                                                        .outerRadius(function(d9,i9){
                                                            return (Math.pow(d9.data.tagWeight0,1/2) * outR/ 25);
                                                        });
                            
                                                        
                                                        
                                            //draw the path 
                                            d3.select(this)
                                            //    .append("circle")
                                            //    .attr("cx", 0)
                                            //    .attr("cy", 0)
                                            //    .attr("r", function(d){
                                            //        return (gameGridSizeY*d.tag_sum/10000 + 0.2*gameGridSizeY);
                                            //     })
                                            //    .attr("fill","black");
                                                .selectAll("path")
                                                .data(pie(flowerEach))
                                                .enter()
                                                .append("path")
                                                .attr("id", function(d2,i2){
                                                    return d2.data.tagName0;
                                                })
                                                .attr("fill", function(d){
                                                    return d.data.tagColor0;
                                                })
                                                .attr("d", function(d4,i4){
                                                    return arc(d4,i4);
                                                });

                                            })


                                // the svg report labels
                                var yearLabels = svgReport.selectAll("g.label")
                                                            .data(yPos)
                                                            .enter()
                                                            .append("g")
                                                            .attr("class","label")
                                                            .attr("transform", "translate(" + 0 + "," + 0.8*0.1*h + ")")
                                yearLabels.append("text")
                                            .attr("x", function(d){
                                                return (+d.year - firstYear)*gameGridSizeX + 0.5*0.2*w; 
                                            })
                                            .attr("y", 0)
                                            .attr("text-anchor", "middle")
                                            .attr("font-size", stdTxtSize + "px")
                                            .attr("fill", "white")
                                            .text(function(d){
                                                return d.year;
                                            })
                                            .style("pointer-events", "none");


                            })

                            svgReport.selectAll("g.gameFlower")
                                     .on("mouseover",function(d){
                                        var coordinates = d3.mouse(this);
                                        var xPosition = coordinates[0];
                                        var yPosition = coordinates[1];

                                        console.log(xPosition, yPosition);







                                     })




                })
                    


    })



// })