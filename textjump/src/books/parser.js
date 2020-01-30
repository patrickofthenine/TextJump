class Parser {
	constructor(){
		this.results = {}
	}
	parse(book){
		console.log(book);	
		this.book = book
		this.results['body'] = this.body;
		this.results['chapters'] = this.chapters;
		this.results['paragraphs'] = this.paragraphs;
		this.results['lines'] = this.lines;
		this.results['words'] = this.words;
		this.results['letters'] = this.letters;
	}

	get body(){
		return (this.book) ? this.book.text : null;
	}
	get chapters(){}
	get paragraphs(){}
	get lines(){}
	get words(){}
	get letters(){}
};

export default Parser;