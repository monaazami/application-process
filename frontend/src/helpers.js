exports.stepsArray = [
	{step: 0, details: 'Website Application', link: " ", url: ''},
	{step: 1, details: 'Khan Academy: Basics Tutorial /  Solo Learn: Basics Tutorial', link:'https://www.khanacademy.org/', url: ''},
	{step: 2, details: 'Code Academy: HTML & CSS Tutorial', link:'https://www.codecademy.com/', url: ''},
	{step: 3, details: 'Code Academy: Responsive Design Tutorial', link:'https://www.codecademy.com/courses/learn-responsive-design/lessons/sizing-elements/exercises/relative-measurements?action=resume_content_item', url: ''},
	{step: 4, details: 'Create a Web Page', link: " ",  url: ''},
	{step: 5, details: 'Iterate a Web Page', link: " ",  url: ''}
];

exports.ValidURL = (str, link) => {
    var pattern = new RegExp('^((https?:)?\\/\\/)?'+ 
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
        '(\\?[;&a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$','i'); 
    if (!pattern.test(str)) {
        console.log(false)
        return false;
    } else {
        console.log(true) 
        console.log(str.indexOf(link))      
        // return true;
    }
}