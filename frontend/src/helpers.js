exports.stepsArray = [
	{status: '', alert: '', step: 0, details: 'Website Application', link: " ", url: ''},
	{status: '', alert: '', step: 1, details: 'Khan Academy: Basics Tutorial /  Solo Learn: Basics Tutorial', link:'https://www.khanacademy.org/', url: ''},
	{status: '', alert: '', step: 2, details: 'Code Academy: HTML & CSS Tutorial', link:'https://www.codecademy.com/', url: ''},
	{status: '', alert: '', step: 3, details: 'Code Academy: Responsive Design Tutorial', link:'https://www.codecademy.com/', url: ''},
	{status: '', alert: '', step: 4, details: 'Create a Web Page', link: " ",  url: 'https://codepen.io/'},
	{status: '', alert: '', step: 5, details: 'Iterate a Web Page', link: " ",  url: 'https://codepen.io/'}
];

exports.ValidURL = (str) => {
    var pattern = new RegExp('^((https?:)?\\/\\/)?'+ 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
        '(\\?[;&a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$','i'); 
    if (!pattern.test(str)) {
        return false;
    } else {
        return true;
    }
}

exports.containPartOf = (str, link) => str.indexOf(link)      
 