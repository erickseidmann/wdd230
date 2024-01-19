const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() === "") {
        // Input is blank, provide a message or return focus to the input field
        alert("Please enter a chapter title."); // error message
        input.focus();
        return; 
      }
      
      const li = document.createElement("li");
      li.textContent = input.value;
    
      list.appendChild(li);

      const chapterTitle = document.createElement("span");
      chapterTitle.textContent = input.value;
      

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.addEventListener("click", () => {
      // Remove the corresponding list item when the delete button is clicked??
      list.removeChild(li);
      input.focus();
    });

    // delete button to the new list item
    li.appendChild(deleteButton);

   
    list.appendChild(li);

    // Clear the input field after adding a chapter
    input.value = "";
});