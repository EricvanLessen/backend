import { python } from "pythonia";
const obj = await python("./get_dir_contents.py");
const dirFiles = await obj.dir_files;

for await (const file of dirFiles) {
  console.log(file);
}

python.exit();