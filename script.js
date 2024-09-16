function clicks()
{
    item=document.getElementById("item").value;
    date=document.getElementById("date").value;
    if(item === "" || date === "")
    {
        alert("All fields are required");
        return;
    }
    let li = document.createElement("li");
    li.textContent = `${item} - ${date} `;
    document.getElementById("list").appendChild(li);

    let editbtn = document.createElement("button");
    editbtn.classList.add("btn");
    editbtn.textContent= "Edit";
    editbtn.onclick=function()
    {
        editItem(li, item, date);
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() 
    {
        li.remove();
    };

    let donebtn = document.createElement("button");
    donebtn.classList.add("btn");
    donebtn.textContent = "Done"
    donebtn.onclick = function()
    {
        li.style.textDecoration = "line-through"
    }

    li.appendChild(editbtn);
    li.appendChild(deleteBtn);
    li.appendChild(donebtn);

    document.getElementById("list").appendChild(li);
    document.getElementById("item").value="";
    document.getElementById("date").value="";
}

function editItem(li, olditem, olddate)
{
    let newitem = prompt("Edit Item");
    let newdate = prompt("Edit Date");
    if(newitem !== "" && newdate !== "")
    {
        li.textContent = `${newitem} - ${newdate} `;
    }
}