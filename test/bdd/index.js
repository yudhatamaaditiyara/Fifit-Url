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
const assert = require('assert');
const nativeUrl = require('url');
const Url = require('../../');

/**
 */
describe('index', () => {
	/**
	 */
	it('instance of url.Url', () => {
		let url = new Url();
		assert.ok(url instanceof nativeUrl.Url);
	});

	/**
	 */
	it('new Url().scheme = ""', () => {
		assert.strictEqual(new Url().scheme, '');
	});

	/**
	 */
	it('new Url().origin = ""', () => {
		assert.strictEqual(new Url().origin, '');
	});

	/**
	 */
	it('new Url().username = ""', () => {
		assert.strictEqual(new Url().username, '');
	});

	/**
	 */
	it('new Url().password = ""', () => {
		assert.strictEqual(new Url().password, '');
	});

	/**
	 */
	it('new Url().searchParams instanceof url.URLSearchParams', () => {
		assert.ok(new Url().searchParams instanceof nativeUrl.URLSearchParams);
	});

	/**
	 */
	it('typeof(new Url().searchParams) === "object"', () => {
		let url = new Url();
		assert.ok(url.searchParams !== null && typeof url.searchParams === 'object');
	});

	/**
	 */
	it('new Url().parse("/path")', () => {
		let url = new Url();
		let str = '/path';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, null);
		assert.strictEqual(url.query, null);
		assert.strictEqual(url.hash, null);

		assert.strictEqual(url.scheme, '');
		assert.strictEqual(url.origin, '');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.ok(Array.from(url.searchParams.values()).length === 0);
		assert.ok(Object.keys(url.queryParams).length === 0);
		assert.strictEqual(url.fragment, '');

		assert.strictEqual(url.protocol, null);
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, null);
		assert.strictEqual(url.hostname, null);
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("//path")', () => {
		let url = new Url();
		let str = '//path';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '//path');
		assert.strictEqual(url.pathname, '//path');
		assert.strictEqual(url.search, null);
		assert.strictEqual(url.query, null);
		assert.strictEqual(url.hash, null);

		assert.strictEqual(url.scheme, '');
		assert.strictEqual(url.origin, '');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.ok(Array.from(url.searchParams.values()).length === 0);
		assert.ok(Object.keys(url.queryParams).length === 0);
		assert.strictEqual(url.fragment, '');

		assert.strictEqual(url.protocol, null);
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, null);
		assert.strictEqual(url.hostname, null);
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("/path?query=value")', () => {
		let url = new Url();
		let str = '/path?query=value';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path?query=value');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, null);

		assert.strictEqual(url.scheme, '');
		assert.strictEqual(url.origin, '');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, '');

		assert.strictEqual(url.protocol, null);
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, null);
		assert.strictEqual(url.hostname, null);
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("//path?query=value")', () => {
		let url = new Url();
		let str = '//path?query=value';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '//path?query=value');
		assert.strictEqual(url.pathname, '//path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, null);

		assert.strictEqual(url.scheme, '');
		assert.strictEqual(url.origin, '');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, '');

		assert.strictEqual(url.protocol, null);
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, null);
		assert.strictEqual(url.hostname, null);
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("/path?query=value#fragment")', () => {
		let url = new Url();
		let str = '/path?query=value#fragment';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path?query=value');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, '#fragment');

		assert.strictEqual(url.scheme, '');
		assert.strictEqual(url.origin, '');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, 'fragment');

		assert.strictEqual(url.protocol, null);
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, null);
		assert.strictEqual(url.hostname, null);
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("//path?query=value#fragment")', () => {
		let url = new Url();
		let str = '//path?query=value#fragment';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '//path?query=value');
		assert.strictEqual(url.pathname, '//path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, '#fragment');

		assert.strictEqual(url.scheme, '');
		assert.strictEqual(url.origin, '');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, 'fragment');

		assert.strictEqual(url.protocol, null);
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, null);
		assert.strictEqual(url.hostname, null);
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("/?query=value")', () => {
		let url = new Url();
		let str = '/?query=value';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/?query=value');
		assert.strictEqual(url.pathname, '/');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, null);

		assert.strictEqual(url.scheme, '');
		assert.strictEqual(url.origin, '');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, '');

		assert.strictEqual(url.protocol, null);
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, null);
		assert.strictEqual(url.hostname, null);
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("/#fragment")', () => {
		let url = new Url();
		let str = '/#fragment';
		url.parse(str);
		
		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/');
		assert.strictEqual(url.pathname, '/');
		assert.strictEqual(url.search, null);
		assert.strictEqual(url.query, null);
		assert.strictEqual(url.hash, '#fragment');

		assert.strictEqual(url.scheme, '');
		assert.strictEqual(url.origin, '');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.ok(Array.from(url.searchParams.values()).length === 0);
		assert.ok(Object.keys(url.queryParams).length === 0);
		assert.strictEqual(url.fragment, 'fragment');

		assert.strictEqual(url.protocol, null);
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, null);
		assert.strictEqual(url.hostname, null);
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("http://user:pass@localhost:8080/path?query=value#fragment")', () => {
		let url = new Url();
		let str = 'http://user:pass@localhost:8080/path?query=value#fragment';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path?query=value');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, '#fragment');

		assert.strictEqual(url.scheme, 'http');
		assert.strictEqual(url.origin, 'http://localhost:8080');
		assert.strictEqual(url.username, 'user');
		assert.strictEqual(url.password, 'pass');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, 'fragment');

		assert.strictEqual(url.protocol, 'http:');
		assert.strictEqual(url.auth, 'user:pass');
		assert.strictEqual(url.host, 'localhost:8080');
		assert.strictEqual(url.hostname, 'localhost');
		assert.strictEqual(url.port, '8080');

		url._scheme = 'https';
		url._origin = 'https://localhost';
		url._username = 'foo';
		url._password = 'bar';
		url._queryParams = {foo: 'bar'};
		url._searchParams = new nativeUrl.URLSearchParams(url._queryParams);
		url._fragment = 'baz';

		assert.strictEqual(url.scheme, 'https');
		assert.strictEqual(url.origin, 'https://localhost');
		assert.strictEqual(url.username, 'foo');
		assert.strictEqual(url.password, 'bar');
		assert.strictEqual(url.searchParams.get('foo'), 'bar');
		assert.strictEqual(url.queryParams['foo'], 'bar');
		assert.strictEqual(url.fragment, 'baz');
	});

	/**
	 */
	it('new Url().parse("http://user@localhost:8080/path?query=value#fragment")', () => {
		let url = new Url();
		let str = 'http://user@localhost:8080/path?query=value#fragment';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path?query=value');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, '#fragment');

		assert.strictEqual(url.scheme, 'http');
		assert.strictEqual(url.origin, 'http://localhost:8080');
		assert.strictEqual(url.username, 'user');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, 'fragment');

		assert.strictEqual(url.protocol, 'http:');
		assert.strictEqual(url.auth, 'user');
		assert.strictEqual(url.host, 'localhost:8080');
		assert.strictEqual(url.hostname, 'localhost');
		assert.strictEqual(url.port, '8080');
	});

	/**
	 */
	it('new Url().parse("http://localhost:8080/path?query=value#fragment")', () => {
		let url = new Url();
		let str = 'http://localhost:8080/path?query=value#fragment';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path?query=value');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, '#fragment');

		assert.strictEqual(url.scheme, 'http');
		assert.strictEqual(url.origin, 'http://localhost:8080');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, 'fragment');

		assert.strictEqual(url.protocol, 'http:');
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, 'localhost:8080');
		assert.strictEqual(url.hostname, 'localhost');
		assert.strictEqual(url.port, '8080');
	});

	/**
	 */
	it('new Url().parse("http://localhost/path?query=value#fragment")', () => {
		let url = new Url();
		let str = 'http://localhost/path?query=value#fragment';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path?query=value');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, '#fragment');

		assert.strictEqual(url.scheme, 'http');
		assert.strictEqual(url.origin, 'http://localhost');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, 'fragment');

		assert.strictEqual(url.protocol, 'http:');
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, 'localhost');
		assert.strictEqual(url.hostname, 'localhost');
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("http://localhost/path?query=value")', () => {
		let url = new Url();
		let str = 'http://localhost/path?query=value';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path?query=value');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, '?query=value');
		assert.strictEqual(url.query, 'query=value');
		assert.strictEqual(url.hash, null);

		assert.strictEqual(url.scheme, 'http');
		assert.strictEqual(url.origin, 'http://localhost');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.strictEqual(url.searchParams.get('query'), 'value');
		assert.strictEqual(url.queryParams['query'], 'value');
		assert.strictEqual(url.fragment, '');

		assert.strictEqual(url.protocol, 'http:');
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, 'localhost');
		assert.strictEqual(url.hostname, 'localhost');
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("http://localhost/path")', () => {
		let url = new Url();
		let str = 'http://localhost/path';
		url.parse(str);

		assert.strictEqual(url.href, str);
		assert.strictEqual(url.path, '/path');
		assert.strictEqual(url.pathname, '/path');
		assert.strictEqual(url.search, null);
		assert.strictEqual(url.query, null);
		assert.strictEqual(url.hash, null);

		assert.strictEqual(url.scheme, 'http');
		assert.strictEqual(url.origin, 'http://localhost');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.ok(Array.from(url.searchParams.values()).length === 0);
		assert.ok(Object.keys(url.queryParams).length === 0);
		assert.strictEqual(url.fragment, '');

		assert.strictEqual(url.protocol, 'http:');
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, 'localhost');
		assert.strictEqual(url.hostname, 'localhost');
		assert.strictEqual(url.port, null);
	});

	/**
	 */
	it('new Url().parse("http://localhost")', () => {
		let url = new Url();
		let str = 'http://localhost';
		url.parse(str);
		
		assert.strictEqual(url.href, str+'/');
		assert.strictEqual(url.path, '/');
		assert.strictEqual(url.pathname, '/');
		assert.strictEqual(url.search, null);
		assert.strictEqual(url.query, null);
		assert.strictEqual(url.hash, null);

		assert.strictEqual(url.scheme, 'http');
		assert.strictEqual(url.origin, 'http://localhost');
		assert.strictEqual(url.username, '');
		assert.strictEqual(url.password, '');
		assert.ok(Array.from(url.searchParams.values()).length === 0);
		assert.ok(Object.keys(url.queryParams).length === 0);
		assert.strictEqual(url.fragment, '');

		assert.strictEqual(url.protocol, 'http:');
		assert.strictEqual(url.auth, null);
		assert.strictEqual(url.host, 'localhost');
		assert.strictEqual(url.hostname, 'localhost');
		assert.strictEqual(url.port, null);
	});
});