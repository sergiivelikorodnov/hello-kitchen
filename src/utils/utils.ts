export const escapeHTML = (string:string) => {
    const parser = new DOMParser();
	const doc = parser.parseFromString(string, 'text/html');
	return doc.body;
}

export const truncateString = (str:string, num:number)=> {
	if (str.length <= num) {
	  return str
	}
	return str.slice(0, num) + '...'
  }
