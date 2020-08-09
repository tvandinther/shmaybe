# UoA Course Catalogue Browser
## Created by Team Shmaybe at WDCC's Hack Weekend 8-9 August 2020

### Members:
- Annie
- Tom
- Justin
- Jacinta
- Jing
- Dong-Mei


## Instructions

### Local development
* Create and checkout a new repository based on this template.
* copy .env-template to .env and fill in secrets 
* setup local or remote MongoDB
* `npm install`  to install the packages
* `npm run dev` to start the dev server
* `npm run build` to build the deployment package
* `npm start` to run the production server.

### Test 
* place *.spec.js files in `__tests__` folders close to tested items
* `npm test` to run the test suite
* `npm run test:coverage` to get coverage

### First time deployment
You will require accounts on 
* Auth0 - for identity management - see docs/Auth0Setup.md
* Mongo Atlas Cloud - for a remote database
* Vercel - for instant deployments.

To deploy the production application run `vercel --prod ` in the root folder. (you will need to setup a vercel account)

You will need to complete
* Access keys for Auth0 and vercel in .env.local and vercel.conf
* prod url for app in .env, vercel.conf and Auth0 web app configuration. 


