document.querySelector("#sub-btn-id").addEventListener("click",(event)=>{

    event.preventDefault();

    const value = document.querySelector("#text-area-id").value;

    if(value == "")
    {
        alert("Please enter the content and press submit...")
    }

    else if(value.trim() == "")
    {
        alert("please enter a valid content and press submit...")
    }

    else{

        document.querySelector("#text-area-id").value="";
        addvalue(value);

    }


function addvalue(text){

    const div = document.querySelector("#list-notes-id");

    const notes = document.createElement("textarea");

    notes.textContent=text;

    notes.classList.add('notes')

    div.appendChild(notes);

}

});