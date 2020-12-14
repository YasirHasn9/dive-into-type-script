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
