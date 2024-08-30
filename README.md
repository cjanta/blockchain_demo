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
7.) npm run dev-test //nodemon starten
> nodemon überwacht nun die Datei: dev-test.js und zeigt diese im Terminal an!
> testzeile in: "dev-test.js" einfügen: console.log("Example implementation of the worlds biggest casino");

8.) Klasse: Block anlegen: felder und constr.params: timestamp, lastHash, hash, data
> Stringvariable, concat ohne + mit den Zeichen: `MeineStringVariable Zeit: ${this.time}`
9.) Zeile in der Block-Klassen-Datei hinzufügen, nach der Klassendefinition: module.exports = Block
10.)erste methoden: static genesis() und static mineBlock(last_block, data)

TODO