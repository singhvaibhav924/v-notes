# v-notes
A Serverless Note Taking app built on Cloudfare Workers

Deployment - https://v-notes.i-m-d-vaibhav.workers.dev/

Usage - 
  1.)Visit above URL using Postman Post request with body having JSON data with two keys "id" and "pass" this will return the saved notes if account exists else creates new account with empty notes and return JSON.
  2.)Visit above URL using Postman Post request with body having JSON data with three keys "id", "pass" and "notes" this will update the saved notes and return JSON.
