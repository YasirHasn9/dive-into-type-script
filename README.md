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
And you can check these error by hovering over the module, you may see something like that <strong>"Could not find a declaration file for module " the name of the module" </strong> . again ts needs to know all the js code and its value type that are floating around the app.
so to fix this, ts have the idea of type definition files , you can think of it as an adapter between the code that we write and js.
sometimes libraries may have type definition files already so we don't need to install it like Axios;

<h2>Generate a Google dev project </h2>
go to <a href="http://console.developers.google.com"> console devs google</a>

<bold>**_ Note _** </bold>
now , if you type google in the console you will see that the browser understand that we have a global variable called google but in ts we dont because as i mentioned before , it needs for type definition file to make ts understands that we have a global google variable
to fix it again , we need to install a lib called @types/googlemaps

<strong>
<i>SEE</i>
</strong>
when you see declare namespace , ts understand this variable is a global variable

when you see the var?: the "?" means this ts type is optional

<h2>5</h2>
create a CustomMap class 
sometimes when we use a global class/object that contains a lot of methods, playing with these methods may break our app
To prevent that, we can create a custom class where we expose a bare minimum of its functionality and hide the other. That would prevent other engineers form playing with it
<strong>Also</strong> in default any type we declare in ts , by default has a modifier which is public that enables us to use outside where we declare it. In some cases, we want to make private and only be used only inside the { } that we determine , to do so TS has another modifier called <bold><i>private</i></bold>
