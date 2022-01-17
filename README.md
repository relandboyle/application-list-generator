# Application List Generator

## A series of scripts to generate lists of top companies to target in the job hunt.

Some of the biggest hurdles in the job search can be eliminated by generating a pre-vetted list of companies. Think of this as a To-Do list for job applications. Eliminate the indecision and the cognitive load of deciding where to apply next.
<br>

Follow the steps below to generate your own curated list of target companies.
<br>

1. Visit one of your favorite sites for searching company profiles and open positions.
2. Open your browser's developer console.
3. Copy/paste and run the appropriate script into the console.
4. The resulting string is a list of comma-separated values.
<br>

![how to do it](/images/how-to.png)
<br>

1. Copy/paste the resulting string into a spreadsheet cell.
2. Split the cell data into column headers.
3. Copy/paste transposed the column headers into a single column.
<br>

## KeyValues.com

1. Visit [keyvalues.com](https://www.keyvalues.com/).
2. Select all features that are important for you in a company. There should be a grid of companies matching your criterions below the selection box.
3. Open developer console.
   * On windows and Google Chrome: press F12, then select the Console tab.
4. Paste the following code in the terminal:
> ```
> console.log([...document.querySelectorAll('.thumbnail-link .thumbnail-company')].reduce((csv, company) => csv.concat(company.innerText, ','), ''));
> ```
5. Copy the returned string somewhere safe.
6. ????
7. [Profit](https://www.youtube.com/watch?v=a5ih_TQWqCA)

## LinkedIn.com
1. Visit [linkedin.com](https://www.linkedin.com/).
2. Login.
3. In top nav bar, click on *Jobs*.
4. Now scroll to the bottom of this page until it no longer dynamically loads job postings. You know you're there when you see the blue *See more jobs* hyperlink.

![See more jobs button](/images/linkedin_see_more_jobs.png)

5. Open developer console.
   * On windows and Google Chrome: press F12, then select the Console tab.
6. Paste the following code in the terminal:
> ```
> console.log([...new Set([...document.querySelectorAll('.job-card-container__company-name')]. slice(4).map(nameDiv => nameDiv.innerText)).values()].join(','));
> ```
7. Copy the returned string somewhere safe.
8. ????
9. [Profit](https://www.youtube.com/watch?v=a5ih_TQWqCA)

## GlassDoor.com
1. Visit [glassdoor.com](https://www.glassdoor.com/).
2. You may have to first create an account by giving them your first unborn child.
3. Search for *software engineer*. Your choice to narrow down by location or not.
4. In result page, scroll down until you see the blue *See All Companies >* hyperlink.
![See all companies hyperlink](/images/glassdoor_see_all_companies.png)
5. Filter the companies to your heart's content. I recommend a rating of four stars or higher.
   * Note that the results are paginated, with 10 companies per page.
6. For as many pages as you'd like, paste the following code in the terminal:
> ```
> console.log([...document.querySelectorAll('h2[data-test="employer-short-name"]')].map(elem => elem.innerText).filter((_, i) => {
>    const openJobs = parseInt(document.querySelectorAll('h3[data-test="cell-Jobs-count"]')[i].innerText);
>    return !isNaN(openJobs);
> }).join(','));
> ```
7. Copy the returned string somewhere safe. Either return to step 6 or continue.
8. ????
9. [Profit](https://www.youtube.com/watch?v=a5ih_TQWqCA)

### Recommended:
> Select all of the company names and randomize the range in your application tracker document.
> Always apply to the next company on your list. Don't waste any energy making that decision.
