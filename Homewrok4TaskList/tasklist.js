window.onload=function(){
    if(localStorage.tasks!=undefined){
        let tasks=document.getElementById("tasks");
        let localTasks=JSON.parse(localStorage.tasks);
        for(let v of localTasks){
            let opt=document.createElement("option");
            opt.value=v;
            opt.innerText=v;
            tasks.appendChild(opt);
        }
    }
    
};
function addTask(){
    let task=document.getElementById("task").value;
    if(task!==""){
        if(localStorage.tasks==undefined){
            let arr=[];
            arr[0]=task;
            localStorage.setItem("tasks",JSON.stringify(arr));
        }
        else{
            let localTasks=JSON.parse(localStorage.tasks);
            localTasks[localTasks.length]=task
            localStorage.tasks=JSON.stringify(localTasks);
        }
        let tasks=document.getElementById("tasks");
        let opt=document.createElement("option");
        opt.value=task;
        opt.innerText=task;
        tasks.appendChild(opt);
        document.getElementById("task").value="";
    }
}
function clearTaskList(){
    localStorage.clear();
    let tasks=document.getElementById("tasks");
    tasks.innerHTML=""; //easy way, without deleting child one by one
}
