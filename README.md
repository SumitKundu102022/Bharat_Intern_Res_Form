<h3>Bharat_Intern_Res_Form</h3>
<p>A registration form to sign upand store user information using HTML,CSS, Node.js in MongoDB.</p>

# Registration Form with MongoDB

<p>This project is a registration form application built using HTML, CSS, Node.js, and MongoDB. It allows users to sign up and store their information in a MongoDB database.Then user can login with credentials and if user exits in the database ,then only user can login else throw error!</p>

<h2>Features</h2>
<ul>
<li>User-friendly registration form interface.</li>
<li>Secure storage of user information in a MongoDB database.</li>
<li>Validation of user input to ensure data integrity.</li>
<li>Integration with Node.js to handle server-side logic.</li>
</ul>

<h2>Requirements</h2>
<ul>
<li>Node.js installed on your machine.</li>
<li>MongoDB installed and running locally or accessible remotely.</li>
<li>Internet connectivity to access MongoDB Atlas if using a cloud-hosted solution.</li>
</ul>

<h2>Installation</h2>
<ol>
<li>Clone the repository to your local machine: copy the bash code</li>
<code>git clone "git_Repo_URL"</code>


<li>Navigate to the project directory: copy the bash code</li>
<code>cd registration-form</code>

<li>Install dependencies: Check the dependencies in package.json file</li>
<code>npm install</code>



<li>Configure MongoDB connection settings in config.js file: Replace Copy code in .env file</li>
<p>Replace 'mongodb://127.0.0.1:27017/registration-form' with your MongoDB connection URI.</p>

<li>Start the server: Copy the bash code</li>
<code>node index.js</code>


<li>Access the application in your web browser at http://localhost:8000.</li>
</ol>

<h2>Usage</h2>
<ol>
<li>Open the registration form in your web browser.</li>
<li>Fill in the required information.</li>
<li>Click the "Sign up" button to register.</li>
<li>Upon successful registration, the user information will be stored in the MongoDB database.</li>
<li>Now user is redirect to login page </li>
<li>Fill the correct details such email and password which you created at the time of Registration</li>
<li>Click the "Login" button to Login.</li>
<li>Upon successful Login, user is redirect to Home page</li>
<li>If user not exit in MongoDB database or any wrong input then login Unsuccessful and throw error</li>
</ol>

<h2>Contributing</h2>
<p>Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have suggestions for improvements.</p>

<h2>License</h2>
<div>This project is licensed under the <a href="#">MIT License</a>.</div>

<h2>Acknowledgments</h2>
<ul>
<li>This project was inspired by the need for a simple registration form solution.</li>
<li>Special thanks to the developers of Node.js, MongoDB, HTML, and CSS for providing the tools and resources necessary for building this application.</li>
</ul>





