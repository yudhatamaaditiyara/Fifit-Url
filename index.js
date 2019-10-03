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
		return check(request.url) ? parse(request.url, this) : super.parse(request.url);
	}
}

/**
 * parser [reference](https://tools.ietf.org/html/rfc3986#page-51)
 *
 * spaces `\x09`, `\x0A`, `\x0C`, `\x0D`, `\x20`, `\xA0`, `\uFEFF`
 * escape `\x09`, `\x0A`, `\x0D`, `\x20`, `\x22`, `\x27`, `\x3C`, `\x3E`, `\x5C`, `\x5E`, `\x60`, `\x7B`, `\x7C`, `\x7D`
 */
const parseRegexp = /^((\/[^?#]*)?(\?([^#]*))?)(#.*)?/;
const charsRegexp = /[\x09\x0A\x0C\x0D\x20\x22\x27\x3C\x3E\x5C\x5E\x60\x7B\x7C\x7D\xA0\uFEFF]/;

/**
 * @param {string} path
 * @returns {boolean}
 */
function check(path){
	return path.charCodeAt(0) == 0x2f && !charsRegexp.test(path);
}

/**
 * @param {string} path
 * @param {Url} url
 * @returns {Url}
 */
function parse(path, url){
	var match = parseRegexp.exec(path);
	url.href = match[0];
	url.path = match[1];
	url.pathname = match[2];
	url.search = match[3] || url.search;
	url.query = match[4] || url.query;
	url.hash = match[5] || url.hash;
	return url;
}

/**
 */
module.exports = Url;