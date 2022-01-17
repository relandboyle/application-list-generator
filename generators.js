/**
    linkedin.com
 */
console.log([...new Set([...document.querySelectorAll('.job-card-container__company-name')].slice(4).map(nameDiv => nameDiv.innerText)).values()].join(','));


/**
    glassdoor.com
 */
console.log([...document.querySelectorAll('h2')].slice(1).reduce((csv, company) => {
    return csv.concat(company.innerText, ',');
}, ''));


/**
    keyvalues.com
 */
console.log([...document.querySelectorAll('.thumbnail-link .thumbnail-company')].reduce((csv, company) => {
    return csv.concat(company.innerText, ',');
}, ''));