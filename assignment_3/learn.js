var names = ['usman','john','affan','frasat','Junaid'];

for (var i = 0; i < names.length; i++) 
{
	var checkname = names[i];
	if(checkname.charAt(0)==='j'||checkname.charAt(0)==='J')
	{
		console.log("GoodBye " + checkname);
	}
	else
	{
		console.log("Hello " + checkname);
	}
}