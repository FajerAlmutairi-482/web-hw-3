function calculauion (){
    let input1= document.getElementById("ingrade1").value ;
    let input2= document.getElementById("ingrade2").value ;
    let input3= document.getElementById("ingrade3").value ;
    let input4= document.getElementById("ingrade4").value ;
    let resault = parseFloat(input1)+parseFloat(input2)+parseFloat(input3)+parseFloat(input4);
    console.log(resault);



    let total = (document.getElementById("numeric").innerHTML+=parseFloat(input1)+parseFloat(input2)+parseFloat(input3)+parseFloat(input4))
 //document.getElementById("numeric").innerHTML+"text ";


//let resault
if( resault>90 )
{document.getElementById('letter').innerHTML+="A";}

else if (resault  > 80 )
{ document.getElementById('letter').innerHTML+="B";}

else if (resault > 70  )
{ document.getElementById('letter').innerHTML+="C";}

else if ( resault > 60) 
{ document.getElementById('letter').innerHTML+="D";}


 else 
{document.getElementById('letter').innerHTML+="F";}
}