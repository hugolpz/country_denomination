# Available Data
 • ISO 3166 compliant country names<br>
 • Official country denominations (full name)<br>
 • ISO 3166-1 alpha 2 code<br>
 • ISO 3166-1 alpha 3 code<br>
 • ccTLD (top level domain) code<br>
 • international phone code (predial)<br>

# Available Formats
 • JSON<br>
 • XML<br>
 • CSV<br>

# More
Dataset available on Google Sheets at<br>
https://docs.google.com/spreadsheets/d/1mVaD4c7-L9xelrB0Z24yistgQLg_XmlJjPCDis_1_EQ/edit#gid=0

# JS Example
```javascript
/* let's build a function that retrieves a field for an other field match.
 * the lookup field can be any of the dataset ones
 * available fields are:
 * - country name: "name"
 * - full denomination: "full"
 * - ISO 3166-1 alpha 2/3: "alpha1" / "alpha3"
 * - country ccTLD: "cctld"
 * - country phone code: "cc"
 */

function retrieve_country_info(param) {
 // load default parameters:
 param.with = param.with || "Name"; // default lookup field
 param.what = param.what || "alpha2"; // default result field
 if (typeof param.val == "undefined" || !param.val) { return null; } // return if no lookup value was passed
 // load file stream
 var fs = require("fs");
 // read and parse Dataset
 var dt = JSON.parse(fs.readFileSync("country_denomination.json")).data;
 // loop through dataset and retrieve data for given field match
 for (let i in dt) {
  if (dt[i][param.with] == set.val) {
   return dt[i][param.what];
 }
 return null; // no match was found in the dataset
}

// let's try our function looking for the french phone country code from its ISO 3166-1 alpha-3 code:
let test = retrieve_contry_info("cc","alpha3","FRA");
console.log(test); // outputs "+33", phone dial for France, YAY!
```
