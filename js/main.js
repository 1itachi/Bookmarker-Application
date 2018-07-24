//Listen for form submit
document.getElementById('myForm').addEventListener('submit',saveBookmark);
document.body.style.backgroundColor = "";
function saveBookmark(e){

    //Get form values
    var siteName = document.getElementById('siteName').value;

    var siteURL = document.getElementById('siteURL').value; 
     
    if(!validateForm(siteName, siteURL)){
        return false;
      }


      //to check if the entry already exists.

    var bookmarks = JSON.parse(localStorage.getItem('Bookmark'));
    
    for(var i =0; i<bookmarks.length; i++){
        if(bookmarks[i].url === siteURL && bookmarks[i].name == siteName){
            alert("Entry already exists! Give a different site name and retry!");
            return false;
       }
   }




    //creating object to store the values
    var Bookmark = {

        name: siteName,
        url : siteURL  

    }

    if (localStorage.getItem('Bookmark')=== null){

        var bookArray = [];     

        bookArray.push(Bookmark);

        localStorage.setItem('Bookmark',JSON.stringify(bookArray));
    }
    else{
        
        var bookArray = JSON.parse(localStorage.getItem('Bookmark'));
        bookArray.push(Bookmark);

        localStorage.setItem('Bookmark',JSON.stringify(bookArray));

    }

   

  
    //Prevent form from submitting
    e.preventDefault();
}


function fetchBookmarks(){

    var bookmarks = JSON.parse(localStorage.getItem('Bookmark'));

    var BookmarksResult = document.getElementById('BookmarksResult');
    
    BookmarksResult.innerHTML = '';

    for(var i = 0; i<bookmarks.length; i++){
        var name =  bookmarks[i].name;
        var url  =  bookmarks[i].url;
        
        BookmarksResult.innerHTML+= '<div class="well">'+
                                    '<h3>'+name +' '+
                                    ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                    ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                    '</h3>'+ '<p>'+ url +'</p>'+
                                    '</div>'
    }
       
}


function deleteBookmark(url){
    var bookmarks = JSON.parse(localStorage.getItem('Bookmark'));
    
    for(var i =0; i<bookmarks.length; i++){
        if(bookmarks[i].url === url){
            bookmarks.splice(i,1);
        }
    }

    localStorage.setItem('Bookmark', JSON.stringify(bookmarks));

fetchBookmarks();
}

// Validate Form
function validateForm(siteName, siteUrl){
    if(!siteName || !siteUrl){
      alert('Please fill in the form');
      return false;
    }
  
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
  
    if(!siteUrl.match(regex)){
      alert('Please use a valid URL');
      return false;
    }
  
    return true;
  }


