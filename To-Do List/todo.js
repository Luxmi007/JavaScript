var taskElement=document.getElementById('todo-input');
var addBtnElement=document.getElementById('add-item');
var taskListElement=document.getElementById('todo-list');
var btnUpdate = document.getElementById('update-item');
//var btnRemove = document.getElementById('remove-item');

function createNewNode(){
    var li =document.createElement('li');
    var count=Number(taskListElement.childElementCount)+1;
    var value=taskElementValue;
    var textNode=document.createTextNode(value);
    return newListElement;
}

addBtnElement.onclick=function(){
    
    if(taskElement.value!==''){
        var newListElement = createNewNode();
    /*    var li =document.createElement('li');
        var count=Number(taskListElement.childElementCount)+1;
        var value=taskElementValue;
        var textNode=document.createTextNode(value);*/
        
        li.appendChild(textNode)
        taskListElement.appendChild(li)
        taskElement.value=''
    }
    else if(taskElement.value===''){
        alert('Write something');
    }}

taskElement.addEventListener('keypress',function(e){
   
   var taskElementValue=taskElement.value; 
   
        if(e.key==='Enter'){
           if(taskElement.value!==''){
            var li =document.createElement('li');
            var count=Number(taskListElement.childElementCount)+1;
            var value=taskElementValue;
            var textNode=document.createTextNode(value);
            li.appendChild(textNode)
            taskListElement.appendChild(li)
            taskElement.value=''
           }
           else{
               alert('Write something');
           }
        }
   
});
btnUpdate.addEventListener('click', function(){
    var firstElement = list.firstElement;
    var newListElement = createNewNode();

    list.replaceChild(newListElement, firstElement);
})