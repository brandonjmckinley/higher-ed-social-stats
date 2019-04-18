

// EXTRACT VALUE FOR HTML HEADER.
// ('Book ID', 'Book Name', 'Category' and 'Price')
function CreateTableFromJSON() {

    let instaStats = [

      {"university": "UCLA", "followers": "207229", "following": "83", "posts": "804"},
      {"university": "UC Berkeley", "followers": "146472", "following": "215", "posts": "1,503"},
      {"university": "University of Virginia", "followers": "82551", "following": "204", "posts": "1,637"},
      {"university": "University of Michigan", "followers": "225408", "following": "204", "posts": "3,093"},
      {"university": "UCSB", "followers": "42249", "following": "118", "posts": "699"},
      {"university": "UNC-Chapel Hill", "followers": "96490", "following": "360", "posts": "1,616"},
      {"university": "UCI UC Irvine", "followers": "48227", "following": "198", "posts": "2,383"},
      {"university": "Georgia Tech", "followers": "57709", "following": "2494", "posts": "2,157"},
      {"university": "University of Florida", "followers": "145244", "following": "474", "posts": "1,390"},
      {"university": "William & Mary", "followers": "25224", "following": "227", "posts": "944"},
      {"university": "UC Davis", "followers": "57388", "following": "241", "posts": "1,673"},
      {"university": "UC San Diego", "followers": "29051", "following": "31", "posts": "426"},
      {"university": "University of Georgia", "followers": "107695", "following": "342", "posts": "2,104"},
      {"university": "University of Illinois", "followers": "51388", "following": "1764", "posts": "1,535"},
      {"university": "UT Austin", "followers": "98788", "following": "149", "posts": "1,030"},
      {"university": "The Ohio State University", "followers": "193250", "following": "174", "posts": "2,409"},
      {"university": "Rutgers University", "followers": "34214", "following": "371", "posts": "1,914"},
      {"university": "Penn State University", "followers": "139314", "following": "327", "posts": "2,827"},
      {"university": "University of Washington", "followers": "103376", "following": "174", "posts": "1,106"}

      ]


        // EXTRACT VALUE FOR HTML HEADER.
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < instaStats.length; i++) {
            for (var key in instaStats[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < instaStats.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = instaStats[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }


//when they hit Submit

//  > checked values are stored in array

//  for each item in array
//      let letiable = stored item
//      find university in json
//      display all of that in html table

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement

//let btn = document.getElementById('btn');
//btn.addEventListener('click', function() {
//  alert('Number of options selected: ' + howMany(document.selectForm.musicTypes));
//});


//const submitButton = document.querySelector('#submit');
//submitButton.addEventListener('click', buildArray);

//let userSelected = []

//function buildArray() {



//  Loop over each INPUT item... if checked, push SPAN content


//  if (ucla.checked = true) {
//    userSelected.push("UCLA")
//  } else if {
//    (berkeley.checked = true) {
//      userSelected.push("UC Berkeley")
//
//  console.log(userSelected);
//}

//dynamic search

//https://www.w3schools.com/howto/howto_js_filter_lists.asp

function myFunction() {
  // Declare letiables
  let input, filter, schools, div, span, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  schools = document.getElementById("schools");
	div = schools.getElementsByTagName('div');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < div.length; i++) {
    span = div[i].getElementsByTagName('span')[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
