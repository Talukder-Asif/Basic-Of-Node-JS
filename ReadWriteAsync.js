const fs = require("fs");

// Read text asynchronously

fs.readFile("./Text/Read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error Reading File");
  }
  console.log(data);

  // Write Text asynchronously
  fs.writeFile(
    "./Text/Write2.txt",
    data + " I am a MERN Stack Developer",
    (err) => {
      throw Error("Error Writing File");
    }
  );
});
