let input = document.getElementsByTagName("input")[0];

let add_node= document.querySelector("#input-logo");

let append_content = document.querySelector("#append-content");

add_node.addEventListener('click', ()=>{

    

    let create_new_node= document.createElement("p");

    let input_value = input.value;


    if(input_value==''){
        alert("Enter the value");
    }
    else{

    create_new_node.innerHTML=  input.value;
    create_new_node.classList='show-node';
    create_new_node.style.overflow='auto';




    let append_node = document.createElement('div');

    append_node.classList='append';


    let element = document.createElement('i');
    element.style.cursor='pointer';

    element.classList.add('fa-solid', 'fa-xmark', 'element')

    
     

    let element1= document.createElement('i');
    element1.style.cursor='pointer';

    element1.classList.add('fa-solid', 'fa-check', 'element1')



     
    append_content.appendChild(append_node);

    

    append_node.appendChild(create_new_node);
    append_node.appendChild(element1);
    append_node.appendChild(element);

   


    element.addEventListener('click', ()=>{
        append_node.style.display='none'
    })

    element1.addEventListener('click', ()=>{
        create_new_node.classList.toggle('line-through');
    })

    input.value='';
}
})

