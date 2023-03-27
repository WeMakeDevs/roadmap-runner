import * as env from "dotenv";
env.config();
import fs from "fs";
import path from "path";
import mongoose from "mongoose";
import Roadmap from "../src/models/roadmap.js";

await mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dataDir = "./seed/data/";

const jsonFiles = await fs.promises.readdir(dataDir);

for (const file of jsonFiles) {
  if (path.extname(file) === ".json") {
    const data = await fs.promises.readFile(path.join(dataDir, file), "utf-8");
    const jsonData = JSON.parse(data);
    console.log(jsonData)
    
    try {
      await Roadmap.create({ ...jsonData });
    } catch (e) {
      console.error(e);
    }
    
  }
}

process.exit(0)
