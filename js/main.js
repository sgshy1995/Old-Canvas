var div = document.getElementById('canvas')
var painting = false

div.onmousedown = function (sgs) {
    painting = true
    var x = sgs.clientX
    var y = sgs.clientY
    var divA = document.createElement('div')
    divA.className = "divA"
    divA.style = "left: "+(x-3)+"px;"+"top: "+ (y-3)+"px"
    div.appendChild(divA)
}

div.onmousemove = function (sgs) {
    if (painting) {
        var x = sgs.clientX
        var y = sgs.clientY
        var divA = document.createElement('div')
        divA.className = 'divA'
        divA.style = "left: " + (x - 3) + "px;" + "top: " + (y - 3) + "px;"
        div.appendChild(divA)
    } else {
        
    }
}

div.onmouseup = function (sgs) {
    painting = false
}

