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
const url = require('url');
const Url = require('../../');

describe('Url#parse', () => {
  it('must be work parse "/path"', () => {
    let object = new Url();
    let string = '/path';
  
    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, null);
    assert.strictEqual(object.query, null);
    assert.strictEqual(object.hash, null);
  
    assert.strictEqual(object.scheme, null);
    assert.strictEqual(object.origin, null);
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.ok(Array.from(object.searchParams.values()).length === 0);
    assert.ok(Object.keys(object.queryParams).length === 0);
    assert.strictEqual(object.fragment, null);
  
    assert.strictEqual(object.protocol, null);
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, null);
    assert.strictEqual(object.hostname, null);
    assert.strictEqual(object.port, null);
  });
  
  it('must be work parse "//path"', () => {
    let object = new Url();
    let string = '//path';
  
    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '//path');
    assert.strictEqual(object.pathname, '//path');
    assert.strictEqual(object.search, null);
    assert.strictEqual(object.query, null);
    assert.strictEqual(object.hash, null);
  
    assert.strictEqual(object.scheme, null);
    assert.strictEqual(object.origin, null);
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.ok(Array.from(object.searchParams.values()).length === 0);
    assert.ok(Object.keys(object.queryParams).length === 0);
    assert.strictEqual(object.fragment, null);
  
    assert.strictEqual(object.protocol, null);
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, null);
    assert.strictEqual(object.hostname, null);
    assert.strictEqual(object.port, null);
  });
  
  it('must be work parse "/path?query=value"', () => {
    let object = new Url();
    let string = '/path?query=value';
  
    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path?query=value');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, null);
  
    assert.strictEqual(object.scheme, null);
    assert.strictEqual(object.origin, null);
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, null);
  
    assert.strictEqual(object.protocol, null);
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, null);
    assert.strictEqual(object.hostname, null);
    assert.strictEqual(object.port, null);
  });
  
  it('must be work parse "//path?query=value"', () => {
    let object = new Url();
    let string = '//path?query=value';
  
    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '//path?query=value');
    assert.strictEqual(object.pathname, '//path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, null);
  
    assert.strictEqual(object.scheme, null);
    assert.strictEqual(object.origin, null);
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, null);
  
    assert.strictEqual(object.protocol, null);
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, null);
    assert.strictEqual(object.hostname, null);
    assert.strictEqual(object.port, null);
  });
  
  it('must be work parse "/path?query=value#fragment"', () => {
    let object = new Url();
    let string = '/path?query=value#fragment';
  
    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path?query=value');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, '#fragment');
  
    assert.strictEqual(object.scheme, null);
    assert.strictEqual(object.origin, null);
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, 'fragment');
  
    assert.strictEqual(object.protocol, null);
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, null);
    assert.strictEqual(object.hostname, null);
    assert.strictEqual(object.port, null);
  });
  
  it('must be work parse "//path?query=value#fragment"', () => {
    let object = new Url();
    let string = '//path?query=value#fragment';
  
    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '//path?query=value');
    assert.strictEqual(object.pathname, '//path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, '#fragment');
  
    assert.strictEqual(object.scheme, null);
    assert.strictEqual(object.origin, null);
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, 'fragment');
  
    assert.strictEqual(object.protocol, null);
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, null);
    assert.strictEqual(object.hostname, null);
    assert.strictEqual(object.port, null);
  });
  
  it('must be work parse "/?query=value"', () => {
    let object = new Url();
    let string = '/?query=value';
  
    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/?query=value');
    assert.strictEqual(object.pathname, '/');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, null);
  
    assert.strictEqual(object.scheme, null);
    assert.strictEqual(object.origin, null);
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, null);
  
    assert.strictEqual(object.protocol, null);
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, null);
    assert.strictEqual(object.hostname, null);
    assert.strictEqual(object.port, null);
  });
  
  it('must be work parse "/#fragment"', () => {
    let object = new Url();
    let string = '/#fragment';

    object.parse(string);
    
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/');
    assert.strictEqual(object.pathname, '/');
    assert.strictEqual(object.search, null);
    assert.strictEqual(object.query, null);
    assert.strictEqual(object.hash, '#fragment');
  
    assert.strictEqual(object.scheme, null);
    assert.strictEqual(object.origin, null);
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.ok(Array.from(object.searchParams.values()).length === 0);
    assert.ok(Object.keys(object.queryParams).length === 0);
    assert.strictEqual(object.fragment, 'fragment');
  
    assert.strictEqual(object.protocol, null);
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, null);
    assert.strictEqual(object.hostname, null);
    assert.strictEqual(object.port, null);
  });

  it('must be work parse "http://user:pass@localhost:8080/path?query=value#fragment"', () => {
    let object = new Url();
    let string = 'http://user:pass@localhost:8080/path?query=value#fragment';

    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path?query=value');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, '#fragment');
  
    assert.strictEqual(object.scheme, 'http');
    assert.strictEqual(object.origin, 'http://localhost:8080');
    assert.strictEqual(object.username, 'user');
    assert.strictEqual(object.password, 'pass');
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, 'fragment');
  
    assert.strictEqual(object.protocol, 'http:');
    assert.strictEqual(object.auth, 'user:pass');
    assert.strictEqual(object.host, 'localhost:8080');
    assert.strictEqual(object.hostname, 'localhost');
    assert.strictEqual(object.port, '8080');

    object._scheme = 'https';
    object._origin = 'https://localhost';
    object._username = 'foo';
    object._password = 'bar';
    object._queryParams = {foo: 'bar'};
    object._searchParams = new url.URLSearchParams(object._queryParams);
    object._fragment = 'baz';

    assert.strictEqual(object.scheme, 'https');
    assert.strictEqual(object.origin, 'https://localhost');
    assert.strictEqual(object.username, 'foo');
    assert.strictEqual(object.password, 'bar');
    assert.strictEqual(object.searchParams.get('foo'), 'bar');
    assert.strictEqual(object.queryParams['foo'], 'bar');
    assert.strictEqual(object.fragment, 'baz');
  });

  it('must be work parse "http://user@localhost:8080/path?query=value#fragment"', () => {
    let object = new Url();
    let string = 'http://user@localhost:8080/path?query=value#fragment';

    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path?query=value');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, '#fragment');
  
    assert.strictEqual(object.scheme, 'http');
    assert.strictEqual(object.origin, 'http://localhost:8080');
    assert.strictEqual(object.username, 'user');
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, 'fragment');
  
    assert.strictEqual(object.protocol, 'http:');
    assert.strictEqual(object.auth, 'user');
    assert.strictEqual(object.host, 'localhost:8080');
    assert.strictEqual(object.hostname, 'localhost');
    assert.strictEqual(object.port, '8080');
  });

  it('must be work parse "http://localhost:8080/path?query=value#fragment"', () => {
    let object = new Url();
    let string = 'http://localhost:8080/path?query=value#fragment';

    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path?query=value');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, '#fragment');
  
    assert.strictEqual(object.scheme, 'http');
    assert.strictEqual(object.origin, 'http://localhost:8080');
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, 'fragment');
  
    assert.strictEqual(object.protocol, 'http:');
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, 'localhost:8080');
    assert.strictEqual(object.hostname, 'localhost');
    assert.strictEqual(object.port, '8080');
  });

  it('must be work parse "http://localhost/path?query=value#fragment"', () => {
    let object = new Url();
    let string = 'http://localhost/path?query=value#fragment';

    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path?query=value');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, '#fragment');
  
    assert.strictEqual(object.scheme, 'http');
    assert.strictEqual(object.origin, 'http://localhost');
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, 'fragment');
  
    assert.strictEqual(object.protocol, 'http:');
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, 'localhost');
    assert.strictEqual(object.hostname, 'localhost');
    assert.strictEqual(object.port, null);
  });

  it('must be work parse "http://localhost/path?query=value"', () => {
    let object = new Url();
    let string = 'http://localhost/path?query=value';

    object.parse(string);

    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path?query=value');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, '?query=value');
    assert.strictEqual(object.query, 'query=value');
    assert.strictEqual(object.hash, null);

    assert.strictEqual(object.scheme, 'http');
    assert.strictEqual(object.origin, 'http://localhost');
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.strictEqual(object.searchParams.get('query'), 'value');
    assert.strictEqual(object.queryParams['query'], 'value');
    assert.strictEqual(object.fragment, null);
  
    assert.strictEqual(object.protocol, 'http:');
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, 'localhost');
    assert.strictEqual(object.hostname, 'localhost');
    assert.strictEqual(object.port, null);
  });

  it('must be work parse "http://localhost/path"', () => {
    let object = new Url();
    let string = 'http://localhost/path';

    object.parse(string);
  
    assert.strictEqual(object.href, string);
    assert.strictEqual(object.path, '/path');
    assert.strictEqual(object.pathname, '/path');
    assert.strictEqual(object.search, null);
    assert.strictEqual(object.query, null);
    assert.strictEqual(object.hash, null);

    assert.strictEqual(object.scheme, 'http');
    assert.strictEqual(object.origin, 'http://localhost');
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.ok(Array.from(object.searchParams.values()).length === 0);
    assert.ok(Object.keys(object.queryParams).length === 0);
    assert.strictEqual(object.fragment, null);
  
    assert.strictEqual(object.protocol, 'http:');
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, 'localhost');
    assert.strictEqual(object.hostname, 'localhost');
    assert.strictEqual(object.port, null);
  });

  it('must be work parse "http://localhost"', () => {
    let object = new Url();
    let string = 'http://localhost';

    object.parse(string);

    assert.strictEqual(object.href, string + '/');
    assert.strictEqual(object.path, '/');
    assert.strictEqual(object.pathname, '/');
    assert.strictEqual(object.search, null);
    assert.strictEqual(object.query, null);
    assert.strictEqual(object.hash, null);

    assert.strictEqual(object.scheme, 'http');
    assert.strictEqual(object.origin, 'http://localhost');
    assert.strictEqual(object.username, null);
    assert.strictEqual(object.password, null);
    assert.ok(Array.from(object.searchParams.values()).length === 0);
    assert.ok(Object.keys(object.queryParams).length === 0);
    assert.strictEqual(object.fragment, null);

    assert.strictEqual(object.protocol, 'http:');
    assert.strictEqual(object.auth, null);
    assert.strictEqual(object.host, 'localhost');
    assert.strictEqual(object.hostname, 'localhost');
    assert.strictEqual(object.port, null);
  });
});