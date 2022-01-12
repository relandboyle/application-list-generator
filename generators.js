/**
    linkedin.com
 */




/**
    glassdoor.com
 */




/**
    keyvalues.com
 */
console.log([...document.querySelectorAll('.thumbnail-company')].reduce((csv, company) => {
    return csv.concat(company.innerText, ',');
}, ''));