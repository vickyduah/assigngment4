const getInfo = () => {
  const response = fetch('https://gtl-covid-api.herokuapp.com/api/')
  .then(response => response.json())
    
  .then( data => {
    let totalConfirm = 0
    let totalDeaths = 0
    data['Covid 19 Cases'].forEach((last,index) =>{
      totalConfirm += Number(last.Confirmed)

       document.querySelector('#tablecase').insertAdjacentHTML("afterbegin", 
            
        '<tr>'+ 
        '<td>' + last.Country + '</td>' +
        '<td>' + last.Active + '</td>'  + 
        '<td>'+ last.Recoveries + '</td>' +
        '<td>'+  last.Deaths + '</td>' +
        '<td>'+  last.Confirmed + '</td>' + 
        '</tr>'
           )
    });

    //        data['Covid 19 Cases'].forEach((item,index)=>{
    //          console.log(item.Deaths)
    // })

     

    
   })
 
.catch(error => console.log(error))
}
getInfo()