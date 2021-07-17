# #18 Nosql Workout Tracker

![Screenshot1](/public/img/fitness1.png)

![Screenshot1](/public/img/fitness2.png)

## Youtube https://youtu.be/IZYVUhPG2a8

## Heroku https://git.heroku.com/noslq-fitness.git

## Task/Criteria

#### Build Mongo DB with Mongoose Schema with front end that interacts with client
Database should:
  * track:
    * exercises
    *  name
    *  type
        * cardio
          * duration
          * distance
          * environment
        * resistance
          *  weight
          *  sets
          *  reps
        * combined
          * environment
          * duration
    * stats over 7 day period
      * weight total
      * time  total
###### ** NOTE actual model and schema built to reflect parameters given in seed, not how I read the criteia**
Client side:
  * upon app open choose between:
    * Continue with most recent plan activity
      * add exercise
      * create new plan (exits current plane and goes to same destination as Create new plan)
    * Create new plan:
      * add new exercise with atrributes
      * return to start page
    * View last 7 workout plans
      * View Stats
        combined weights
        combined durations
    * Exit app
 
 ### Build

MongoDB atlas plus Heroku

Rrequired for submition:

* The URL to the deployed application

* The URL to the GitHub repository