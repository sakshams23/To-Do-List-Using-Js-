// Shree Ganeshaye Namah


function showDialog() {
    const dialog = document.querySelector('.dialog');
    dialog.style.display = 'flex';
}
function closeDialog() {
    const dialog = document.querySelector('.dialog');
    dialog.style.display = 'none';
    var date = document.querySelector('.datetxt').value;
    var day = document.querySelector('.daytxt').value;
    var titl = document.querySelector('.tittxt').value;
    var des = document.querySelector('.destxt').value;
    if (document.getElementById("date1p").innerHTML == "") {
        document.getElementById("date1p").innerHTML = date;
        document.getElementById("day1p").innerHTML = day;
        document.getElementById("tit1p").innerHTML = titl;
        document.getElementById("des1p").innerHTML = des;
        const first = document.querySelector('.activity-one');
        first.style.display = 'grid';
    }
    else {
        if (document.getElementById("date2p").innerHTML == "") {
            document.getElementById("date2p").innerHTML = date;
            document.getElementById("day2p").innerHTML = day;
            document.getElementById("tit2p").innerHTML = titl;
            document.getElementById("des2p").innerHTML = des;

            const first = document.querySelector('.activity-two');
            first.style.display = 'grid';
        }
        else {
            if (document.getElementById("date3p").innerHTML == "") {
                document.getElementById("date3p").innerHTML = date;
                document.getElementById("day3p").innerHTML = day;
                document.getElementById("tit3p").innerHTML = titl;
                document.getElementById("des3p").innerHTML = des;

                const first = document.querySelector('.activity-three');
                first.style.display = 'grid';
            }
            else {
                if (document.getElementById("date4p").innerHTML == "") {
                    document.getElementById("date4p").innerHTML = date;
                    document.getElementById("day4p").innerHTML = day;
                    document.getElementById("tit4p").innerHTML = titl;
                    document.getElementById("des4p").innerHTML = des;

                    const first = document.querySelector('.activity-four');
                    first.style.display = 'grid';
                }
                else {
                    if (document.getElementById("date5p").innerHTML == "") {
                        document.getElementById("date5p").innerHTML = date;
                        document.getElementById("day5p").innerHTML = day;
                        document.getElementById("tit5p").innerHTML = titl;
                        document.getElementById("des5p").innerHTML = des;

                        const first = document.querySelector('.activity-five');
                        first.style.display = 'grid';
                    }
                }

            }
        }

    }







    date = document.querySelector('.datetxt').value = "";
    day = document.querySelector('.daytxt').value = "";
    titl = document.querySelector('.tittxt').value = "";
    des = document.querySelector('.destxt').value = "";
}
function do1() {
    var date = document.getElementById("date1p").innerHTML;
    var day = document.getElementById("day1p").innerHTML
    var titl = document.getElementById("tit1p").innerHTML;
    var des = document.getElementById("des1p").innerHTML;
    document.getElementById("date1s").innerHTML = date;
    document.getElementById("day1s").innerHTML = day;
    document.getElementById("tit1s").innerHTML = titl;
    document.getElementById("des1s").innerHTML = des;

    const first = document.querySelector('.activity-ones');
    first.style.display = 'grid';
    const firsts = document.querySelector('.activity-one');
    firsts.style.display = 'none';
    date = document.querySelector('.datetxt').value = "";
    day = document.querySelector('.daytxt').value = "";
    titl = document.querySelector('.tittxt').value = "";
    des = document.querySelector('.destxt').value = "";
}
function do2() {
    var date = document.getElementById("date2p").innerHTML;
    var day = document.getElementById("day2p").innerHTML
    var titl = document.getElementById("tit2p").innerHTML;
    var des = document.getElementById("des2p").innerHTML;
    document.getElementById("date2s").innerHTML = date;
    document.getElementById("day2s").innerHTML = day;
    document.getElementById("tit2s").innerHTML = titl;
    document.getElementById("des2s").innerHTML = des;

    const first = document.querySelector('.activity-twos');
    first.style.display = 'grid';
    const firsts = document.querySelector('.activity-two');
    firsts.style.display = 'none';
    date = document.querySelector('.datetxt').value = "";
    day = document.querySelector('.daytxt').value = "";
    titl = document.querySelector('.tittxt').value = "";
    des = document.querySelector('.destxt').value = "";
}

