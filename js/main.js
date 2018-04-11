
document.getElementById('myForm').addEventListener('submit', saveBookmark);


function saveBookmark(e){
    let siteName = document.getElementById('siteName').value;
    let siteUrl = document.getElementById('siteUrl').value;

    let bookmark = {
        name: siteName,
        url: siteUrl
    }

    if(localStorage.getItem('bookmarks') === undefined){

        let bookmarks = [];

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        bookmarks.push(bookmark);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    
    e.preventDefault();
}


function deleteBookmark(url){

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    for(var i =0;i < bookmarks.length;i++){
      if(bookmarks[i].url == url){

        bookmarks.splice(i, 1);
      }
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    fetchBookmarks();
  }

function fetchBookmarks(){
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    let bookmarksResults = document.getElementById('bookmarksResults');


  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}