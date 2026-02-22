let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'
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
let empty = document.getElementById("empty");
function toggle(id){
    allBtn.classList.remove('bg-[#3B82F6]','text-white')
    interviewBtn.classList.remove('bg-[#3B82F6]','text-white')
    rejectedBtn.classList.remove('bg-[#3B82F6]','text-white')

    allBtn.classList.add('bg-white','text-[#64748B]','border-gray-300')
    interviewBtn.classList.add('bg-white','text-[#64748B]','border-gray-300')
    rejectedBtn.classList.add('bg-white','text-[#64748B]','border-gray-300')

    let selected = document.getElementById(id);
    currentStatus = id;
    selected.classList.remove('bg-white','text-[#64748B]','border-gray-300');
    selected.classList.add('bg-[#3B82F6]','text-white')

    if(id == 'interview-btn'){
        allCard.classList.add('hidden');
        filterCard.classList.remove('hidden');
        renderInterview();
    } else if (id == 'all-btn'){
        allCard.classList.remove('hidden');
        filterCard.classList.add('hidden');
        empty.classList.add('hidden')
    } else if (id == 'rejected-btn'){
        allCard.classList.add('hidden');
        filterCard.classList.remove('hidden');
        renderRejected();
    }
}

let main = document.querySelector('main');

main.addEventListener('click',function (event){
   if(event.target.classList.contains('int-btn')){
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
        result:parentNode.querySelector('.result').innerHTML = `
    <button
                class="int-btn text-[#10B981] bg-white px-4 py-2 border-1 rounded-md mr-3 font-bold "
              >
                INTERVIEW
              </button>
    `,
        details,
        int_btn,
        rej_btn
    }
   
   const nameExist= interviewList.find(item=> item.name == cardInfo.name);
   
    
   if(!nameExist){
    interviewList.push(cardInfo);
   }
   rejectedList = rejectedList.filter(item=> item.name != cardInfo.name);
    
   count();
   if(currentStatus == "rejected-btn")
   renderRejected();
   }
    else if(event.target.classList.contains('rej-btn')){
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
        result:parentNode.querySelector('.result').innerHTML = `
    <button
                class="rej-btn text-[#EF4444] bg-white px-4 py-2 border-1 rounded-md font-bold cursor-pointer"
              >
                REJECTED
              </button>
    `,
        details,
        int_btn,
        rej_btn
    }
    
   const nameExist= rejectedList.find(item=> item.name == cardInfo.name);
    
   if(!nameExist){
    rejectedList.push(cardInfo);
   }
   interviewList = interviewList.filter(item=> item.name != cardInfo.name);

   if(currentStatus == "interview-btn"){
    renderInterview();
   }
   count();
   //renderRejected();
   }
})


const filterCard = document.getElementById("filtered-card");


function renderInterview(){
    filterCard.innerHTML = ``;
    if(interviewList.length == 0){
        empty.classList.remove('hidden')
    }
    for(let interview of interviewList){
        
        let div = document.createElement('div');
        div.classList = 'flex justify-between items-baseline p-8 rounded-md shadow-sm mb-4';

        div.innerHTML = `
        <div class="space-y-6">
            <div>
              <h4 class="name text-[#002C5C] font-semibold text-[18px]">
                ${interview.name}
              </h4>
              <p class="role text-[#64748B]">${interview.role}</p>
            </div>
            <div>
              <p class="salary text-[#64748B] mb-2">
                ${interview.salary}
              </p>
              <button class="result bg-[#EEF4FF] px-2 py-2 font-medium text-[#002C5C]">
                ${interview.result}
              </button>
            </div>
            <div>
              <p class="details text-[#323B49] mb-3">
                ${interview.details}
              </p>
              <button
                class="int-btn text-[#10B981] bg-white px-4 py-2 border-1 rounded-md mr-3 font-bold cursor-pointer "
              >
                INTERVIEW
              </button>
              <button
                class="rej-btn text-[#EF4444] bg-white px-4 py-2 border-1 rounded-md font-bold cursor-pointer hover:bg-red-500 hover:text-white"
              >
                REJECTED
              </button>
            </div>
          </div>
          <div
            class="bg-[#FFFFFF] px-1 py-0.5 border-1 border-[#64748B] rounded-full"
          >
            <button class="cursor-pointer text-[#64748B]">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        `
        filterCard.appendChild(div)
    }
}

function renderRejected(){
    filterCard.innerHTML = ``;
if(rejectedList.length == 0){
        empty.classList.remove('hidden')
}
    for(let rejected of rejectedList){
        
        let div = document.createElement('div');
        div.classList = 'flex justify-between items-baseline p-8 rounded-md shadow-sm mb-4';

        div.innerHTML = `
        <div class="space-y-6">
            <div>
              <h4 class="name text-[#002C5C] font-semibold text-[18px]">
                ${rejected.name}
              </h4>
              <p class="role text-[#64748B]">${rejected.role}</p>
            </div>
            <div>
              <p class="salary text-[#64748B] mb-2">
                ${rejected.salary}
              </p>
              <button class="result bg-[#EEF4FF] px-2 py-2 font-medium text-[#002C5C]">
                ${rejected.result}
              </button>
            </div>
            <div>
              <p class="details text-[#323B49] mb-3">
                ${rejected.details}
              </p>
              <button
                class="int-btn text-[#10B981] bg-white px-4 py-2 border-1 rounded-md mr-3 font-bold cursor-pointer hover:bg-green-500 hover:text-white"
              >
                INTERVIEW
              </button>
              <button
                class="rej-btn text-[#EF4444] bg-white px-4 py-2 border-1 rounded-md font-bold cursor-pointer"
              >
                REJECTED
              </button>
            </div>
          </div>
          <div
            class="bg-[#FFFFFF] px-1 py-0.5 border-1 border-[#64748B] rounded-full"
          >
            <button class="cursor-pointer text-[#64748B]">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        `
        filterCard.appendChild(div)
    }
}