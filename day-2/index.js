function filter() {
    let input = document.getElementById("search").value.toLowerCase();
    let cells = document.querySelectorAll(".cell");
    
    cells.forEach(cell => {
        let name = cell.querySelector(".name").textContent.toLowerCase();
        if (name.includes(input)) {
            cell.style.display = "block";
        } else {
            cell.style.display = "none";
        }
    });
}
let a=document.querySelectorAll("li");
console.log(a);