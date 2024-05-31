


var websiteName=document.getElementById("name")
var websiteUrl=document.getElementById("url") 
var search=document.getElementById("search")
var model=document.getElementById("model")


var websitesArray;
if(localStorage.getItem("website")!=null){
    websitesArray=JSON.parse(localStorage.getItem("website"));
    display(websitesArray);
}
else{
    websitesArray=[];
}

function addWebsite(){
    var webObject={
        name:websiteName.value,
        url:websiteUrl.value
    }
    if(websiteName.classList.contains("is-valid")&&websiteUrl.classList.contains("is-valid")){
        websitesArray.push(webObject);
        localStorage.setItem("website",JSON.stringify(websitesArray));
        display(websitesArray);
        clearForm()
    }
    else{
         model.classList.add("d-block")
    }
    
   
}

function display(arr){
   
    var cartoona=``
    for(var i=0;i<arr.length;i++){
cartoona+=`<tr>
<td>${i+1}</td>
<td>${arr[i].name}</td>
<td> <button class="btn btn-success "><a class="text-decoration-none text-white" target="_blank" href="https://www.${arr[i].name}.com">visit</a></button></td>
<td> <button class="btn btn-danger" onclick="deleteItem(${i})">delete</button></td>
</tr>`
    }
    document.getElementById("thead").innerHTML=cartoona
}
function deleteItem(indexOfItem){
       websitesArray.splice(indexOfItem,1);
       localStorage.setItem("website",JSON.stringify(websitesArray));
       display(websitesArray);
}
function clearForm(){
websiteName.value=""
websiteUrl.value=""
websiteName.classList.remove("is-valid")
websiteUrl.classList.remove("is-valid")

}

function validateInput(element){
    // console.log(element)    
    var regex={
        name:/^[a-z]{2,10}\s?([a-z]{3,10})?$/,
        url:/^https:\/\/\w{3,10}\.com$/
    }
    if(regex[element.id].test(element.value)){
       element.classList.add("is-valid")
       element.classList.remove("is-invalid")
       element.nextElementSibling.classList.add("d-none")
    }
    else{
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
       element.nextElementSibling.classList.remove("d-none")

    }
}
function searchT(element){
    
   var arrySearch=[]
    for(var i=0;i<websitesArray.length;i++){
        if(websitesArray[i].name.includes(element.value)){
            arrySearch.push(websitesArray[i])
            display(arrySearch)
        }
        else{
            display(arrySearch)
        }
    }
}
function closei(){
model.classList.remove("d-block")
}
