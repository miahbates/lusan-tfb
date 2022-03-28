Introduction

### What are you building?

Lusan: an e-commerce site that allows intermediate to experienced gardeners to browse and compare seeds from different providers.

### Why are you building it?

To improve the seed browsing and purchasing experience for gardeners. Currently, the seed purchasing process is done through physical catalogues or out-dated websites and as a result, it is  cumbersome and time consuming.

Our app will enable users to look up and compare seeds, filter search results based on different traits (e.g. organic or soil type) and research basic growing conditions in their area.

## Project scope

Our core user stories are:

As a user I want to...
- Search for seeds (vegetables, herbs and flowers)
- Filter search results by specific parameters (type, climate, water, soil and price)
- Compare a seed variety offered by different providers (price, spp, stock)
- Add products to my wishlist
- View my wishlist
- Find out my growing conditions based on my postcode (stretch)

### What are you not building?

After feedback from our user research and sprint planning, due to the time constraints of a 2 week build we have decided not to build the following:

- Authentication: we are prioritising front-end features and an open, accessible user-experience over building a mechanism for user login
- Database: as the web-scraping data for this project is not yet available, we will generate dummy-data and will use the WebStorage API to store items in the wishlist. The wishlist data will persist for each individual user in their browser (per device)
- Shopping cart: we will not build a payment mechanism but instead signpost to seed providers
- Growing conditions - front-end only with dummy data, if time allows

### How did you decide what features were important?

We decided which features to build based on our discussions with the product owner and considering the time limitation of 2, week-long sprints. Our goal is to deliver a functioning MVP that our product owner can use to demonstrate the future potential of the app.

### Project plan

### How are you going to structure your sprints?

We have divided our main issues into sprint 1 and sprint 2 - in sprint 1 we'll focus on the first two user stories, searching and filtering seeds.

### What order are you going to build in?

We are going to focus on building out the front end first - partly because we are unsure as to whether we will have a database or just a js file with dummy data. We will prioritise key issues first, focus on displaying the seeds to start and then filtering them on the page. The wishlist and growing conditions will be made later on in the sprints.

### How did user research inform your plan?

User research validated what the most important features are to build - users found the searching clear and easy to use and were able to filter the results without guidance. Users also enjoyed the clean, simple design.
User research revealed there was some confusion around the home page and landing page, so we consolidated these two pages into one and refactored our wireframe.
While users were really keen on the growing conditions feature, our own research into available APIs revealed that this wasn't going to be possible for us to build as an MVP.

### Requirement analysis

### How will you ensure your project is accessible to as many users as possible?

As it is a web app it should be accessible to those with internet access. We will run lighthouse reports to ensure that we are creating an accessible app and run accessibility checks on any CSS libraries used.

### Are there any legal or regulatory requirements you should consider?
Not at the MVP stage. Moving forward, the product owner will need to consider GDPR compliance and cyber security when storing and handling user information.

## Project learnings

### Did your team work effectively?

### What would you do differently next time?

## Research and findings
### What did you find out from user testing?
- Our initial user flow could be narrowed and focused to make the user experience more intuitive by condensing certain sections of the app into one
- Users liked the design of the app and found the UI easy to navigate
## Project outcomes
### Were your assumptions right or wrong?
## Recommendations and conclusions
### What features would you prioritise to build next?
### Was the project a success?
Software Development Lifecycle stages
Planning
What roles did your team take on?
Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

### Did these roles help your team work effectively?
Yes, dividing the roles amongst us meant that w ecould collaborate efficiently on development and also contribute to the project based on our roles. We all contributed and worked on issues that were associated with all roles with a clear understanding of who was ultimately responsbile for each role. 

## Analysis
### What might be the intended and unintended consequences of building this product?
## Design
### How did you plan a user experience?
We created detailed, high-fidelity wireframes and tested them with users. We iterated over the wireframe design based on usability testing findings.

Wireframes - Iteration 1 (insert screenshots on Github)

Wireframes - Iteration 2

## Implementation/Build
### How did you ensure your code was good?
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

### What interesting technical problems did you have to solve?
- Dynamic Routing in Nextjs (with no backend)
- Managing many React states
- Filtering user search results
- Generating a set of dummy data
- Resolving package-lock.json conflicts
- Using Web Storage API with React

### How did you debug issues that arose?
- Console.log at certain break points
- Nextjs debugger tool
- Devtools inspector (console errors)
- Vercel build logs

## Test
### How did you verify your project worked correctly?
Identify and create test scenarios which satisfy the project specification (S6)

### Did writing automated tests catch any bugs?
Analyse unit testing results and review the outcomes, correcting errors. (S4)

## Deploy
### Where/how did you deploy your application?
- Vercel 

### What problems did you encounter during deployment?
## Maintain
### Is it easy for someone make changes to the codebase?

### Could a new person quickly be onboarded to contribute?
