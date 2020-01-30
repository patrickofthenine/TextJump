
class Parser {
	constructor(book) {
		this.book = book;
		this.results = {book:book}
	};

	parse = () => {
		this.results['body'] = this.body;
		this.results['chapters'] = this.chapters;
		this.results['paragraphs'] = this.paragraphs;
		this.results['lines'] = this.lines;
		this.results['words'] = this.words;
		this.results['letters'] = this.letters;
	};

	get body();
	get chapters();
	get paragraphs();
	get lines();
	get words();
	get letters();
}

export default Parser;