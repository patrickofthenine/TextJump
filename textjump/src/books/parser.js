class Parser {
	parse(source){
		this.source = source;
		this.results = {
			source: 	this.source,
			parsed: 	this.parsed,
		}
		return this.parsed;
	}
	
	get parsed(){
		let regex = /\r?\n|\r/g
		let text = this.source.text.replace(regex, " ")
		text = text
			.split(" ")
			.map( (t)=>{return t.trim()})
			.filter( (t)=>{ if(t.length>0){return t} })	
		return text
	}
};

export default Parser;