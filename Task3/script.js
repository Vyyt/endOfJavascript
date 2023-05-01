/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const output = document.getElementById("output");
const button = document.getElementById("btn");
const message = document.getElementById("message");


const getApi = async () => {
  try {
      const response = await fetch(ENDPOINT);
      const data = await response.json();  
      return data;
     
  } catch (error) {
    console.log(error);
  }
  
};
  button.addEventListener("click", async () => {
  message.remove();

  const usersInfo = await getApi();

  usersInfo.map((user) => {
    const loginDiv = document.createElement("div");
    loginDiv.textContent = `Login: ${user.login}`;

    const userImg = document.createElement("img");
    userImg.src = user.avatar_url;

    const userContainer = document.createElement("div");

    userContainer.append(loginDiv, userImg);
    output.append(userContainer);
  })
  });


