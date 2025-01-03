let numButtonClicks = 0;


function buttonClicked() {
  numButtonClicks = numButtonClicks + 1;
  document.getElementById("mainDiv").textContent = "Button Clicked times: " + numButtonClicks;


  navigator.clipboard
    .readText()
    .then((text) => {
      document.getElementById("d1").textContent = text;
      console.log("Pasted content: ", text);

      const body = document.body;
      const tbl = document.createElement('table');
      tbl.style.width = '100%';
      const tr = tbl.insertRow();
      const th = tr.createElement('th');


    })
    .catch((err) => {
      console.error("Failed to read clipboard contents: ", err);
    });
    Pasted();
}

var nararr = [];


function Pasted()
{

  let ttbnl = document.getElementById("tbl11");

  ttbnl.tBodies[1].innerHTML = "";
  let r = document.createElement('tr');
  let c = document.createElement('td');
  // c.textContent = "Hello";
  let input = document.createElement('input');
  input.type = 'text';
  input.className = 't1';
  input.type = 'number';
  input.value = 0;
  input.name = 'fname';
  input.onChange = function() {cha()};

  nararr.push(input);
  

  c.appendChild(input);
  // c.inertAdjacentHTML('beforeend', '<input type="text" name="fname">');
  r.appendChild(c);
  let c1 = document.createElement('td');
  c1.textContent = "5";
  c1.className = 'w1';
  r.appendChild(c1);
  let c2 = document.createElement('td');
  c2.textContent = "Hello2";
  r.appendChild(c2);
  ttbnl.tBodies[1].appendChild(r);


  //document.getElementById("mainDiv").textContent = ttbnl.tBodies[0].innerHTML;

  
  //const tbd = ttbnl.innerText = "";

}


function cha()
{

}

