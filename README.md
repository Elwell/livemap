# LiveMap
### Real-time visualization of the CERN shuttle bus

## What is this?

This application is a clone of the excellent work done to visualize
public transportation vehicles moving through the City of Ulm, Germany,
but applied to the CERN shuttle bus route.


## Why?

Presently the GS services have hard-coded timetable information on
http://gs-dep.web.cern.ch/en/content/Shuttle/New -- This site was
a demonstration of what could be obtained by having the data in
a standard (GTFS) format.

## Technologies used

node.js: General platform
express.js: Middleware framework
Socket.IO:   Messaging library
Leaflet: JavaScript mapping library
bootstrap: CSS template

## Thanks to:
the original team at https://github.com/UlmApi/livemap who produced
http://ulmapi-de.no.de/map
