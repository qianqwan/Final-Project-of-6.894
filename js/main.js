var gameArr1 = [];
var numbers1 = [];
var gameArr2 = [];
var numbers2 = [];
var gameArr3 = [];
var numbers3 = [];
var gameArr4 = [];
var numbers4 = [];
var gameArr5 = [];
var numbers5 = [];
var tags1, tags2, tags3, tags4, tags5 = {
    "game1": [],
    "game2": [],
    "game3": [],
    "game4": [],
    "allgames": []
}
var index = 1;
var selection = [0, 0, 0, 0, 0];
var selectGames = [];
var allTags = [];
var gameArray;
var selectTags = [];

$(document).ready(function() {
    $("#game_pic_1").click(function() {
        if ($(this).parent().find(".dele_pic").css("display") == "none") {
            $(".dele_pic").hide();
            $(".pic_grid_item").css("border-color", "#fff");
            $(this).parent().css("border-color", "#33FF00").find(".dele_pic").show();


            if (index == 1) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags1["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags1["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags1["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags1["game4"]);
                    }
                }
                addSelectTags(tags1["game1"]);
            } else if (index == 2) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags2["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags2["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags2["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags2["game4"]);
                    }
                }
                addSelectTags(tags2["game1"]);
            } else if (index == 3) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags3["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags3["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags3["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags3["game4"]);
                    }
                }
                addSelectTags(tags3["game1"]);
            } else if (index == 4) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags4["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags4["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags4["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags4["game4"]);
                    }
                }
                addSelectTags(tags4["game1"]);
            } else if (index == 5) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags5["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags5["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags5["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags5["game4"]);
                    }
                }
                addSelectTags(tags5["game1"]);
            }

            selection[index] = 1;
        } else {
            $(this).parent().css("border-color", "#fff").find(".dele_pic").hide();

            selection[index] = 0;
            if (index == 1) {
                removeSelectTags(tags1["game1"]);
            } else if (index == 2) {
                removeSelectTags(tags2["game1"]);
            } else if (index == 3) {
                removeSelectTags(tags3["game1"]);
            } else if (index == 4) {
                removeSelectTags(tags4["game1"]);
            } else if (index == 5) {
                removeSelectTags(tags5["game1"]);
            }


        }
    })

    $("#game_pic_2").click(function() {
        if ($(this).parent().find(".dele_pic").css("display") == "none") {
            $(".dele_pic").hide();
            $(".pic_grid_item").css("border-color", "#fff");
            $(this).parent().css("border-color", "#33FF00").find(".dele_pic").show();


            if (index == 1) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags1["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags1["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags1["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags1["game4"]);
                    }
                }
                addSelectTags(tags1["game2"]);
            } else if (index == 2) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags2["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags2["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags2["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags2["game4"]);
                    }
                }
                addSelectTags(tags2["game2"]);
            } else if (index == 3) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags3["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags3["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags3["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags3["game4"]);
                    }
                }
                addSelectTags(tags3["game2"]);
            } else if (index == 4) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags4["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags4["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags4["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags4["game4"]);
                    }
                }
                addSelectTags(tags4["game2"]);
            } else if (index == 5) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags5["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags5["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags5["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags5["game4"]);
                    }
                }
                addSelectTags(tags5["game2"]);
            }

            selection[index] = 2;
        } else {
            $(this).parent().css("border-color", "#fff").find(".dele_pic").hide();
            selection[index] = 0;

            if (index == 1) {
                removeSelectTags(tags1["game2"]);
            } else if (index == 2) {
                removeSelectTags(tags2["game2"]);
            } else if (index == 3) {
                removeSelectTags(tags3["game2"]);
            } else if (index == 4) {
                removeSelectTags(tags4["game2"]);
            } else if (index == 5) {
                removeSelectTags(tags5["game2"]);
            }
        }
    })

    $("#game_pic_3").click(function() {
        if ($(this).parent().find(".dele_pic").css("display") == "none") {
            $(".dele_pic").hide();
            $(".pic_grid_item").css("border-color", "#fff");
            $(this).parent().css("border-color", "#33FF00").find(".dele_pic").show();


            if (index == 1) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags1["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags1["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags1["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags1["game4"]);
                    }
                }
                addSelectTags(tags1["game3"]);
            } else if (index == 2) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags2["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags2["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags2["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags2["game4"]);
                    }
                }
                addSelectTags(tags2["game3"]);
            } else if (index == 3) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags3["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags3["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags3["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags3["game4"]);
                    }
                }
                addSelectTags(tags3["game3"]);
            } else if (index == 4) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags4["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags4["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags4["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags4["game4"]);
                    }
                }
                addSelectTags(tags4["game3"]);
            } else if (index == 5) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags5["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags5["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags5["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags5["game4"]);
                    }
                }
                addSelectTags(tags5["game3"]);
            }

            selection[index] = 3;
        } else {
            $(this).parent().css("border-color", "#fff").find(".dele_pic").hide();
            selection[index] = 0;

            if (index == 1) {
                removeSelectTags(tags1["game3"]);
            } else if (index == 2) {
                removeSelectTags(tags2["game3"]);
            } else if (index == 3) {
                removeSelectTags(tags3["game3"]);
            } else if (index == 4) {
                removeSelectTags(tags4["game3"]);
            } else if (index == 5) {
                removeSelectTags(tags5["game3"]);
            }
        }
    })

    $("#game_pic_4").click(function() {
        if ($(this).parent().find(".dele_pic").css("display") == "none") {
            $(".dele_pic").hide();
            $(".pic_grid_item").css("border-color", "#fff");
            $(this).parent().css("border-color", "#33FF00").find(".dele_pic").show();


            if (index == 1) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags1["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags1["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags1["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags1["game4"]);
                    }
                }
                addSelectTags(tags1["game4"]);
            } else if (index == 2) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags2["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags2["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags2["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags2["game4"]);
                    }
                }
                addSelectTags(tags2["game4"]);
            } else if (index == 3) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags3["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags3["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags3["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags3["game4"]);
                    }
                }
                addSelectTags(tags3["game4"]);
            } else if (index == 4) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags4["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags4["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags4["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags4["game4"]);
                    }
                }
                addSelectTags(tags4["game4"]);
            } else if (index == 5) {
                if (selection[index] != 0) {
                    if (selection[index] == 1) {
                        removeSelectTags(tags5["game1"]);
                    } else if (selection[index] == 2) {
                        removeSelectTags(tags5["game2"]);
                    } else if (selection[index] == 3) {
                        removeSelectTags(tags5["game3"]);
                    } else if (selection[index] == 4) {
                        removeSelectTags(tags5["game4"]);
                    }
                }
                addSelectTags(tags5["game4"]);
            }

            selection[index] = 4;
        } else {
            $(this).parent().css("border-color", "#fff").find(".dele_pic").hide();
            selection[index] = 0;

            if (index == 1) {
                removeSelectTags(tags1["game4"]);
            } else if (index == 2) {
                removeSelectTags(tags2["game4"]);
            } else if (index == 3) {
                removeSelectTags(tags3["game4"]);
            } else if (index == 4) {
                removeSelectTags(tags4["game4"]);
            } else if (index == 5) {
                removeSelectTags(tags5["game4"]);
            }
        }
    })

    function addSelectTags(tempTags) {
        tempTags.forEach(tempTag => {
            var contains = false;
            for (let index = 0; index < selectTags.length; index++) {
                var element = selectTags[index];
                if (element.tag == tempTag) {
                    contains = true;
                    element.count++;
                    break;
                }
            }
            if (!contains) {
                selectTags.push({
                    "tag": tempTag,
                    "count": 1
                });
                if (allTags.indexOf(tempTag) != -1) {
                    let i = allTags.indexOf(tempTag)
                    allTags.splice(i, 1)

                    $("#tag_list").empty();
                    selectTags.sort(tagCompare);
                    selectTags.forEach(element => {
                        $("#tag_list").append(" <div id=" + element.tag + " class='select_tag'>" + element.tag + "(" + element.count + ")</div>");
                    });
                    allTags.forEach(element => {
                        $("#tag_list").append(" <div id=" + element + " class='tag'>" + element + "</div>");
                    });
                }
            }
        });
    }

    function removeSelectTags(tempTags) {
        tempTags.forEach(tempTag => {
            for (let index = 0; index < selectTags.length; index++) {
                var element = selectTags[index];
                if (element.tag == tempTag) {
                    element.count--;
                    if (element.count == 0) {
                        selectTags.splice(index, 1);
                        index--;

                        if (allTags.indexOf(tempTag) == -1) {
                            allTags.push(tempTag);

                            $("#tag_list").empty();
                            selectTags.sort(tagCompare);
                            selectTags.forEach(element => {
                                $("#tag_list").append(" <div id=" + element.tag + " class='select_tag'>" + element.tag + "(" + element.count + ")</div>");
                            });
                            allTags.forEach(element => {
                                $("#tag_list").append(" <div id=" + element + " class='tag'>" + element + "</div>");
                            });
                        }
                    }
                }
            }
        })
    }

    function getRandomGames() {
        d3.csv("data/steam_media_data.csv").then(function(data) {
            numbers1 = randomNums(4, 0, data.length);
            numbers2 = randomNums(4, 0, data.length);
            numbers3 = randomNums(4, 0, data.length);
            numbers4 = randomNums(4, 0, data.length);
            numbers5 = randomNums(4, 0, data.length);
            for (let index = 0; index < 4; index++) {
                const element = numbers1[index];
                gameArr1.push(data[element]);
            }
            for (let index = 0; index < 4; index++) {
                const element = numbers2[index];
                gameArr2.push(data[element]);
            }
            for (let index = 0; index < 4; index++) {
                const element = numbers3[index];
                gameArr3.push(data[element]);
            }
            for (let index = 0; index < 4; index++) {
                const element = numbers4[index];
                gameArr4.push(data[element]);
            }
            for (let index = 0; index < 4; index++) {
                const element = numbers5[index];
                gameArr5.push(data[element]);
            }

            d3.csv("data/steamspy_tag_data.csv").then(function(data) {
                var all1Games = [];
                var element11 = data[numbers1[0]];
                var index1game1Tags = getTopTags(element11);
                index1game1Tags.forEach(element => {
                    if (all1Games.indexOf(element) == -1) {
                        all1Games.push(element);
                    }
                });

                var element12 = data[numbers1[1]];
                var index1game2Tags = getTopTags(element12);
                index1game2Tags.forEach(element => {
                    if (all1Games.indexOf(element) == -1) {
                        all1Games.push(element);
                    }
                });

                var element13 = data[numbers1[2]];
                var index1game3Tags = getTopTags(element13);
                index1game3Tags.forEach(element => {
                    if (all1Games.indexOf(element) == -1) {
                        all1Games.push(element);
                    }
                });

                var element14 = data[numbers1[3]];
                var index1game4Tags = getTopTags(element14);
                index1game4Tags.forEach(element => {
                    if (all1Games.indexOf(element) == -1) {
                        all1Games.push(element);
                    }
                });

                tags1 = {
                    "game1": index1game1Tags,
                    "game2": index1game2Tags,
                    "game3": index1game3Tags,
                    "game4": index1game4Tags,
                    "allgames": all1Games
                }

                var all2Games = [];
                var element21 = data[numbers2[0]];
                var index2game1Tags = getTopTags(element21);
                index2game1Tags.forEach(element => {
                    if (all2Games.indexOf(element) == -1) {
                        all2Games.push(element);
                    }
                });

                var element22 = data[numbers2[1]];
                var index2game2Tags = getTopTags(element22);
                index2game2Tags.forEach(element => {
                    if (all2Games.indexOf(element) == -1) {
                        all2Games.push(element);
                    }
                });


                var element23 = data[numbers2[2]];
                var index2game3Tags = getTopTags(element23);
                index2game3Tags.forEach(element => {
                    if (all2Games.indexOf(element) == -1) {
                        all2Games.push(element);
                    }
                });

                var element24 = data[numbers2[3]];
                var index2game4Tags = getTopTags(element24);
                index2game4Tags.forEach(element => {
                    if (all2Games.indexOf(element) == -1) {
                        all2Games.push(element);
                    }
                });

                tags2 = {
                    "game1": index2game1Tags,
                    "game2": index2game2Tags,
                    "game3": index2game3Tags,
                    "game4": index2game4Tags,
                    "allgames": all2Games
                }

                var all3Games = [];
                var element31 = data[numbers3[0]];
                var index3game1Tags = getTopTags(element31);
                index3game1Tags.forEach(element => {
                    if (all3Games.indexOf(element) == -1) {
                        all3Games.push(element);
                    }
                });

                var element32 = data[numbers3[1]];
                var index3game2Tags = getTopTags(element32);
                index3game2Tags.forEach(element => {
                    if (all3Games.indexOf(element) == -1) {
                        all3Games.push(element);
                    }
                });

                var element33 = data[numbers3[2]];
                var index3game3Tags = getTopTags(element33);
                index3game3Tags.forEach(element => {
                    if (all3Games.indexOf(element) == -1) {
                        all3Games.push(element);
                    }
                });

                var element34 = data[numbers3[3]];
                var index3game4Tags = getTopTags(element34);
                index3game4Tags.forEach(element => {
                    if (all3Games.indexOf(element) == -1) {
                        all3Games.push(element);
                    }
                });

                tags3 = {
                    "game1": index3game1Tags,
                    "game2": index3game2Tags,
                    "game3": index3game3Tags,
                    "game4": index3game4Tags,
                    "allgames": all3Games
                }

                var all4Games = [];
                var element41 = data[numbers4[0]];
                var index4game1Tags = getTopTags(element41);
                index4game1Tags.forEach(element => {
                    if (all4Games.indexOf(element) == -1) {
                        all4Games.push(element);
                    }
                });

                var element42 = data[numbers4[1]];
                var index4game2Tags = getTopTags(element42);
                index4game2Tags.forEach(element => {
                    if (all4Games.indexOf(element) == -1) {
                        all4Games.push(element);
                    }
                });

                var element43 = data[numbers4[2]];
                var index4game3Tags = getTopTags(element43);
                index4game3Tags.forEach(element => {
                    if (all4Games.indexOf(element) == -1) {
                        all4Games.push(element);
                    }
                });

                var element44 = data[numbers4[3]];
                var index4game4Tags = getTopTags(element44);
                index4game4Tags.forEach(element => {
                    if (all4Games.indexOf(element) == -1) {
                        all4Games.push(element);
                    }
                });

                tags4 = {
                    "game1": index4game1Tags,
                    "game2": index4game2Tags,
                    "game3": index4game3Tags,
                    "game4": index4game4Tags,
                    "allgames": all4Games
                }

                var all5Games = [];
                var element51 = data[numbers5[0]];
                var index5game1Tags = getTopTags(element51);
                index5game1Tags.forEach(element => {
                    if (all5Games.indexOf(element) == -1) {
                        all5Games.push(element);
                    }
                });

                var element52 = data[numbers5[1]];
                var index5game2Tags = getTopTags(element52);
                index5game2Tags.forEach(element => {
                    if (all5Games.indexOf(element) == -1) {
                        all5Games.push(element);
                    }
                });

                var element53 = data[numbers5[2]];
                var index5game3Tags = getTopTags(element53);
                index5game3Tags.forEach(element => {
                    if (all5Games.indexOf(element) == -1) {
                        all5Games.push(element);
                    }
                });

                var element54 = data[numbers5[3]];
                var index5game4Tags = getTopTags(element54);
                index5game4Tags.forEach(element => {
                    if (all5Games.indexOf(element) == -1) {
                        all5Games.push(element);
                    }
                });

                tags5 = {
                    "game1": index5game1Tags,
                    "game2": index5game2Tags,
                    "game3": index5game3Tags,
                    "game4": index5game4Tags,
                    "allgames": all5Games
                }

                showQuestion(1);
            });
        });
    }

    function containsTag(tag) {
        contains = false;
        selectTags.forEach(element => {
            if (element.tag == tag) {
                contains = true;
            }
        });
        return contains;
    }

    function showQuestion(index) {
        $(".dele_pic").hide();
        $(".pic_grid_item").css("border-color", "#fff");

        $("#title").text("Question " + index);
        // var gameArray;
        // var allTags;

        if (index > 1) {
            $("#previous_btn").show()
        } else {
            $("#previous_btn").hide()
        }

        if (index == 1) {
            gameArray = gameArr1;
            allTags = [];
            tags1.allgames.forEach(element => {
                if (!containsTag(element)) {
                    allTags.push(element);
                }
            });
            // allTags = tags1.allgames;
        } else if (index == 2) {
            gameArray = gameArr2;
            allTags = [];
            tags2.allgames.forEach(element => {
                if (!containsTag(element)) {
                    allTags.push(element);
                }
            });
            // allTags = tags2.allgames;
        } else if (index == 3) {
            gameArray = gameArr3;
            allTags = [];
            tags3.allgames.forEach(element => {
                if (!containsTag(element)) {
                    allTags.push(element);
                }
            });
            // allTags = tags3.allgames;
        } else if (index == 4) {
            gameArray = gameArr4;
            allTags = [];
            tags4.allgames.forEach(element => {
                if (!containsTag(element)) {
                    allTags.push(element);
                }
            });
            // allTags = tags4.allgames;
        } else if (index == 5) {
            gameArray = gameArr5;
            allTags = [];
            tags5.allgames.forEach(element => {
                if (!containsTag(element)) {
                    allTags.push(element);
                }
            });
            // allTags = tags5.allgames;
        }

        $("#game_pic_1").attr('src', gameArray[0].header_image);
        $("#game_pic_2").attr('src', gameArray[1].header_image);
        $("#game_pic_3").attr('src', gameArray[2].header_image);
        $("#game_pic_4").attr('src', gameArray[3].header_image);

        if (selection[index] != 0) {
            $("#item" + selection[index]).css("border-color", "#33FF00").find(".dele_pic").show();
        }

        $("#tag_list").empty();
        selectTags.sort(tagCompare);
        selectTags.forEach(element => {
            $("#tag_list").append(" <div id=" + element.tag + " class='select_tag'>" + element.tag + "(" + element.count + ")</div>");
        });
        allTags.forEach(element => {
            $("#tag_list").append(" <div id=" + element + " class='tag'>" + element + "</div>");
        });
    }

    function getTopTags(game) {
        var tempArr = [];
        for (var p in game) {
            if (p != "appid") {
                tempArr.push({
                    "tag": p,
                    "votes": parseInt(game[p])
                })
            }
        }
        tempArr.sort(compare);
        return [tempArr[0].tag, tempArr[1].tag, tempArr[2].tag];
    }

    function compare(obj1, obj2) {
        if (obj1.votes < obj2.votes) {
            return 1;
        } else if (obj1.votes > obj2.votes) {
            return -1;
        } else {
            return 0;
        }
    }

    $("#previous_btn").click(function() {
        if (index > 1) {
            if (selection[index] == 0) {
                alert("Please select a game to continue!");
                return;
            }
            showQuestion(--index);
        }
    });

    $("#next_btn").click(function() {
        if (index < 5) {
            if (selection[index] == 0) {
                alert("Please select a game to continue!");
                return;
            }
            showQuestion(++index);
        } else {
            drawRadar();
        }
    });

    function tagCompare(tag1, tag2) {
        if (tag1.count > tag2.count) {
            return -1;
        } else if (tag1.count < tag2.count) {
            return 1;
        } else {
            return 0;
        }
    }

    function drawRadar() {
        $("#pic_box").hide();
        $(".container").show();

        var centerX = document.body.clientWidth*0.7;
        var centerY = document.body.clientHeight/2.5;
        console.log(centerX);
        console.log(centerY);

        var main = d3.select('.container svg').append('g')
            .classed('main', true)
            .attr("transform", "translate(" + (centerX) / 2 + "," + (centerY) / 2 + ")");

    
        selectTags.sort(tagCompare);        
        console.log(selectTags);
        var fields = [];
        var counts = [];

        selectTags.forEach(element => {
            if (fields.length < 6) {
                fields.push(element.tag);
                counts.push(element.count);
            }
        });

        var data = {
            fieldNames: fields,
            values: [
                counts
            ]
        };

        var radius = 200,
            total = 6,
            level = 3,
            rangeMin = 0,
            rangeMax = 5,
            arc = 2 * Math.PI;

        var onePiece = arc / total;

        var polygons = {
            webs: [],
            webPoints: []
        };
        for (var k = level; k > 0; k--) {
            var webs = '',
                webPoints = [];
            var r = radius / level * k;
            for (var i = 0; i < total; i++) {
                var x = r * Math.sin(i * onePiece),
                    y = r * Math.cos(i * onePiece);
                webs += x + ',' + y + ' ';
                webPoints.push({
                    x: x,
                    y: y
                });
            }
            polygons.webs.push(webs);
            polygons.webPoints.push(webPoints);
        }

        var webs = main.append('g')
            .classed('webs', true);
        webs.selectAll('polygon')
            .data(polygons.webs)
            .enter()
            .append('polygon')
            .attr('points', function(d) {
                return d;
            });

        var lines = main.append('g')
            .classed('lines', true);
        lines.selectAll('line')
            .data(polygons.webPoints[0])
            .enter()
            .append('line')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', function(d) {
                return d.x;
            })
            .attr('y2', function(d) {
                return d.y;
            });

        var areasData = [];
        var values = data.values;
        for (var i = 0; i < values.length; i++) {
            var value = values[i],
                area = '',
                points = [];
            for (var k = 0; k < total; k++) {
                var r = radius * (value[k] - rangeMin) / (rangeMax - rangeMin);
                var x = r * Math.sin(k * onePiece),
                    y = r * Math.cos(k * onePiece);
                area += x + ',' + y + ' ';
                points.push({
                    x: x,
                    y: y
                })
            }
            areasData.push({
                polygon: area,
                points: points
            });
        }

        var areas = main.append('g')
            .classed('areas', true);

        areas.selectAll('g')
            .data(areasData)
            .enter()
            .append('g')
            .attr('class', function(d, i) {
                return 'area' + (i + 1);
            });
        for (var i = 0; i < areasData.length; i++) {

            var area = areas.select('.area' + (i + 1)),
                areaData = areasData[i];

            area.append('polygon')
                .attr('points', areaData.polygon)
                .attr('stroke', function(d, index) {
                    return getColor(i);
                })
                .attr('fill', function(d, index) {
                    return getColor(i);
                });

            var circles = area.append('g')
                .classed('circles', true);
            circles.selectAll('circle')
                .data(areaData.points)
                .enter()
                .append('circle')
                .attr('cx', function(d) {
                    return d.x;
                })
                .attr('cy', function(d) {
                    return d.y;
                })
                .attr('r', 3)
                .attr('stroke', function(d, index) {
                    return getColor(i);
                });
        }

        var textPoints = [];
        var textRadius = radius + 20;
        for (var i = 0; i < total; i++) {
            var x = textRadius * Math.sin(i * onePiece),
                y = textRadius * Math.cos(i * onePiece);
            textPoints.push({
                x: x,
                y: y
            });
        }

        var texts = main.append('g')
            .classed('texts', true);
        texts.selectAll('text')
            .data(textPoints)
            .enter()
            .append('text')
            .attr('x', function(d) {
                return d.x;
            })
            .attr('y', function(d) {
                return d.y;
            })
            .attr("font-size", 24)
            .attr("fill", "#ff1491")
            .text(function(d, i) {
                return data.fieldNames[i] + "(" + data.values[0][i] + ")";
            });

    }

    function getColor(idx) {
        var palette = [
            '#00bfff', '#b6a2de', '#5ab1ef', '#ffb980', '#d87a80',
            '#8d98b3', '#e5cf0d', '#97b552', '#95706d', '#dc69aa',
            '#07a2a4', '#9a7fd1', '#588dd5', '#f5994e', '#c05050',
            '#59678c', '#c9ab00', '#7eb00a', '#6f5553', '#c14089'
        ]
        return palette[idx % palette.length];
    }

    function randomNums(n, min, max) {
        var arr = [];
        for (i = 0; i < n; i++) {
            var ran = Math.ceil(Math.random() * (max - min) + min);
            while (isExist(arr, ran)) {
                ran = Math.ceil(Math.random() * (max - min) + min);
            }
            arr[i] = ran;
        }
        return arr;
    }

    function isExist(arr, ran) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == ran) {
                return true;
            }
        }
        return false;
    }

    getRandomGames();
    // drawRadar();
});