/**
    linkedin.com
 */
console.log(
  [
    ...new Set(
      [...document.querySelectorAll('.job-card-container__company-name')]
        .slice(4)
        .map((nameDiv) => nameDiv.innerText)
    ).values(),
  ].join(',')
);

/**
    glassdoor.com
 */
console.log(
  [...document.querySelectorAll('h2')].slice(1).reduce((csv, company) => {
    return csv.concat(company.innerText, ',');
  }, '')
);

// Or the following to remove companies without open positions

console.log(
  [...document.querySelectorAll('h2[data-test="employer-short-name"]')]
    .map((elem) => elem.innerText)
    .filter((_, i) => {
      const openJobs = parseInt(
        document.querySelectorAll('h3[data-test="cell-Jobs-count"]')[i]
          .innerText
      );
      return !isNaN(openJobs);
    })
    .join(',')
);

/**
    keyvalues.com
 */
console.log(
  [...document.querySelectorAll('.thumbnail-link .thumbnail-company')].reduce(
    (csv, company) => {
      return csv.concat(company.innerText, ',');
    },
    ''
  )
);

/**
    https://blog.wealthfront.com/career-launching-companies-list/
 */ console.log(
  [...document.getElementsByClassName('company_name')]
    .map((div) => div.outerText)
    .join(',')
);
