export const truncateString = (str:string, num:number)=> {
	if (str.length <= num) {
	  return str
	}
	return str.slice(0, num) + '...'
  }

  export const getHoursMinsTime = (totalMinutes:number) => {
	const hours = Math.floor(totalMinutes / 60);
	const minutes = totalMinutes % 60;
	if (hours===0){
		return `${minutes}min`;
	}else{
		return `${hours}h ${minutes}min`;
	}
  };

  export const getRandomRating = ():number => {
	return Math.ceil(Math.random() * 5)
  };

