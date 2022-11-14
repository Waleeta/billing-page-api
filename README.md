# README

* Running the app:
    - Bundle install and npm install in the rails/react apps respectively
    - Rails db:migrate
    - Rails db:seed
    - Start the rails server
    - Run heroku local -f Procfile.windows in another window to start front end app
    - Go to localhost:5100 and see the billing page
    - Go to localhost:3000/api/v1/users && localhost:3000/api/v1/addresses to see the returned json, respectively


* How I prioritized
    - Built the bones of the back end, then the front end
    - Built out the form on the front end using <form> && <input> fields to quickly test the create api
    - Updated the form to Formik, which is an indispensable library for forms in react - it handles validations and error messaging easily, otherwise I would have :
        - Used setState to set the attributes from the text inputs (eg, setFirstName, setCity, etc)
        - In the handleSubmit, done the validation check (eg, is the phone 10 digits, is anything blank, etc)
        - Rendered an error message clarifying which field(s) had issues.
        - Formik is a much quicker way to do all of this. 
    - Once I could successfully create user/address, I worked on encrypting the data:
    - Looked into attr_encrypted, which is a ruby gem that allows encryption of attributes (e.g. in the user model, could say encrypts :first_name, last_name, etc). Decryption with this is also possible with its decrypt method and encryption key. However, I instead made the decision to upgrade rails and use the new attr_encrypted library that comes with it:
        - First, for time - a much faster way to encrypt data in Rails
        - Second, while the attr_encrypted gem seems to be what most people use to encrypt rails/sql data, the gem is actually not that widely used, and does not seem to be regularly updated.


* TO DOs
I timeboxed this to stick to 4 hours or less: Here is what I would do next:

    - BillingAddresses Component: it is fetching the data to display. The component itself needs to be completed. React Router to link to the separate view. 
    - More states to the dropdown - I added a few for the MVP
    - More specific validations for zip and phone number
    - Tests! Formik allows for all of the form validations we need for the purposes of this app
    - Styled components instead of .css files
    - Styled form
    - Create an Error component
    - Better organize components (separate folders)
    - Model level validations (presence, uniqueness of email)
    - Tighten up error handling in apis



