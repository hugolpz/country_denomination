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
  if (dt[i][param.with] == param.val) {
   return dt[i][param.what];
 }
 return null; // no match was found in the dataset
}
