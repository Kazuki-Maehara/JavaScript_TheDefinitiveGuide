let url = new URL("https://example.com:8000/path/name?q=term#fragment");

let p = console.log;

p(url.href);
p(url.origin);
p(url.protocol);
p(url.host);
p(url.hostname);
p(url.port);
p(url.pathname);
p(url.search);
p(url.hash);

p();

let url2 = new URL("ftp://admin:pswd1234@ftp.example.com/");
p(url2.href);
p(url2.origin);
p(url2.username);
p(url2.password);

p();

let url3 = new URL("https://example.com");
url3.pathname = "api/search";
url3.search = "q=test";
p(url3.toString());


p();


let url4 = new URL("https://example.com");
url4.pathname = "path with spaces";
url4.search = "q=foo#bar";
p(url4.pathname);
p(url4.search);
p(url4.href);


p();


let url5 = new URL("https://example.com/search");
p(url5.search);
url5.searchParams.append("q", "term");
p(url5.search);
url5.searchParams.set("q", "x");
p(url5.search);

p(url5.searchParams.has("q"));
p(url5.searchParams.has("p"));
url5.searchParams.append("opts", "1");
p(url5.search);
url5.searchParams.append("opts", "&");
p(url5.search);
p(url5.searchParams.get("opts"));
p(url5.searchParams.getAll("opts"));
url5.searchParams.sort();
p(url5.search);
url5.searchParams.set("opts", "y");
p(url5.search);
p([...url5.searchParams]);
url5.searchParams.delete("opts");
p(url5.searchParams);
p(url5.href);


p();


let url6 = new URL("http://example.com");
let params = new URLSearchParams();
params.append("q", "term");
params.append("opts", "exact");
params.append("param", " s p a c e s");
params.toString();
url6.search = params;
p(url6.href);
