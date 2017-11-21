function checkDayDifference(dueDate) {
	const oneDay = 1000*60*60*24;
	const inDate = new Date();
	let msDifference = inDate.getTime() - dueDate.getTime();
	let dayDifference = Math.round(msDifference / oneDay)	
	console.log(dayDifference);
	if(dayDifference <= 0){
		return dayDifference = 0;
	}else{
		return dayDifference;
	}
}

module.exports = checkDayDifference