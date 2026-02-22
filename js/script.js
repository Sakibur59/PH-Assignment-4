let total = document.getElementById("total-job");

let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");

let allCard= document.getElementById("all-card");

let availableJob= document.getElementById("available-job");

function count(){
    total.innerText = allCard.children.length;
    availableJob.innerText = allCard.children.length;
}

count();