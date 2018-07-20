//Listen for form submit

document.getElementById('myForm').addEventListener('click',saveBookmark);

function saveBookmark(e){

    //Get form values
    var siteName = document.getElementById('siteName').value;

    var siteURL = document.getElementById('siteURL').value; 
     
    //creating object to store the values
    var Bookmark = {

        name: siteName,
        url : siteURL  

    }

    if (localStorage.getItem('Bookmark')=== null){

        var bookArray = [];     

        bookArray.push('Bookmark');

        localStorage.setItem('Bookmark',JSON.stringify(bookArray));



    }




  
    //Prevent form from submitting
    e.preventDefault();
}


function Bookmark(){

   
    localStorage.setItem('user', Bookmark);   
   

    var bookArray = localStorage.getItem('user', JSON.stringify(Bookmark));
    
    console.log(bookArray);

    for (var i=0; i<Bookmark.length; i++){
    


    }

    
}


