"use strict";
exports.__esModule = true;
//Section 2 - Tutorial 15 - Modules:
//Task 1 - Create File & Move Class
//Task 2 - Turn Point into a Module.
//Task 3 - Import Module
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
point.draw();
