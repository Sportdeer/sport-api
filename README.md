![alt text](https://i.imgur.com/Y9nO5SF.png )

[Sportdeer.com](https://www.sportdeer.com): Your fast, reliable and affordable sport data provider

## GETTING STARTED

### Prerequisites
First of all, you are asked for opening an account on our [website](https://www.sportdeer.com)  in order to get your personal [refresh token](https://sportdeer.com/documentation#faq). 
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
To call our endpoints, use the get function. This function will return a resolved promise whether the call to the endpoint is successfully performed, otherwise it will throw an error

```javascript

sportdeer.get(endpoint, params)

```
>Find out the complete list of endpoint and params on our [API Documentation](https://www.sportdeer.com/documentation) 

### Example of successfull call

```json

{
    "docs": [
        {
            "_id": 46,
            "name": "England"
        },
        {
            "_id": 54,
            "name": "France"
        },
        {
            "_id": 59,
            "name": "Germany"
        },
        {
            "_id": 82,
            "name": "International"
        },
        {
            "_id": 86,
            "name": "Italy"
        },
        {
            "_id": 122,
            "name": "Spain"
        }
    ],
    "pagination": {
        "total": 6,
        "limit": 30,
        "page": 1,
        "pages": 1
    }
}

```
### Example of failed call
```json

{
    "status": 404,
    "name": "NotFoundError",
    "message": "Page not found",
    "referenceId": "0bdc7340-140c-11e8-b4f1-8f5204137419"
}

```
Find out the complete list of reponse codes on our [API Documentation](https://www.sportdeer.com/documentation#response-list) 


## Running example

```javascript

var Sportdeer = require('sports-api')
var sportdeer = new Sportdeer('PUT_YOUR_REFRESH_TOKEN_HERE')

var params = {
    populate: 'leagues',
    page: 1
}

sportdeer.get('countries', params)

    .then(response => {
        console.log(response)
    })

    .catch(err => {
        console.log(err)
    })

```


## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
