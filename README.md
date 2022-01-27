# Application List Generator

## A series of scripts to generate lists of top companies to target in the job hunt.

Some of the biggest hurdles in the job search can be eliminated by generating a pre-vetted list of companies. Think of this as a To-Do list for job applications. Eliminate the indecision and the cognitive load of deciding where to apply next.
<br>

### Follow the steps below to generate your own curated list of target companies.

1. Visit one of your favorite sites for searching company profiles and open positions.
2. Open your browser's developer console.
3. Copy/Paste the appropriate script into the console.
4. The resulting string is a list of comma-separated values.
<br>

<p align="center">
    <img src="https://github.com/relandboyle/application-list-generator/blob/56d99dc732c6a46cd2ba1c89d6e320aad688b388/images/visible-styled.png" alt="Ho to do it" width="80%" />
</p>
<br>

### Follow these steps to get your personalized list into a column in Google Sheets.

1. Copy/Paste the resulting string into a spreadsheet cell.
2. Split the cell data into column headers.
3. Copy and Paste-Special/Transposed the column headers into a single column.
<br>

## KeyValues.com

1. Visit [keyvalues.com](https://www.keyvalues.com/).
2. Select all of the values that are important to you in an employer.
3. Open your browser's developer console.
4. Copy/Paste the following code into the console:
```
console.log([...document.querySelectorAll('.thumbnail-link .thumbnail-company')].reduce((csv, company) => csv.concat(company.innerText, ','), ''));
```
5. Copy/Paste the returned string to your application tracker.
<br>

## LinkedIn.com
1. Visit [linkedin.com](https://www.linkedin.com/).
2. Create a free account if you have not done so.
3. In the top nav bar, click on *Jobs*.
4. Scroll to the bottom of this page until it no longer dynamically loads job postings. You know you're there when you see the blue *See more jobs* hyperlink.

<p align="center">
  <img src="https://github.com/relandboyle/application-list-generator/blob/4aa15980c07e66c507caf54b728f0c09db8747c1/images/see-more-linkedin.png" alt="see more linked in" width="50%">
</p>
<br>

5. Open your browser's developer console.
6. Copy/Paste the following code into the console:
```
console.log([...new Set([...document.querySelectorAll('.job-card-container__company-name')]. slice(4).map(nameDiv => nameDiv.innerText)).values()].join(','));
```
7. Copy/Paste the returned string to your application tracker.
<br>

## GlassDoor.com
1. Visit [glassdoor.com](https://www.glassdoor.com/Explore/browse-companies.htm).
2. Create a free account if you have not done so.
3. Search for *software engineer*. Consider filtering and sorting by location and star rating.
4. On the results page, scroll down until you see the blue *See All Companies >* hyperlink.

<p align="center">
  <img src="https://github.com/relandboyle/application-list-generator/blob/4aa15980c07e66c507caf54b728f0c09db8747c1/images/see-more-glassdoor.png" alt="see more glass door" width="50%">
</p>
<br>

> Note: the results are paginated, with 10 companies per page.
6. For each page, Copy/Paste the following code into the console:
```
console.log([...document.querySelectorAll('h2')].slice(1).reduce((csv, company) => {
    return csv.concat(company.innerText, ',');
}, ''));
```
7. Copy/Paste the returned string to your application tracker.
8. Repeat steps 6 and 7 to pull info from multiple pages of results.
<br>

### Recommended:
> Select all of the company names and randomize the range in your application tracker document.
> Always apply to the next company on your list. Don't waste any energy making that decision.
<br>
