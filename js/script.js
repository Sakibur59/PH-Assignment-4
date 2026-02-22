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
        result,
        details,
        int_btn,
        rej_btn
    }
    
   const nameExist= interviewList.find(item=> item.name == cardInfo.name);
    parentNode.querySelector('.result').innerHTML = `
    <button
                class="int-btn text-[#10B981] bg-white px-4 py-2 border-1 rounded-md mr-3 font-bold "
              >
                INTERVIEW
              </button>
    `
   if(!nameExist){
    interviewList.push(cardInfo);
   }
   renderInterview()
   }
})


const filterCard = document.getElementById("filtered-card");

function renderInterview(){
    filterCard.innerHTML = '';

    for(let interview of interviewList){
        
        let div = document.createElement('div');
        div.classList = 'flex justify-between items-baseline p-8 rounded-md shadow-sm mb-4';

        div.innerHTML = `
        <div class="space-y-6">
            <div>
              <h4 class="name text-[#002C5C] font-semibold text-[18px]">
                Mobile First Corp
              </h4>
              <p class="role text-[#64748B]">React Native Developer</p>
            </div>
            <div>
              <p class="salary text-[#64748B] mb-2">
                Remote • Full-time • $130,000 - $175,000
              </p>
              <button class="result bg-[#EEF4FF] px-2 py-2 font-medium text-[#002C5C]">
                NOT APPLIED
              </button>
            </div>
            <div>
              <p class="details text-[#323B49] mb-3">
                Build cross-platform mobile applications using React Native.
                Work on products used by millions of users worldwide.
              </p>
              <button
                class="int-btn text-[#10B981] bg-white px-4 py-2 border-1 rounded-md mr-3 font-bold cursor-pointer"
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