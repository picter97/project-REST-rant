# project-REST-rant
| method | path | purpose|
--|--
GET | / | Home page|
--|--
GET | /places | Places index page |
POST | /places | Create new place |
GET | /places/new | Form page for creating new place 
GET | /places/:id | Details about a particular place 
PUT | /Places/:id | Update a particular place 
GET | /Places/:id/edit | Form page for editing an existing place 
DELETE | /Places/:id | delete a particular place
POST | /Places/:id/rant | Create a rant (comment) about a particular place 
DELETE | /places/:id/rant/:rantld | Delete a rant (commnet) about a particular place
GET | * | 404 page (matches any route not defined above)


##
REST-Rant is an app where users can review restaurants.
