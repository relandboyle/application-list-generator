/**
    keyvalues.com
 */
console.log([...document.querySelectorAll('.thumbnail-link .thumbnail-company')].reduce((csv, company) => csv.concat(company.innerText, '|'), ''));


/**
    linkedin.com
 */
console.log([...new Set([...document.querySelectorAll('.job-card-container__company-name')].slice(4).map(nameDiv => nameDiv.innerText)).values()].join('|'));


/**
    glassdoor.com
 */
console.log([...document.querySelectorAll('h2')].slice(1).reduce((csv, company) => csv.concat(company.innerText, '|'), ''));


/**
    wealthfront.com
 */
console.log([... document.getElementsByClassName('company_name')].map(div => div.innerText).join('|'));


/**
    techjobsforgood.com
 */
console.log([...document.querySelectorAll('.company_name')].map((name) => name.innerText).join('|'));


/**
    github.com/poteto/hiring-without-whiteboards
 */
console.log([].concat(...[...document.getElementById('readme').querySelectorAll('ul')].slice(3, 12).map(list => [...list.querySelectorAll('a')].map(item => item.innerText))).join('|'));


/**
    4dayweek.io
 */
console.log([...document.querySelectorAll('.company-tile-title')].reduce((output, company) => output.concat(company.innerText.slice(company.innerText.indexOf('\n') + 1), '|'), ''));
