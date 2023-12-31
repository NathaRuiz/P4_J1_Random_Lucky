function main() {
  const inputName = document.getElementById("input");
  const myList = document.getElementById("list");
  const reset = document.getElementById("btnreset");
  let data = localStorage.getItem("NAMESLIST");

  const btnlucky = document.getElementById("lucky");
  
  const fortunetellerList = [
    "Sharon",
    "Alejandra",
    "Nathalia",
    "Johana",
    "Ana Cecilia",
  ];

  let messagesList = [
    "Hocus pocus!! git add . !!! git commit… !!!  y git push!!!",
    "Para retomar la fe perdida pon un ; a tu vida",
    "!! Ahora todo parece un cocodrilo, pero Css le pondrá mucho estilo!!!",
    "¡Parece un día tranquilo, no olvides con Css revisar los estilos!",
    "Nadie te va reclamar, ¡respira! y vuelve a programar",
    "¡Haz como Frida, con Css brinda color a tu vida!!!",
    "Ni japonés, ni holandés: A tu amor le hablarás en inglés",
    "¡¡Para que no sufras estrés, escribe tu código siempre en inglés!!",
    "Como una dama mantendrás el orden en tu rama",
    "¡¡Se avecina mucho conocimiento, tendrás un encuentro en el branch!!",
    "¡Qué mal panorama, sube bien tu rama!!!",
    "¡Si quieres saber la realidad, un git push te dirá la verdad!",
    "¡Lee con calma este mensaje, se avecina con git merge un gran viaje!",
    "Cuando comiences a organizarte pon un orden: header, body and footer. Todo empezará a revelarse",
    "¿Quieres ver más allá? Un baño de console. log te ayudará",
  ];

  let namesList = [];

  if (data) {
    namesList = JSON.parse(data);
  }

  myList.addEventListener("click", function (event) {
    const element = event.target;
    const elementData =
      element.attributes.data && element.attributes.data.value;
    if (elementData === "delete") {
      deleteName(element);
      const updateLocalStorageData = localStorage.getItem("NAMESLIST")
      namesList = JSON.parse(updateLocalStorageData);
      namesList = namesList.filter(
        (player) => player.id !== parseInt(element.attributes.id.value)
      );
    }
    localStorage.setItem("NAMESLIST", JSON.stringify(namesList));
  });

  reset.addEventListener("click", function (event) {
    localStorage.removeItem("NAMESLIST");
  });

  btnlucky.addEventListener("click", ()=>{
    const updateLocalStorageData = localStorage.getItem("NAMESLIST")
    const parseLocalStoraData = JSON.parse(updateLocalStorageData);
    if( !updateLocalStorageData || parseLocalStoraData.length === 0){
      alert("No hay más participantes, vuelve a empezar una nueva partida.")
    }
    else{
      randomGenerator(parseLocalStoraData, fortunetellerList, messagesList);
    }

  });

  printLocalStorageData(myList, data);
}

main();

function deleteName(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}

function printLocalStorageData(selectHtmlElementList, localStorageData) {
  let playersList;

  if (localStorageData) {
    playersList = JSON.parse(localStorageData);
    printList(selectHtmlElementList, playersList);
  }
}

function printList(selectHtmlElementList, list) {
  list.forEach(function (player) {
    appendName(selectHtmlElementList, player.name, player.id);
  });
}

function appendName(selectHtmlElementList, name, id) {
  const element = `<li id="element">
                            <span class="competitor">${name}</span>
                            <i id="${id}" data="delete" class="fas fa-trash-alt "></i>
                        </li>`;
  selectHtmlElementList.insertAdjacentHTML("beforeend", element);
}

function randomGenerator (list1, list2, list3){
 
  const playerName = document.getElementById("nameCompetitor");
  const fortuneteller = document.getElementById("pitonisaName");
  const luckyMessage = document.getElementById("luckyMessage");

  const selected1 = list1[Math.floor(Math.random() * list1.length)]; 
  const selectedName1 = selected1.name;

  playerName.innerHTML = `${selectedName1}`;

  const selectedId =  (selected1.id).toString(); 
  const elementId = document.getElementById(selectedId); 
  deleteName(elementId);
  list1 = list1.filter(
    (player) => player.id !== parseInt(elementId.attributes.id.value)
  );
  localStorage.setItem("NAMESLIST", JSON.stringify(list1));
 


  const selected2 = list2[Math.floor(Math.random() * list2.length)];
  fortuneteller.innerHTML = `La pitonisa ${selected2} te dice hoy:`;
  
  const selected3 = list3[Math.floor(Math.random() * list3.length)];
  luckyMessage.innerHTML = `${selected3}`;
  
}