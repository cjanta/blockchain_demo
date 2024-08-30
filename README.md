# blockchain_demo

1.) bash: node - v
> v20.16.0
2.) package.json anlegen auf bash: npm init -y
3.) npm i nodemon --save-dev
4.) .gitignore anlgene um node_modules nicht mit zu versionieren
5.) dev-test.js anlegen
6.) "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev-test" : "nodemon dev-test" <-- diese zeile hinzugügen
  },
6.) npm run dev-test 
> nodemon überwacht nun die Datei: dev-test.js und zeigt diese im Terminal an!
> testzeile in: "dev-test.js" einfügen: console.log("implementation of the worlds biggest casino");


TODO