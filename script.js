var names=new Array();
names[0]="Aakanksha";
names[1]="Jay";
names[2]="Jen";
names[3]="jupiter";
names[4]="pana";
names[5]="piya";
names[6]="jneha";
names[7]="paula";
names[8]="adi";
names[9]="jayesh";


for (var i = 0; i < names.length; i++) {

	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}