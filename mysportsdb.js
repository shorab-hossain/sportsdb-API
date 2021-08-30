const searchPlayer = ()=>{
    const inputValue = document.getElementById('input-value');
    const inputValueText = inputValue.value;
    if(inputValueText == ''){
            const errorMessage = document.getElementById('error-message');
            errorMessage.style.display ='block';
            errorMessage.innerHTML=`
                <h3 class='text-light'>Please give a team name !!!</h3>
            `
    }
    else{
        const url =`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValueText}`;
        fetch(url)
        .then (response => response.json())
        .then(data => displayCard(data.teams))
    }
    inputValue.value =''
}
// searchPlayer()
const displayCard = teams =>{
    console.log(teams)
    const divContainer = document.getElementById('card-body');
    divContainer.textContent ='';
   teams.forEach(team =>{
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML =`
    <div onclick ="allTeamId(${team.idTeam})" class="card">
    <img class='w-100' src="${team.strTeamBadge}" class="card-img-top w-50" alt="...">
    <div class="card-body">
      <h5 class="card-title">${team.strAlternate}</h5>
      <p class="card-text">${team.strStadiumDescription.slice(0,50)}</p>
    </div>
  </div>
    `;
    divContainer.appendChild(div)  
   })
}

const allTeamId =async (teamId )=>{
    console.log(teamId)
    const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    const res =await fetch(url);
    const data = await res.json();
    footbalTeamDetail(data?.teams[0]);
}
// const allTeamId = teamId =>{
//     fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${teamId}`)
//     .then(res => res.json())
//     .then(data => footbalTeamDetail(data))
// }
const footbalTeamDetail = detail =>{
    console.log(detail);
    const divDetail = document.getElementById('card-detail');
    divDetail.textContent ='';
    const div = document.createElement('div');
    div.innerHTML =`
    <img src="${detail.strTeamBadge}" class="card-img-top w-50" alt="...">
        <div class="card-body">
          <h5 class="card-title">${detail.strAlternate}</h5>
          <p class="card-text">${detail.strStadiumDescription.slice(0,50)}</p>
          <a href="${detail.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
    `;
    divDetail.appendChild(div)
}