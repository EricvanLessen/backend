const { exec } = require('child_process');

// Execute a command in a child process
exec('ls -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout:\n${stdout}`);
});


// or starting a Python script
// hint: fast Python execution with ffi, python-shell, socket, message queues
const { spawn } = require('child_process');

// Spawn a child process to run the Python script
const pythonProcess = spawn('python', ['script.py']);

// Listen for output from the Python script
pythonProcess.stdout.on('data', (data) => {
  console.log(`Output from Python script: ${data}`);
});

// Handle errors, if any
pythonProcess.on('error', (error) => {
  console.error(`Error executing Python script: ${error}`);
});

// Handle process exit
pythonProcess.on('close', (code) => {
  console.log(`Python script process exited with code ${code}`);
});
