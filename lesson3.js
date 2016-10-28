//Первое задание делал в прошлом уроке
//Второе задание
var b = "";
for (var i = 1; i <= 10; i++) {
	b +="*";
	console.log(b);
}

//Третее задание
for (var i = 0; i < 8; i++) {
	var str = (i % 2 === 0) ? '' : '* '; 
		for (var j = 0; str.length < 16; j++) {
			str = (j % 2 === 0) ? (str + '# ') : (str + '* ');
		}
	console.log(str);
}