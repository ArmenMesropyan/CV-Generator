# CV Generator
#### Video Demo:  https://youtu.be/DJJJJpac3yM
#### Description:
## The "CV Generator" project helps people make professional CVs easily.

Right now, it lets users sign up, log in, translate content, create CVs, and see them. In the future, it will allow users to add more details like personal info, education, work history, skills, languages, and hobbies.
For the part people see (client), I used technologies like React Native, which makes the app work on both iOS and Android. Expo helps develop it faster. React Navigation makes moving around in the app smooth. UI Kitten makes the app look nice. Redux Toolkit helps manage data, and Formik makes forms simple to use. I18n lets the app work in different languages.

For the part that runs on servers, I used Python and Flask. Flask CORS and Flask Restful help handle web requests. Flask SQLAlchemy and SQLAlchemy help store and organize CV data. Flask Migrate helps manage the database setup. Flask Bcrypt keeps user data secure, and Marshmallow helps with data conversion.

## Pros and Cons of technologies that used:

### Client-side:

##### Pros: React Native makes for efficient app development. Expo speeds things up. React Navigation helps with moving around. UI Kitten makes the app look good. Redux Toolkit manages data well. Formik simplifies forms. I18n helps the app work in different languages.

##### Cons: React Native might be a bit slower than fully native apps. Some advanced features might be limited with Expo. Redux Toolkit might be overkill for small apps.

### Server-side:

#### Pros: Flask is simple and flexible. Flask extensions like CORS and Restful help with web requests. Flask SQLAlchemy and SQLAlchemy manage the database. Flask Migrate helps with the database setup. Flask Bcrypt keeps data safe. Marshmallow helps with data handling.
#### Cons: Flask might need extra libraries for complex tasks. SQLAlchemy has a learning curve for beginners.