# <p align="center"> ⚓ shellxec ⚓ </p>

<p style="font-size:17px;">
<span style="background-color: #6e768166; padding: 3px;">Shellxec</span> 
is a Python library for running shell commands on both Windows and Linux systems.
This library can be used to execute shell command from Python. This can be used to run codes in other languages such as C++, Java or Rust directly from Python and can also retain results if required. </p>

<p style="font-size:17px;"> Python is very much slow copared to other languages such as C++, Java or Rust. This library can be used to perform speed up the complex tasks and calculations by running them in other languages, while retaining the output in Python for further use.  </p>

  

## Installation

You can install `shellxec` using pip:

```bash
pip install shellxec
```

## Usage

### Basic Usage

Import the `shellxec` library and call the method for it:

**Basic example to compile a CPP/C++ file**
```python
import shellxec as sx

# Compile a CPP file 
command = "g++ main.cpp"  
sx.run_command(command)
```

#### Run a Shell Command

```python
command = "echo 'Hello, ShellExec!'"
sx.run_command(command)
```

#### Run a Shell Command and Capture Output (String)

```python
command = "echo 'Hello, ShellExec!'"
output = sx.run_command(command=command, output=True)
print("Output: ", output)
```

### Advanced Usage

#### Run a Command in a Specific Directory

```python
command = <dir>
directory = "hello"
sx.run_command_in_directory(command, directory)
```

#### Run a Command in a Specific Directory while retaining the output (String)

```python
command = <dir>
directory = "hello"
result = sx.run_command_in_directory(command, directory, output=True)
print(result)
```

#### Run a Command with Custom Environment Variables

```python
command = "echo $MY_VARIABLE"
env = {"MY_VARIABLE": "Hello from ShellExec"}
sx.run_command_with_env_var(command, env)
```
#### Run a Command with Custom Environment Variables while retaining the output (String)

```python
command = "echo $MY_VARIABLE"
env = {"MY_VARIABLE": "Hello from ShellExec"}
result = sx.run_command_with_env_var(command, env, output=True)
print(result)
```

#### Run a Batch of Commands

```python
commands = ["echo 'Command 1'", "echo 'Command 2'", "echo 'Command 3'"]
sx.run_commands_batch(commands)
```
#### Run a Batch of Commands while retaining the output (Array)

```python
commands = ["echo 'Command 1'", "echo 'Command 2'", "echo 'Command 3'"]
result = sx.run_commands_batch(commands, output=True)
print(result) 
```

## Running Tests

**Status: Wrote Tests (Need more test cases)**
<!-- To run the tests, use the following command: -->

<!-- ```bash
python -m unittest test_shellxec.py
``` -->

## Checklist:

* [x] Start Documentation
* [ ] Write more test cases
* [ ] Check for PEP8 Standardization throughout the project
* [ ] Save To File Option
* [ ] Begin Creating Documentation

<!-- Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests. -->

## License

This project is not under any License (YET).