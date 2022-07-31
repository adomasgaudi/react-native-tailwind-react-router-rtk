# React Native Template
**React Native | Tailwind | Router | Redux toolkit (RTK) Query**

## Requirements:
Yarn | npm | git | node | expo 
Simulator for react native: xcode/android studio/physical device

### Required knowledge:
JS/NPM/Git/React Native/expo/smartphone simulators/tailwind/react-router/terminal basics

## Setup
download repo and run:
```
cd <repo location>
yarn
```

# Open terminal window 1
```
yarn dev:tailwind
```
keep it running

# Open terminal window 2
if you don't have json-server then:
```
yarn global add json-server
```
Once you do then:
watch the json data located in the data folder and serve on localhost:3500
```
json-server --watch data/db.json --post 3500
```
keep it running

# Open terminal window 3
start expo and open on ios with i or a for android, or scan with expo app the qr code
```
yarn start -c
i
```