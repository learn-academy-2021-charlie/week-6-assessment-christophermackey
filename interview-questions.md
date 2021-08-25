# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: We can create a new reference column in the sighting table with a simple migration. The name of the foreign key would be animal_id and it would be part of the Sightings model. We can use the command rails g migration add_animal_id_to_sightings animal_id:number 

  Researched answer: The foreign key always goes on the belongs_to side, which is Sighting in this case. The naming convention for the foreign key should always be modelname_id and the data type should be integer. Oops! I used number instead of integer above #facepalm. 


2. Which RESTful API routes must always be passed params? Why?

  Your answer: edit/update and destroy must be passed params. In order to update or delete something we need to specify the instance being updated or deleted. 

  Researched answer: I forgot the most obvious one, show! A param must be passed to show a specific item, unless we are showing all items. Params are also needed editing items. This will return an HTML form to edit that particular item. Once it is edited, a Param is needed to update that item. The same concept is applied when deleting an item.



3. Name three rails generator commands. What is created by each?

  Your answer: The only two I can think of are a model generator and a migration generator. When generating a model, we are creating a table with its column names and data types for those columns. We can generate migrations to add additional columns to a particular table. 

  Researched answer: Resource generator is another generator command. This is used to create a new model with its corresponding database table, controller, and view folder. The generate command for model takes the name of the model we intend to create, the name of each column, and the data type of each column as arguments. The name of the model is uppercase and singular by convention. Generating a migration allows us to edit a database. It can change a column's name or data type, add a new column or remove a column. Migration names can be snake_cased or PascalCased.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students          
- this would allow us to 'read' all items from the student database. The controller method for this would be index containing an instance variable for Student.all.

method="POST"   /students       
- Post is used for creating a new table item and would use the create controller containing an instance variable for Student.create. This action would be performed when clicking a button to add a new student to the database.

method="GET"    /students/new
- this would display a form for us to add a new student to the database. It would use the new controller and route to a file called new.html.erb.

method="GET"    /students/2  
- this is passed in a param of '2' and would display the second item in the Student databse. It uses the show controller to display the show.html.erb file containing the data of that item.

method="GET"    /students/edit/2    
- edit allows us to start the process of updating. In this case we are editing the second item in the Student database. This would use the edit controller to display a form that is prepopulated with the current data of student 2.

method="PATCH"  /students/2      
- Patching is the method that allows us to update a particular table item. This would use the update controller method to send the new data for that item to the databse.

method="DELETE" /students/2      
- Delete is the method for deleting a particular database item. The item being deleted is associated with the param being passed in. It uses the destroy controller method to delete the item.


5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
<!-- “As a [persona], I [want to], [so that].” -->
1)As a user, I want to click an 'add' button, so that a new text input field opens up.
2)As a user, I want to add text to the input field, so that I can keep track of my to do list.
3)As a user, I want to click a 'submit' button, so that the item is added to the list. 
4)As a user, I want to be able to edit a to-do list item, so that I can update the text.
5)As a user, I want to delete a to-do list item, so that it gets removed from the list.
6)As a user, I want to give my to-do list a title, so that I can keep track of different lists.
7)As a user, I want to edit my to-do list title, so that it can be renamed.
8)As a user, I want to delete a whole to-do list, so that it gets removed from the app.
9)As a user, I want to see a share button, so that I can share a list through email or text.
10)As a user, I want to click a checkbox next to a to-do list item, so that I can mark an item as done.
