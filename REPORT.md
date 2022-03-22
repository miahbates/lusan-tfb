Introduction

### What are you building?

An e-commerce style site which allows intermediate to experienced gardeners to browse and compare seeds from different providers and signposts to providers.

### Why are you building it?

At the moment alot of seed purchasing is done through catalogues and can be very time consuming comparing the prices and quantities of different seeds in different catalogues.
The app will enable users to look up and compare seeds, filter based on different traits (e.g. organic or soil type) and research growing conditions in their area.

## Project scope

Our core user stories are as follows:

- Search for seeds (vegetables, herbs and flowers)
- Filter search results by specific parameters (type, climate, water, soil and price)
- Compare a seed variety offered by different providers (price, spp, stock)
- Add products to my wishlist
- View my wishlist
- Find out my growing conditions based on my postcode (stretch)

### What are you not building?

After feedback from our user research and sprint planning, due to the time constraints of a 2 week build we have decided not to build the following:

- database and authentication - we will use local storage to store items in the wish list and will either use a database provided by the product owner or dummy data
- shopping cart - even though this is a MVP for a e-commerce site, we will build a wish list instead
- growing conditions - we don't have access to the data needed to build this out properly but will build the front end if we have time

### How did you decide what features were important?

We based this on our discussions with the product owner and by deciding which features we could build in the 2 week sprints, so that we are able to deliver a functioning MVP.

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

Project learnings
Did your team work effectively?
What would you do differently next time?
Research and findings
What did you find out from user testing?
Project outcomes
Were your assumptions right or wrong?
Recommendations and conclusions
What features would you prioritise to build next?
Was the project a success?
Software Development Lifecycle stages
Planning
What roles did your team take on?
Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

Did these roles help your team work effectively?
Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)

Analysis
What might be the intended and unintended consequences of building this product?
Design
How did you plan a user experience?
What technical decisions did you make?
Server-render vs client-render vs both
Relational or non-relational or no DB
Self-hosted or platform-as-a-service
Frontend first vs DB first
Did you create a technical specification?
Review methods of software design with reference to functional/technical specifications and apply a justified approach to software development (K11, S11, S12)

Implementation/Build
How did you ensure your code was good?
Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)

What interesting technical problems did you have to solve?
Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)

How did you debug issues that arose?
Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)

Test
How did you verify your project worked correctly?
Identify and create test scenarios which satisfy the project specification (S6)

Did writing automated tests catch any bugs?
Analyse unit testing results and review the outcomes, correcting errors. (S4)

Deploy
Where/how did you deploy your application?
Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)

What problems did you encounter during deployment?
Maintain
Is it easy for someone make changes to the codebase?
Could a new person quickly be onboarded to contribute?
