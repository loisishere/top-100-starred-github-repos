# Top 100 Starred Repos in GitHub

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. This project is also using CSS so no addition packages needed to be installed.

## Getting Started

Make sure you have the latest NPM/Node installed globally. If you don't have Angular CLI runniing globally then install it with `npm install -g @angular/cli`

## To Run This Project Locally

Run `ng serve --open` for a dev server. The flag `--open` will automatically open `http://localhost:4200/` in your default browser. The app will automatically reload if you change any of the source files.

## My Process

Development took approximately 2 hours and 10 minutes. This does not include updates and corrections. The steps I took are as followed:

1. Built out the needs for the project using [Wunderlist](https://www.wunderlist.com/) in order.
2. Generated the children components: The list and the commit details
3. `app.service.ts` contains two API calls:
    - A list of repos with stars over 35,000 (which can be over 40,000), pagination is include to limit the results to 100 on page 1.
    - Based on the Repo clicked, get a list of commits based on the day before till now i.e `Date.now >= yesterday`  
      Also note use of `BehaviorSubject` from rxjs. An observable that allowed use of `async` which means when there is a change to the data a check occurs to update the DOM.
4. Display the list of repos in the `list.component.html` using `*ngFor` on a div to loop through the array
5. Add styling which means adding flexbox to the list.
6. Create a commit-details component based on the repo clicked. Used the same styling from the styles from the list component.
    - Eventually I moved the styling to the `styles.css` since its being used globally.
7. Completed the styling for the app

### Nice To Haves

If I had the time I would add Cypress testing. Since this is all front end it would make sense to do end-to-end testing.
