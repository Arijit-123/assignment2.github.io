function fn(){
    let str=document.getElementById('text').value;
    let str1=document.getElementById('text1').value;
    //console.log(str);
    let str2=str.split("");
    let string="";
    let string1="";
    let i=0;
    let c=0;
    for(let i=0;i<str2.length;i++)
    {

        if(c>0)
        {
            string+=str2[i];
            continue;
        }
        if(str2[i]==str1)
        {
            c=c+1;
        }
    }
    console.log(string);
    if(c==0)
    {
        string="The letter does not exist in the sentence";
    }
    document.getElementById("nui").textContent=string;
    
}
