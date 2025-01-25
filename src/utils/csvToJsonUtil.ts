import * as fs from "fs";
import path, { delimiter } from "path";
const CSVTOJSON = (data, (delimeter = ",")) => {
    const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
    return data
      .slice(data.indexOf('\n')+1)
      .split('\n')
      .map((v) =>{
        const values = v.split(delimiter);
        return titles.reduce(
          (obj, title, index) =>((obj[title.trim()] = values [index].trim()), obj),
          {}
        );
      });
};

// console.log(CSVTOJSON('col1,col2\na,b\nc,d'));
// Example usage
const currentdir = __dirname;
const srcdir = path.resolve(currentdir,"..");

// change to config folder
const testdatadir = path.resolve(srcdir,"data");
const csvFilePath = `${testdatadir}`;

export const convertCSVFileTOJSONFile = (csvFileName, jsonFileName, delimiter=',') => {
  try {
    // Read the csv file
    const csvData = fs.readFileSync(`${testdatadir}\\${csvFileName}`,'utf-8');
    // Convert CSV to JSON
    const jsonData = CSVTOJSON(csvData,delimiter);
    // Write json data to a new file
    fs.writeFileSync(`${testdatadir}\\${jsonFileName}`, JSON.stringify(jsonData, null, 2));
    console.log(`converion completed and json data written to ${testdatadir}\\${jsonFileName}`);
  }catch(error){
    console.error(`Error converting csv to json:`,error.message);
  }

};