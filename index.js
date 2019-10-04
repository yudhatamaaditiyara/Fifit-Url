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

/**
 * parser [reference](https://tools.ietf.org/html/rfc3986#page-51)
 *
 * spaces `\x09`, `\x0A`, `\x0C`, `\x0D`, `\x20`, `\xA0`, `\uFEFF`
 * escape `\x09`, `\x0A`, `\x0D`, `\x20`, `\x22`, `\x27`, `\x3C`, `\x3E`, `\x5C`, `\x5E`, `\x60`, `\x7B`, `\x7C`, `\x7D`
 */
const parseRegexp = /^((\/[^?#]*)?(\?([^#]*))?)(#.*)?$/;
const charsRegexp = /[\x09\x0A\x0C\x0D\x20\x22\x27\x3C\x3E\x5C\x5E\x60\x7B\x7C\x7D\xA0\uFEFF]/;

/**
 */
class Url extends url.Url
{
	/**
	 * @param {Request} request
	 */
	constructor(request){
		super();
		this.parse(request);
	}

	/**
	 * @param {Request} request
	 * @returns {Url}
	 */
	parse(request){
		if (this._check(request.url)) {
			return this._parse(request.url);
		}
		return super.parse(request.url);
	}

	/**
	 * @param {string} url
	 * @returns {boolean}
	 */
	_check(url){
		return url.charCodeAt(0) == 0x2f && !charsRegexp.test(url);
	}

	/**
	 * @param {string} url
	 * @returns {Url}
	 */
	_parse(url){
		var match = url.match(parseRegexp);
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
 */
module.exports = Url;