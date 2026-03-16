function getSubs()
{
    let k = document.getElementById("branch").value;
    alert(k);
    if (k=='AIML')
    {
        aimlsubs();
    }
    else if(k=='DS')
    {
        dssubs();
    }
    else if (k=='CSS')
    {
        csssubs();
    }
    else 
    {
        alert("Select any Branch");
    }
}

function aimlsubs()
{
    let data=`<tr><td>ML</td></tr>
    <tr><td>DL</td></tr>`;
    $("#result").html(data);
}