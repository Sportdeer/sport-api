"use strict"

var request = require('requestretry')

const baseURL = 'https://api.sportdeer.com/v1'


class Sportdeer {

    constructor(refresh_token) {
        this._refresh_token = refresh_token
        this._access_token = ''
        this._retry_getting_access_token = false
    }

    /**
   * GETTERS
   */

    get refresh_token() {
        return this._refresh_token
    }

    get access_token() {
        return this._access_token
    }

    get retry_getting_access_token() {
        return this._retry_getting_access_token
    }

    /**
     * SETTERS
     */

    set refresh_token(refresh_token) {
        this._refresh_token = refresh_token
    }

    set access_token(access_token) {
        this._access_token = access_token
    }

    set retry_getting_access_token(retry_getting_access_token) {
        this._retry_getting_access_token = retry_getting_access_token
    }

    /**
     * FUNCTIONS
     */

    get(endpoint, params = {}) {

        var self = this

        //Build EndURL
        var endUrl = Object.keys(params).reduce(function (acc, value, index) {

            let propertyValue = params[value]

            return acc + value + '=' + propertyValue + '&'

        }, "?")

        return request({
            uri: baseURL + '/' + endpoint + endUrl + 'access_token=' + self.access_token,
            json: 'body',
        })
            .then(response => {
                //If error code == Try getting a new Access Token 401
                if (response.statusCode == 401 && self._retry_getting_access_token == false) return self._getAccessToken()
                    .then(() => self.get(endpoint, params))

                if (response.statusCode != 200) throw response.body


                self._retry_getting_access_token = false
                return response.body
            })
    }

    _getAccessToken() {

        var self = this

        self._retry_getting_access_token = true

        return request({
            uri: baseURL + '/accessToken?refresh_token=' + this.refresh_token,
            json: 'body',
        })

            .then(response => {
                if (response.statusCode != 200) throw response.body
                return self._access_token = response.body.new_access_token
            })
    }


}

module.exports = Sportdeer

var sportdeer = new Sportdeer('AAeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1YTgwYzY4OTVjZWI1ZjE3MjMyNmM5OTAiLCJpYXQiOjE1MTg4NjIzMzJ9.uCxQFGf3aGE7g-T5LHh4ecJ-lsk4CHWVKEwsFSWnXQA')

sportdeer.get('countries/46')

    .then(body => {
        console.log(body)
    })


    .catch(err => {
        console.log(err)
    })