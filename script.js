function compute()
{
    var principal = document.getElementById("principal").value;

    var rate= document.getElemenetById("rate").value;

    var years = document.getElemenetById("years").value;

    var interest = principal * years * rate /100;
    
    var year = new Date().getFullYear()+parseInt(years);
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;

    var interest =  document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>";
}
  
