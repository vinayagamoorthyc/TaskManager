let array=[
    {
        category:"Work",
        sub_category:"meet",
        duration:"0:1:36 Minutes",
        task:"host"
    },
    {
        category:"Personal",
        sub_category:"project",
        duration:"0:0:12 Seconds",
        task:"demo"
    }
]

function create(){
    let category=document.getElementById("category").value;
    let sub_category=document.getElementById("sub_category").value;
    let duration=document.getElementById("time").innerText;
    let task=document.getElementById("task").value;

    array.push({category:category,sub_category:sub_category,duration:duration,task:task});
    clearInterval(timer)
    event.preventDefault();
    console.log(array);
    updateTable("all");
}

var tableBody = document.getElementById('table-body');
var filtervalue = document.getElementById("filter");

function updateRow(index) {
    var updatedCategory = prompt("Enter updated category:");
    var updatedSubCategory = prompt("Enter updated sub-category:");
    var updatedDuration = prompt("Enter updated duration:");
    var updatedTask = prompt("Enter updated task:");

    array[index].category = updatedCategory;
    array[index].sub_category = updatedSubCategory;
    array[index].duration = updatedDuration;
    array[index].task = updatedTask;

    updateTable('all');
}

function updateTable(e) {
    tableBody.innerHTML = '';

    var filteredData = [];
    if (e === 'all') {
      filteredData = array;
    } else {
      filteredData = array.filter(item => item.category === e);
    }

filteredData.map((e,index)=>{
    var row = document.createElement('tr');
    var categorydata = document.createElement('td');
    categorydata.textContent = e.category;
    var subdata = document.createElement('td');
    subdata.textContent = e.sub_category;
    var durationdata = document.createElement('td');
    durationdata.textContent = e.duration;
    var taskdata = document.createElement('td');
    taskdata.textContent = e.task;

    var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteRow(index); 
        });
        var updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', function () {
            updateRow(index); 
        });

        var actionButtonsData = document.createElement('td');
        actionButtonsData.appendChild(deleteButton);
        actionButtonsData.appendChild(updateButton);
        


    row.appendChild(categorydata);
    row.appendChild(subdata);
    row.appendChild(durationdata);
    row.appendChild(taskdata);
    row.appendChild(actionButtonsData);

    tableBody.appendChild(row);
})
}

function deleteRow(index) {
    array.splice(index, 1); 
    updateTable('all'); 
}

filtervalue.addEventListener('change', function() {
    var selectedCategory = this.value;
    updateTable(selectedCategory);
  });

updateTable('all');

var seconds=0;
var minutes=0;
var hour = 0;
function startduration(){
    document.getElementById("start").disabled=true;
        timer=setInterval(() => {
            if(seconds<59){
                ++seconds;
                if(minutes>0){
                    document.getElementById("time").innerText=hour+":"+minutes+":"+seconds+" mins";
                }else{
                    document.getElementById("time").innerText=hour+":"+minutes+":"+seconds+" secs";
                }
            }else if(seconds>=59){
                seconds=0;
                ++minutes;
                document.getElementById("time").innerHTML=+hour+":"+minutes+":"+seconds+" mins";
            }else if(minutes>=59){
                seconds=0;
                minutes=0;
                ++hour;
                document.getElementById("time").innerText=hour+":"+minutes+":"+seconds+" hrs";
            }
        }, 1000);
}
function stopduration(){
    document.getElementById("start").disabled=false;
    clearInterval(timer)
}