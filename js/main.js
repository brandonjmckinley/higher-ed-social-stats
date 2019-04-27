
//JSON
let instaStats = [
  {"university": "UCLA", "followers": "208539", "following": "83", "posts": "805", "twitter followers": "177500", "twitter following": "318", "tweets": "11700"},
  {"university": "UC Berkeley", "followers": "147181", "following": "216", "posts": "1,506", "twitter followers": "165945", "twitter following": "364", "tweets": "16340"},
  {"university": "University of Virginia", "followers": "83116", "following": "204", "posts": "1,639", "twitter followers": "84519", "twitter following": "1560", "tweets": "25241"},
  {"university": "University of Michigan", "followers": "225918", "following": "204", "posts": "3,096", "twitter followers": "218286", "twitter following": "808", "tweets": "24391"},
  {"university": "UCSB", "followers": "42436", "following": "118", "posts": "700", "twitter followers": "41828", "twitter following": "7196", "tweets": "6488"},
  {"university": "UNC-Chapel Hill", "followers": "96746", "following": "360", "posts": "1,618", "twitter followers": "119885", "twitter following": "1659", "tweets": "29589"},
  {"university": "UCI UC Irvine", "followers": "48507", "following": "198", "posts": "2,386", "twitter followers": "62960", "twitter following": "518", "tweets": "10458"},
  {"university": "Georgia Tech", "followers": "57913", "following": "2505", "posts": "2,161", "twitter followers": "169531", "twitter following": "4036", "tweets": "12702"},
  {"university": "University of Florida", "followers": "145703", "following": "474", "posts": "1,392", "twitter followers": "186714", "twitter following": "573", "tweets": "48339"},
  {"university": "William & Mary", "followers": "25295", "following": "227", "posts": "946", "twitter followers": "31603", "twitter following": "233", "tweets": "8459"},
  {"university": "UC Davis", "followers": "57583", "following": "242", "posts": "1,678", "twitter followers": "47353", "twitter following": "997", "tweets": "25624"},
  {"university": "UC San Diego", "followers": "29141", "following": "31", "posts": "428", "twitter followers": "34361", "twitter following": "5279", "tweets": "16732"},
  {"university": "University of Georgia", "followers": "107940", "following": "343", "posts": "2,105", "twitter followers": "105964", "twitter following": "519", "tweets": "15149"},
  {"university": "University of Illinois", "followers": "51746", "following": "1771", "posts": "1,539", "twitter followers": "76024", "twitter following": "8556", "tweets": "36610"},
  {"university": "UT Austin", "followers": "99185", "following": "149", "posts": "1,030", "twitter followers": "215736", "twitter following": "1323", "tweets": "22554"},
  {"university": "The Ohio State University", "followers": "193800", "following": "174", "posts": "2,413", "twitter followers": "321717", "twitter following": "697", "tweets": "21402"},
  {"university": "Rutgers University", "followers": "34335", "following": "371", "posts": "1,923", "twitter followers": "130885", "twitter following": "578", "tweets": "14807"},
  {"university": "Penn State University", "followers": "139734", "following": "327", "posts": "2,831", "twitter followers": "204649", "twitter following": "1023", "tweets": "31339"},
  {"university": "University of Washington", "followers": "103658", "following": "174", "posts": "1,108", "twitter followers": "157473", "twitter following": "1987", "tweets": "14718"}


]

let instaStats1 = [

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
//coded on own - no source

for (let i = 0; i < instaStats.length; i++) {
      university = instaStats[i]["university"];
      //^source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

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
        table.id = "scroll";

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        let tr = table.insertRow(-1);                   // TABLE ROW.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i].toUpperCase();
            tr.id = "tableheader"
            tr.appendChild(th);
        }



        //let firstTableRow = document.getElementByID("tableheader");
        //console.log(firstTableRow);

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
//coded on own -- no source

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
