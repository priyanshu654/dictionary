let rightbox=document.getElementById("right");
let leftbox=document.getElementById("left");
let centerbox=document.getElementById("center");
let lists=document.getElementsByClassName("list");
// let arr=Array.from(lists);

// arr.forEach(lists=> {
//     lists.addEventListener("dragstart",function(e){
//         let selected=e.target;

//         rightbox.addEventListener("dragover",function(e){
//             e.preventDefault();
//         });

//         rightbox.addEventListener("drop", function(e){
//             rightbox.appendChild(selected);
//             selected=null;
//         });

//         leftbox.addEventListener("dragover",function(e){
//             e.preventDefault();
//         });

//         leftbox.addEventListener("drop", function(e){
//             leftbox.appendChild(selected);
//             selected=null;
//         });

//     });
// });



for(list of lists){
    list.addEventListener("dragstart",function(e){
        let selected=e.target;

        rightbox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        rightbox.addEventListener("drop", function(e){
            // e.preventDefault();
            rightbox.appendChild(selected);
            selected=null;
        });

        leftbox.addEventListener("dragover",function(e){
            e.preventDefault();
        });

        leftbox.addEventListener("drop", function(e){
            leftbox.appendChild(selected);
            selected=null;
        });

        centerbox.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })
        centerbox.addEventListener("drop",(e)=>{
            centerbox.appendChild(selected);
            selected=null;
        })

    });
}































// arr.forEach(lists=> {
//     lists.addEventListener("dragstart",function(e){
//         let selected=e.target;

//         rightbox.addEventListener("dragover",function(e){
//             e.preventDefault();
//         });

//         rightbox.addEventListener("drop", function(e){
//             rightbox.appendChild(selected);
//             selected=null;
//         });

//         leftbox.addEventListener("dragover",function(e){
//             e.preventDefault();
//         });

//         leftbox.addEventListener("drop", function(e){
//             leftbox.appendChild(selected);
//             selected=null;
//         });

//     });
// });
