var names = ["Upendra Jain" , "Nidhi Jain" , "Nayonika Jain" , "Nehal Jain"];

var images = ["https://cdn2.vectorstock.com/i/1000x1000/23/96/cartoon-character-beautiful-young-man-smiling-vector-21832396.jpg" ,"https://thumbs.dreamstime.com/b/beautiful-woman-cartoon-girl-character-wearing-black-dress-isolated-flat-vector-design-130601350.jpg" , "https://cdn2.vectorstock.com/i/1000x1000/13/46/cartoon-young-girl-vector-14411346.jpg" , "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6933745.jpg"];
var i = 0;

function update() {

    Array_l = 3;
    var updated_image = images[i];
var upadated_names = names[i];

document.getElementById("image_1").src = updated_image;
document.getElementById("name").innerHTML = upadated_names;
i++;
if (i>Array_l){
    i = 0;
}
}