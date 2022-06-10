
# Letterreplacer

A simple js package that replaces the letters in a sentence

## Features
- Removes all spaces from a string
- Replaces the letters in a sentence that the user specifies

## Install
- npm i letterreplacer

## Usage/Examples

### Remove whitespace from sentence
```javascript
const replaceLetter = require("letterreplacer");

replaceLetter("So much space!");
//=> "Somuchspace!"
```
### Replace first string of every element of provided array
```javascript
import { replaceLetter } from "letterreplacer";

replaceArrFirst(["abc", "def", "ghi"], "*")

//=> "[ '*bc', '*ef', '*hi' ]"
```
