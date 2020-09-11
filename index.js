fetch("https://gtl-covid-api.herokuapp.com/api/", { method: "GET" })
  .then((response) => {
    console.log({ response });
    response.json().then((data) => {
      console.log(data["Covid 19 Cases"]);
      let totalConfirm = 0;
      let totalRecovered = 0;
      let totalActive = 0;
      let totalDeath = 0;

      //total covid cases for all west African countries
      data["Covid 19 Cases"].forEach((item, index) => {
        totalConfirm = totalConfirm + Number(item.Confirmed);

        if (index + 1 === data["Covid 19 Cases"].length) {
        }
      });
      let newElement = (document.getElementById(
        "totalCases"
      ).innerHTML = totalConfirm);

      //total recovered cases
      data["Covid 19 Cases"].forEach((item, index) => {
        totalRecovered = totalRecovered + Number(item.Recoveries);
        if (index + 1 === data["Covid 19 Cases"].length) {
        }
      });
      let recoverCa = (document.getElementById(
        "totalRecovery"
      ).innerHTML = totalRecovered);

      // Total active cases
      data["Covid 19 Cases"].forEach((item, index) => {
        totalActive = totalActive + Number(item.Active);
        if (index + 1 === data["Covid 19 Cases"].length) {
        }
      });
      let totalactive = (document.getElementById(
        "totalActive"
      ).innerHTML = totalActive);

      //total death cases
      data["Covid 19 Cases"].forEach((item, index) => {
        totalDeath = totalDeath + Number(item.Deaths);
        if (index + 1 === data["Covid 19 Cases"].length) {
        }
      });
      let deaths = (document.getElementById(
        "totalDeaths"
      ).innerHTML = totalDeath);

      document.querySelector("#good").insertAdjacentHTML(
        "afterbegin",

        "<tr>" +
          "<td>" +
          item.Country +
          "</td>" +
          "<td>" +
          item.Confirmed +
          "</td>" +
          "<td>" +
          item.Active +
          "</td>" +
          "<td>" +
          item.Recoveries +
          "</td>" +
          "<td>" +
          item.Deaths +
          "</td>" +
          "</tr>"
      );
    });

    data["Covid 19 Cases"].forEach((item, index) => {
      console.log(item.Deaths);
    });
  })
  .catch((error) => {
    console.log(error);
  });
getInfo();
