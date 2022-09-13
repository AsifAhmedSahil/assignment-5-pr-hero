const playerArray = [];

function displayPlayer(playerArray) {
  console.log(playerArray);

  const tableBody = document.getElementById("card-players");
  tableBody.innerHTML = "";

  for (let i = 0; i < playerArray.length; i++) {
    // console.log(playerArray[i].playerName)
    const name = playerArray[i];

    const tr = document.createElement("tr");

    tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        `;
    tableBody.appendChild(tr);
  }
}



function clicked(element) {

    // button = element.querySelector
    // button.setAttribute("disabled",true)

  const playerName = element.parentNode.parentNode.children[0].innerText;
  const playerName2 = element.parentNode.parentNode.children[2].children[0];
  
  
  playerName2.setAttribute("disabled" , true)
  
  playerLength = playerArray.length;

  if (playerLength >= 5) {
    alert("full");
    return playerLength;


  } else {
    playerArray.push(playerName);
    displayPlayer(playerArray);
  }
}


// -------------------------buggets---------------------

function calculateTotal() {
  const perplayerNumberStrint = document.getElementById("per-player");
  const perPlayer = parseInt(perplayerNumberStrint.value);
  //console.log(perPlayer)
  const playerCost = perPlayer * playerArray.length;
  console.log(playerCost);
  const playerCostTotalStrint = document.getElementById("player-cost-total");

  playerCostTotalStrint.innerText = playerCost;
  //console.log(playerCostTotal)

  return playerCost;
}

document.getElementById("calculate").addEventListener("click", function () {
  calculateTotal();
});

document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    playerCostTotal = calculateTotal();

    const managerCostNumber = document.getElementById("manager-cost");
    const managerCost = parseFloat(managerCostNumber.value);
    console.log(managerCost);

    const coachCostNumber = document.getElementById("coach-cost");
    const coachCost = parseFloat(coachCostNumber.value);
    console.log(coachCost);

    totalCostString = managerCost + coachCost + playerCostTotal;

    const totalAmount = document.getElementById("total-amount");
    totalAmount.innerText = totalCostString;

    console.log(totalCost);
  });
