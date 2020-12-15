# dive-into-type-script

in this repo , i will document the journey of learning type-script

<h1>Goal</h1>
The goal of this project is to learn ts through building a project called maps where i can generate random company and random user. Each has its own information such as name,location, business ...etc

<h2>1</h2> create package.json so we can install all the module that we want

<h2>2</h2>
to start nice and easy , we need to install the parcel-bundler module to run ts easily in the browser 
<bold>npm install -g bundler-parcel </bold>

<h4>How parcel-bundler works ? </h4>
It will look for the whateverName.html file and as soon as it sees the typescript.ts file, it will say , okey i have a ts file and compile to js file so the browser can understand it and replace as a pure js file.

<strong>How to compile ts into pure js</strong>
we need to run the command line in the terminal
parcel whatEverName.html

# in the terminal, you will see something like that

maps % parcel index.html
Server running at http://localhost:1234
✨ Built in 6.08s.

now, go check to google chrome and insect the file , you will see that the the typescript.ts file has been inject by parcel and its name is totally different
this is what i got

<script type="text/javascript" src="chrome-extension://aalppolilappfakpmdfdkpppdnhpgifn/installHook.js"></script>

<h2>3</h2>
if we take a higher look at we are trying to do, we can conclude that we need to create 3 classes/objects that need to be interacted with each other which they are User, Company and Map
Each class has its own methods
it a convention to name your file with uppercase if you are intended to create and export a class from it

<h2>4</h2>
since each class needs a random information such as name and address , we are gonna use a npm lib called <a
style={"font-size:1.8rem; color:purple"} href="https://www.npmjs.com/package/faker">faker</a>

## <h3>Caveat</h3>

sometimes when we use a js lib module ts does not have all the information to check the code completely so we got some error.
And you can check these error by hovering over the module, you may see something like that "Could not find a declaration file for module " the name of the module" . again ts needs to know all the js code and its value type that are floating around the app.
so to fix this, ts have the idea of type definition files , you can think of it as an adapter between the code that we write and js.
sometimes libraries may have type definition files already so we don't need to install it like Axios;
