
//create table function
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

  //write list of checkbox options from json

for (let i = 0; i < instaStats.length; i++) {
      university = instaStats[i]["university"];   //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

      let formCheckDiv = document.createElement("div");
      formCheckDiv.classList.add("form-check");
      document.getElementById("schools").appendChild(formCheckDiv);

      let formCheckLabel = document.createElement("label");
      formCheckLabel.classList.add("form-check-label");
      formCheckDiv.appendChild(formCheckLabel);

      let formCheckInput = document.createElement("input");
      formCheckInput.classList.add("form-check-input");
      formCheckInput.setAttribute("type", "checkbox");
      formCheckInput.setAttribute("name", "university");
      formCheckInput.setAttribute("value", university.replace(/\s/g, '').toLowerCase());
      formCheckInput.id = university.replace(/\s/g, '').toLowerCase();
      formCheckLabel.appendChild(formCheckInput);

      let span = document.createElement("span");
      span.innerHTML = university;

      formCheckInput.insertAdjacentElement("afterend", span);

      }

function CreateTableFromJSON() {

        // EXTRACT VALUE FOR HTML HEADER.
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        let col = [];
        for (let i = 0; i < instaStats.length; i++) {
            for (let key in instaStats[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        let table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        let tr = table.insertRow(-1);                   // TABLE ROW.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.id = "tableheader"
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (let i = 0; i < instaStats.length; i++) {

            tr = table.insertRow(-1);
            university = instaStats[i]["university"];
            tr.id = university.replace(/\s/g, '').toLowerCase();

            for (let j = 0; j < col.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = instaStats[i][col[j]];
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        let divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }

//get data from submit button

function submit() {

  let checkboxes = document.getElementsByName("university");
  let tableRows = document.getElementsByTagName("tr");

  for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked == true) {
          checkboxID = checkboxes[i].getAttribute("id");

        for (let j = 0; j < tableRows.length; j++) {
            tableRowID = tableRows[j].getAttribute("id");
            if (tableRowID === checkboxID) {
              tableRows[j].style.display = "table-row";
            }
        }
      } else {
        checkboxID = checkboxes[i].getAttribute("id");

        for (let j = 0; j < tableRows.length; j++) {
            tableRowID = tableRows[j].getAttribute("id");
            if (tableRowID === checkboxID) {
              tableRows[j].style.display = "none";
            }
        }
      }
  }
}


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