function do3() {
    var date = document.getElementById("date3p").innerHTML;
    var day = document.getElementById("day3p").innerHTML
    var titl = document.getElementById("tit3p").innerHTML;
    var des = document.getElementById("des3p").innerHTML;
    document.getElementById("date3s").innerHTML = date;
    document.getElementById("day3s").innerHTML = day;
    document.getElementById("tit3s").innerHTML = titl;
    document.getElementById("des3s").innerHTML = des;

    const first = document.querySelector('.activity-threes');
    first.style.display = 'grid';
    const firsts = document.querySelector('.activity-three');
    firsts.style.display = 'none';
    date = document.querySelector('.datetxt').value = "";
    day = document.querySelector('.daytxt').value = "";
    titl = document.querySelector('.tittxt').value = "";
    des = document.querySelector('.destxt').value = "";
}

function do4() {
    var date = document.getElementById("date4p").innerHTML;
    var day = document.getElementById("day4p").innerHTML
    var titl = document.getElementById("tit4p").innerHTML;
    var des = document.getElementById("des4p").innerHTML;
    document.getElementById("date4s").innerHTML = date;
    document.getElementById("day4s").innerHTML = day;
    document.getElementById("tit4s").innerHTML = titl;
    document.getElementById("des4s").innerHTML = des;

    const first = document.querySelector('.activity-fours');
    first.style.display = 'grid';
    const firsts = document.querySelector('.activity-four');
    firsts.style.display = 'none';
    date = document.querySelector('.datetxt').value = "";
    day = document.querySelector('.daytxt').value = "";
    titl = document.querySelector('.tittxt').value = "";
    des = document.querySelector('.destxt').value = "";
}

function do5() {
    var date = document.getElementById("date5p").innerHTML;
    var day = document.getElementById("day5p").innerHTML
    var titl = document.getElementById("tit5p").innerHTML;
    var des = document.getElementById("des5p").innerHTML;
    document.getElementById("date5s").innerHTML = date;
    document.getElementById("day5s").innerHTML = day;
    document.getElementById("tit5s").innerHTML = titl;
    document.getElementById("des5s").innerHTML = des;

    const first = document.querySelector('.activity-fives');
    first.style.display = 'grid';
    const firsts = document.querySelector('.activity-five');
    firsts.style.display = 'none';
    date = document.querySelector('.datetxt').value = "";
    day = document.querySelector('.daytxt').value = "";
    titl = document.querySelector('.tittxt').value = "";
    des = document.querySelector('.destxt').value = "";
}

function de1() {
    document.getElementById("date1p").innerHTML = "";
    document.getElementById("day1p").innerHTML = "";
    document.getElementById("tit1p").innerHTML = "";
    document.getElementById("des1p").innerHTML = "";
    const first = document.querySelector('.activity-ones');
    first.style.display = 'none';
    
}
function de2() {
    document.getElementById("date2p").innerHTML = "";
    document.getElementById("day2p").innerHTML = "";
    document.getElementById("tit2p").innerHTML = "";
    document.getElementById("des2p").innerHTML = "";
    const first = document.querySelector('.activity-twos');
    first.style.display = 'none';
    
}
function de3() {
    document.getElementById("date3p").innerHTML = "";
    document.getElementById("day3p").innerHTML = "";
    document.getElementById("tit3p").innerHTML = "";
    document.getElementById("des3p").innerHTML = "";
    const first = document.querySelector('.activity-threes');
    first.style.display = 'none';
    
}
function de4() {
    document.getElementById("date4p").innerHTML = "";
    document.getElementById("day4p").innerHTML = "";
    document.getElementById("tit4p").innerHTML = "";
    document.getElementById("des4p").innerHTML = "";
    const first = document.querySelector('.activity-fours');
    first.style.display = 'none';
    
}
function de5() {
    document.getElementById("date5p").innerHTML = "";
    document.getElementById("day5p").innerHTML = "";
    document.getElementById("tit5p").innerHTML = "";
    document.getElementById("des5p").innerHTML = "";
    const first = document.querySelector('.activity-fives');
    first.style.display = 'none';
    
}