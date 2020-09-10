# boardInfinity-backend-assignment

# Problem Statement:
Create a REST API in nodejs with mongodb as database for creating tasks with a duration (in minutes). 
User can insert a todo record with a sample schema like:
- task name
- task description
- creator
- duration
- createdAt

There will be two endpoints:
/add - POST endpoint which adds the data
/list - GET endpoint which lists all the data

Now, the tricky part is, once a data is created with a duration, it should be automatically deleted after the assigned duration. 
That means if I create a task called "Interview Assignment" with duration set to 30 mins at 1:00pm on 1 January, the record in the 
database will be automatically removed at 1:30pm on 1st January.

I've used TTL indexes functionality to perform this task.

# Live at - https://bi-backend-assignment.herokuapp.com/
You can use POSTMAN and please use /get and /post endpoints to perform the specific operations.
