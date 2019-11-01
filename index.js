/**
 * Copyright (C) 2019 Yudha Tama Aditiyara
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

const url = require('url');
const querystring = require('querystring');

/**
 * parser [reference](https://tools.ietf.org/html/rfc3986#page-51)
 * spaces `\x09`, `\x0A`, `\x0C`, `\x0D`, `\x20`, `\xA0`, `\uFEFF`
 * escape `\x09`, `\x0A`, `\x0D`, `\x20`, `\x22`, `\x27`, `\x3C`, `\x3E`, `\x5C`, `\x5E`, `\x60`, `\x7B`, `\x7C`, `\x7D`
 */
const parseRegexp = /^((\/[^?#]*)?(\?([^#]*))?)(#.*)?/;
const charsRegexp = /[\x09\x0A\x0C\x0D\x20\x22\x27\x3C\x3E\x5C\x5E\x60\x7B\x7C\x7D\xA0\uFEFF]/;

/**
 */
class Url extends url.Url
{
	/**
	 * @param {string} url
	 * @return {Url}
	 */
	parse(url){
		if (url.charCodeAt(0) === 0x2f && !charsRegexp.test(url)) {
			return this._parsePath(url);
		}
		return super.parse(url);
	}

	/**
	 * @return {string}
	 */
	get scheme(){
		if (this._scheme == null) {
			this._scheme = this.protocol ? this.protocol.replace(/\:$/, '') : '';
		}
		return this._scheme;
	}

	/**
	 * @return {string}
	 */
	get origin(){
		if (this._origin == null) {
			this._origin = this.protocol ? `${this.protocol}//${this.host}` : '';
		}
		return this._origin;
	}
	
	/**
	 * @return {string}
	 */
	get username(){
		if (this._username == null) {
			this._parseAuth(this.auth);
		}
		return this._username;
	}
	
	/**
	 * @return {string}
	 */
	get password(){
		if (this._password == null) {
			this._parseAuth(this.auth);
		}
		return this._password;
	}

	/**
	 * @return {URLSearchParams}
	 */
	get searchParams(){
		if (this._searchParams == null) {
			this._searchParams = new url.URLSearchParams(this.queryParams);
		}
		return this._searchParams;
	}

	/**
	 * @return {Object}
	 */
	get queryParams(){
		if (this._queryParams == null) {
			this._queryParams = typeof this.query == 'string' ? querystring.parse(this.query) : Object.create(this.query);
		}
		return this._queryParams;
	}

	/**
	 * @param {string=} auth
	 * @return {Url}
	 */
	_parseAuth(auth){
		if (auth) {
			let array = auth.split(':', 2);
			this._username = array[0] || '';
			this._password = array[1] || '';
		} else {
			this._username = '';
			this._password = '';
		}
		return this;
	}

	/**
	 * @param {string} path
	 * @return {Url}
	 */
	_parsePath(path){
		let match = path.match(parseRegexp);
		this.href = match[0];
		this.path = match[1];
		this.pathname = match[2];
		this.search = match[3] || this.search;
		this.query = match[4] || this.query;
		this.hash = match[5] || this.hash;
		return this;
	}
}

/**
 * @+
 */
module.exports = Url;