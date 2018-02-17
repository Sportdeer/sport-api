# Project Title

Sportdeer.com Your fast, reliable and affordable sport data provider


### Prerequisites

First of all you are asked for opening an account on our website https://www.sportdeer.com in order to get a personal Refresh Token. 

Remember, the refresh token is higly confidential and it should never be used by anyone but you.


### Installing

```
npm install sports-api
```


## API Reference

Once download, import the sports-api module inside your project

```
var Sportdeer = require('sports-api')
var sportdeer = new Sportdeer('******YOUR_REFRES_TOKEN******')
```
To call our endpoints, just use the get function

```
sportdeer.get(endpoint)

```
Find out a complete list of endpoint on our website https://sportdeer.com/documentation

You may pass HTTP parameters into the params Object

```
sportdeer.get(endpoint, params)

```
Find out a complete list of HTTP parameters on our website https://sportdeer.com/documentation

### Running example

```
var Sportdeer = require('sports-api')
var sportdeer = new Sportdeer('******YOUR_REFRES_TOKEN******')

sportdeer.get('countries', {populate:'leagues'})

```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

