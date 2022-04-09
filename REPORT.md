Introduction
---

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

## Project plan

### How are you going to structure your sprints?

We have divided our main issues into two, week-long sprints. We will focus on delivering an MVP in teh first sprint and then build new features / refine and refactor in the second sprint.

### What order are you going to build in?

We are going to focus on building out the front end first, as we do not yet know if the data we need will be available form the PO, or if we will generate dummy data. We will prioritise key issues first, focus on displaying the products and searching/filtering. The wishlist and growing conditions are goals for the second sprint.

### How did user research inform your plan?

User research validated what will be the most important features to build: users found the searching clear and easy to use and were able to filter the results without guidance. Users also enjoyed the clean, simple design.

User research revealed there was some confusion around the home page and landing page, so we consolidated these two pages into one and refactored our wireframe.
While users were really keen on the growing conditions feature, our own research into available APIs revealed that this wasn't going to be possible for us to build as an MVP.

## Requirement analysis

### How will you ensure your project is accessible to as many users as possible?

As it is a web app it should be accessible to those with internet access. We will run lighthouse reports to ensure that we are creating an accessible app and run accessibility checks on any CSS libraries used.

### Are there any legal or regulatory requirements you should consider?
Not at the MVP stage. Moving forward, the product owner will need to consider GDPR compliance and cyber security when storing and handling user information.

## Project learnings

### Did your team work effectively?
Yes, we assigned clear team roles and allowed each other the space to work within those roles, whilst still offering help and support and collaborating on more complex challenges. We kept close and open communication, providing honest feedback and also praising each other on achievements. We reviewed each other's code upon merging pull requests and kept all team members informed on changes to the codebase. 

### What would you do differently next time?
Communicate the importance of having any data and assets or copy available to the development team by the PO no later than the end of the design phase. 

## Research and findings
### What did you find out from user testing?
- Our initial user flow could be narrowed and focused to make the user experience more intuitive by condensing certain sections of the app into one
- Users liked the design of the app and found the UI easy to navigate
## Project outcomes
### Were your assumptions right or wrong?
We received feedback from users and from the development team that will be taking this project forward that has validated our assumptions of the overall design, user journey and core features this product should deliver.

## Recommendations and conclusions
### What features would you prioritise to build next?
Features that were out of scope for this project but could be implemented next are:

- Left sidebar for filters in desktop view
- Relational database and an API for querying 
- Web scraped data
- Transform wishlist into a shopping cart
- User authentication
- Climate data and growing conditions
### Was the project a success?
Yes, we built all the features we set out as core features within the build sprints and received positive feedback from our PO. 

### Did these roles help your team work effectively?
Yes, dividing the roles amongst us meant that w ecould collaborate efficiently on development and also contribute to the project based on our roles. We all contributed and worked on issues that were associated with all roles with a clear understanding of who was ultimately responsbile for each role. 

## Analysis
### What might be the intended and unintended consequences of building this product?
Intended:
- Improve gardener's experience of finding and purchasing seeds
- Track what people are growing and improve biodiversity
- Help gardeners raise successful crops by providing growing conditions information and knowledge
- Improve the business of small, family-owned companies by improving their digital presence and exposing them to new, potential customers

Unintended:
- User data being sold to advertisers or third parties

## Design
### How did you plan a user experience?
We created detailed, high-fidelity wireframes and tested them with users. We iterated over the wireframe design based on usability testing findings.

Wireframes - Iteration 1 (insert screenshots on Github)

Wireframes - Iteration 2

## Implementation/Build
### How did you ensure your code was good?
- Testing code to make sure it works as intended
- Frequent refactoring
- Tech spike research 
- Following documentation for frameworks and libraries
- Following file naming and structure conventions
- Asking for code review from mentors

### What interesting technical problems did you have to solve?
- Dynamic Routing in Nextjs (with no backend)
- Using React Context to pass state between Next.js pages
- Managing many React states
- Filtering user search results
- Generating a set of dummy data with Chance library
- Resolving package-lock.json conflicts
- Using Web Storage API with React

### How did you debug issues that arose?
- Console.log at certain break points
- Nextjs debugger tool
- Devtools inspector (console errors)
- Vercel build logs

## Test
### How did you verify your project worked correctly?
- Manual testing during development
- Cypress end-to-end testing
- Logging React states to ensure they are being passed into components cand pages correctly
- Reviewing deployment at stand up to catch bugs
- ESlint to catch syntax errors

### Did writing automated tests catch any bugs?
We used Cypress for end-to-end testing. As we were building an MVP, we chose to test the "happy path" to ensure that the core features and functionalities of the desired user flow were working correctly. 

There is room for improvement by testing edge cases and writing unit tests for helper and database functions.

## Deploy
### Where/how did you deploy your application?
As the project was built with Next.js, we opted for deployment with Vercel for optimal performance and compatibility. Vercel also provided helpful debugging logs and an easy handover process.

### What problems did you encounter during deployment?

We deployed the project successfully at the time of setup. This approach ensured that whenever deployment broke, it was clear what changes to the code had caused the failed build.

By using tools like ESlint, we managed to keep build fails to a minimum. With the help of the Vercel logs, we were able to debug and fix failed builds quickly.
## Maintain
### Is it easy for someone make changes to the codebase?
Yes, we have provided installation and development instructions and tech stack details in the project's README. 

We strived for an organised and clear codebase by following file naming conventions and grouping files in appropriate folders.

Our project Kanban board clearly describes what issues and features that have been completed and which commits are linked to which issue.  

### Could a new person quickly be onboarded to contribute?

Yes, as the codebase is still relatively small, a new developer could get to grips with it in a matter of hours.

We have developed a design framework of CSS variables and reusable styled components which a developer could use to build a new feature quickly.

A new developer can also use our commit message template to align with our workflow. 