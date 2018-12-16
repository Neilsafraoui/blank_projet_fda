/* hard coded*/
const wgDim = 600;

window.onload = function(){

    //GenerateGrid(5);
}

function GenerateGrid(r){

    var wg = document.getElementById("word-grid");

    for(var i = 0; i < r; i++){
        var row = document.createElement("div");
        row.className = "row";
        // row.style.width = wgDim / r +"px";
        row.style.height = wgDim / r + "px";

        for(var j = 1; j <= r; j++){
            var cell = document.createElement("div");
            cell.className = "gridsquare";
            cell.innerText = (i * r) + j;

            cell.style.height = cell.style.width = wgDim / r + "px";

            row.appendChild(cell);
        }
        wg.appendChild(row);
    }

    
}


/* functionalités

- sélectionner cases -> get le contenu (dans un tableau?) + highlight - add class selected au clic
    -> + déselect
- valider choix de mot -> bouton

*/