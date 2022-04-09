# Application List Generator

## A series of scripts to generate lists of top companies to target in the job hunt.

Some of the biggest hurdles in the job search can be eliminated by generating a pre-vetted list of companies and letting that list guide your application process. Think of this as a To-Do list for job applications. Eliminate the indecision and the cognitive load of deciding where to apply next!
<br><br>

### Contents
- [Key Values](#key-values)
- [Wealthfront](#wealthfront)
- [Tech Jobs for Good](#tech-jobs-for-good)
- [Hiring Without Whiteboarding](#hiring-without-whiteboarding)
- [4/dayweek.io](#4dayweek)
- [LinkedIn](#linkedin)
- [Glassdoor](#glassdoor)
<br><br>

### Follow the steps below to generate your own curated list of target companies.

1. Visit one of your favorite sites for searching company profiles and open positions.
2. Open your browser's developer console.
3. Copy/Paste the appropriate script into the console.
4. The resulting string is a bar-separated list of values.
<br>

### Follow these steps to get your personalized list into a column in Google Sheets.

1. Copy/Paste the resulting string into a spreadsheet cell.
2. Split the cell data into column headers.
3. Copy and Paste-Special/Transposed the column headers into a single column.
<br>

#### Recommended:
> Select all of the company names and randomize the range in your application tracker document.
> <br>
> Always apply to the next company on your list.
> <br>
> Don't waste any energy making that decision!
<br>

## <br>Key Values

<p align="center">
    <img src="https://github.com/relandboyle/application-list-generator/blob/56d99dc732c6a46cd2ba1c89d6e320aad688b388/images/visible-styled.png" alt="Ho to do it" width="80%" />
</p>
<br>

1. Visit [keyvalues.com](https://www.keyvalues.com/).
2. Select all of the values that are important to you in an employer.
3. Open your browser's developer console.
4. Copy/Paste the following code into the console:
```
console.log([...document.querySelectorAll('.thumbnail-link .thumbnail-company')].reduce((csv, company) => csv.concat(company.innerText, '|'), ''));
```
5. Copy/Paste the returned string to your application tracker.
<br>

## <br>Wealthfront

<p align="center">
  <img src="https://blog.wealthfront.com/wp-content/themes/wealthfront-chisel/career-launching-companies/map_2021.png" alt="see more wealthfront" width="50%">
</p>
<br>

1. Visit [Wealthfront's career-launching companies list](https://blog.wealthfront.com/career-launching-companies-list/).
2. Copy/Paste the following code into the console:
```
console.log([... document.getElementsByClassName('company_name')].map(div => div.innerText).join('|'))
```
3. Copy/Paste the returned string to your application tracker.
<br>

## <br>Tech Jobs for Good

<p align="center">
  <img src="https://github.com/relandboyle/application-list-generator/blob/d953accfc972455b5c0f21b28fe6fdc875f27517/images/TJfG.png" alt="see more wealthfront" width="50%">
</p>
<br>

1. Visit [Tech jobs for Good](https://techjobsforgood.com/#q).
2. Copy/Paste the following code into the console:
```
console.log([...document.querySelectorAll('.company_name')].map((name) => name.innerText).join('|'));
```
3. Copy/Paste the returned string to your application tracker.
<br>

## <br>Hiring Without Whiteboarding

<p align="center">
  <img src="https://miro.medium.com/max/700/0*weCcEE0HAegQaBcT" alt="whiteboarding" width="50%">
</p>
<br>

1. Visit [Hiring Without Whiteboarding](https://github.com/poteto/hiring-without-whiteboards).
2. Copy/Paste the following code into the console:
```
console.log([].concat(...[...document.getElementById('readme').querySelectorAll('ul')].slice(3, 12).map(list => [...list.querySelectorAll('a')].map(item => item.innerText))).join('|'));
```
3. Copy/Paste the returned string to your application tracker.
<br>

## <br>4/dayweek

<p align="center">
    <img src="https://github.com/relandboyle/application-list-generator/blob/2aed3578dc631f89ac4855ae87c15fd1d6ce79a2/images/4dayweek.PNG" alt="four day week" width="50%">
</p>
<br>

1. Visit [4/dayweek.io](https://4dayweek.io/companies)
2. Copy/Paste the following code into the console:
```
console.log([...document.querySelectorAll('.company-tile-title')].reduce((output, company) => output.concat(company.innerText.slice(company.innerText.indexOf('\n') + 1), '|'), ''));
```
3. Copy/Paste the returned string to your application tracker.
<br>

## <br>LinkedIn

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
console.log([...new Set([...document.querySelectorAll('.job-card-container__company-name')]. slice(4).map(nameDiv => nameDiv.innerText)).values()].join('|'));
```
7. Copy/Paste the returned string to your application tracker.
<br>

## <br>Glassdoor
1. Visit this exact URL to browse companies: [glassdoor.com](https://www.glassdoor.com/Explore/browse-companies.htm).
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
console.log([...document.querySelectorAll('h2')].slice(1).reduce((csv, company) => csv.concat(company.innerText, '|'), ''));
```
7. Copy/Paste the returned string to your application tracker.
8. Repeat steps 6 and 7 to pull info from multiple pages of results.
<br>

<br>
<br>
<br>
<br>
<br>
