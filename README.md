![alt text](https://i.imgur.com/Y9nO5SF.png )

[Sportdeer.com](https://www.sportdeer.com): Your fast, reliable and affordable sport data provider

## GETTING STARTED

### Prerequisites
First of all you are asked for opening an account on our [website](https://www.sportdeer.com)  in order to get your personal [refresh token](https://sportdeer.com/documentation#faq). 
>**Remember**, the refresh token is **higly confidential** and it should never be used by anyone but you.

### Installing
This is a Node.js module available through the npm registry. Installation is done using the npm install command:

```
$ npm install sports-api
```


## API
Import the sports-api module inside your modules and create the object with the new keyword
```javascript

var Sportdeer = require('sports-api')
var sportdeer = new Sportdeer('***YOUR_REFRESH_TOKEN***')

```
To call our endpoints, use the get function

```javascript

sportdeer.get(endpoint, params)

```
Find out the complete list of endpoint and params on our [API Documentation](https://www.sportdeer.com/documentation) 


## Running example

```javascript

var Sportdeer = require('sports-api')
var sportdeer = new Sportdeer('***YOUR_REFRES_TOKEN***')

var params = {
	populate:'leagues',
	page: 2
}

sportdeer.get('fixtures', params)

```


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
