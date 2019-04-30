
//JSON copied from the JSON that the Python script created
//In real world sense, JSON would be generated each night by CHRON job runnign Python script

let instaStats = [
{"university": "UCLA", "instagram followers": "210088", "instagram following": "83", "instagram posts": "807", "twitter followers": "178092", "twitter following": "318", "tweets": "11735"},
{"university": "UC Berkeley", "instagram followers": "148210", "instagram following": "217", "instagram posts": "1,511", "twitter followers": "166497", "twitter following": "368", "tweets": "16405"},
{"university": "University of Virginia", "instagram followers": "83991", "instagram following": "204", "instagram posts": "1,642", "twitter followers": "84710", "twitter following": "1559", "tweets": "25319"},
{"university": "University of Michigan", "instagram followers": "227342", "instagram following": "206", "instagram posts": "3,106", "twitter followers": "218590", "twitter following": "809", "tweets": "24470"},
{"university": "UCSB", "instagram followers": "42746", "instagram following": "119", "instagram posts": "703", "twitter followers": "41971", "twitter following": "7194", "tweets": "6532"},
{"university": "UNC-Chapel Hill", "instagram followers": "97260", "instagram following": "360", "instagram posts": "1,626", "twitter followers": "120047", "twitter following": "1658", "tweets": "29681"},
{"university": "UCI UC Irvine", "instagram followers": "48936", "instagram following": "198", "instagram posts": "2,393", "twitter followers": "63051", "twitter following": "518", "tweets": "10500"},
{"university": "Georgia Tech", "instagram followers": "58388", "instagram following": "2509", "instagram posts": "2,173", "twitter followers": "169921", "twitter following": "4044", "tweets": "12725"},
{"university": "University of Florida", "instagram followers": "146528", "instagram following": "475", "instagram posts": "1,400", "twitter followers": "186919", "twitter following": "575", "tweets": "48480"},
{"university": "William & Mary", "instagram followers": "25384", "instagram following": "227", "instagram posts": "951", "twitter followers": "31644", "twitter following": "233", "tweets": "8476"},
{"university": "UC Davis", "instagram followers": "58022", "instagram following": "242", "instagram posts": "1,687", "twitter followers": "47462", "twitter following": "997", "tweets": "25677"},
{"university": "UC San Diego", "instagram followers": "29380", "instagram following": "31", "instagram posts": "430", "twitter followers": "34457", "twitter following": "5073", "tweets": "16745"},
{"university": "University of Georgia", "instagram followers": "108393", "instagram following": "343", "instagram posts": "2,110", "twitter followers": "106103", "twitter following": "520", "tweets": "15203"},
{"university": "University of Illinois", "instagram followers": "52505", "instagram following": "1774", "instagram posts": "1,543", "twitter followers": "76172", "twitter following": "8551", "tweets": "36681"},
{"university": "UT Austin", "instagram followers": "99946", "instagram following": "150", "instagram posts": "1,033", "twitter followers": "215950", "twitter following": "1323", "tweets": "22578"},
{"university": "The Ohio State University", "instagram followers": "195069", "instagram following": "174", "instagram posts": "2,421", "twitter followers": "322002", "twitter following": "697", "tweets": "21428"},
{"university": "Rutgers University", "instagram followers": "34743", "instagram following": "370", "instagram posts": "1,947", "twitter followers": "131021", "twitter following": "578", "tweets": "14898"},
{"university": "Penn State University", "instagram followers": "140789", "instagram following": "327", "instagram posts": "2,841", "twitter followers": "204814", "twitter following": "1022", "tweets": "31452"},
{"university": "University of Washington", "instagram followers": "104362", "instagram following": "174", "instagram posts": "1,116", "twitter followers": "157645", "twitter following": "1987", "tweets": "14765"},


]


//write list of checkbox options from json
//coded on own - no source for full code, but used MDN for list of attributes

for (let i = 0; i < instaStats.length; i++) {
      university = instaStats[i]["university"];

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


//create table from JSON file
//source: https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm

function CreateTableFromJSON() {

        // EXTRACT VALUE FOR HTML HEADER.
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
        table.classList.add("table", "table-dark", "table-bordered", "nowrap");
        table.id = "datatable";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        let thead = document.createElement("thead");
        table.appendChild(thead);
        let tableRowHeader = document.createElement("tr");
        thead.appendChild(tableRowHeader);

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i].toUpperCase();
            tableRowHeader.id = "tableheader"
            tableRowHeader.appendChild(th);
        }


        // ADD JSON DATA TO THE TABLE AS ROWS.

        let tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for (let i = 0; i < instaStats.length; i++) {

            tr = tbody.insertRow(-1);
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
//coded on own -- no source

let buttons = document.getElementsByTagName("button");
let submitButton = buttons[0];
submitButton.addEventListener("click", submit);

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


//clear button
//coded on own -- no source

let clearButton = buttons[1];
clearButton.addEventListener("click", clear);

function clear() {
  let checkboxes = document.getElementsByName("university");
  let tableRows = document.getElementsByTagName("tr");


  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }

  for (let i = 1; i < tableRows.length; i++) {
    tableRows[i].style.display = "none";
  }

}



//dynamic search

//source: https://www.w3schools.com/howto/howto_js_filter_lists.asp
function myFunction() {
  // Declare variables
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
