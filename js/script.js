let interviewList = [];
let rejectedList = [];
let total = document.getElementById("total-job");

let interview = document.getElementById("interview-count");
let rejected = document.getElementById("rejected-count");

let allCard= document.getElementById("all-card");

let availableJob= document.getElementById("available-job");

function count(){
    total.innerText = allCard.children.length;
    availableJob.innerText = allCard.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}

count();

let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectedBtn = document.getElementById("rejected-btn");

function toggle(id){
    allBtn.classList.remove('bg-[#3B82F6]','text-white')
    interviewBtn.classList.remove('bg-[#3B82F6]','text-white')
    rejectedBtn.classList.remove('bg-[#3B82F6]','text-white')

    allBtn.classList.add('bg-white','text-[#64748B]','border-gray-300')
    interviewBtn.classList.add('bg-white','text-[#64748B]','border-gray-300')
    rejectedBtn.classList.add('bg-white','text-[#64748B]','border-gray-300')

    let selected = document.getElementById(id);
    selected.classList.remove('bg-white','text-[#64748B]','border-gray-300');
    selected.classList.add('bg-[#3B82F6]','text-white')
}

let main = document.querySelector('main');

main.addEventListener('click',function (event){
    let parentNode = event.target.parentNode.parentNode;

    let name = parentNode.querySelector('.name').innerText ;
    let role = parentNode.querySelector('.role').innerText ;
    let salary = parentNode.querySelector('.salary').innerText ;
    let result = parentNode.querySelector('.result').innerText ;
    let details = parentNode.querySelector('.details').innerText ;
    let int_btn = parentNode.querySelector('.int-btn').innerText ;
    let rej_btn = parentNode.querySelector('.rej-btn').innerText ;

    const cardInfo={
        name,
        role,
        salary,
        result,
        details,
        int_btn,
        rej_btn
    }
    
})