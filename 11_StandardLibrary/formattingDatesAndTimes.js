let d = new Date("2022-07-11T13:14:15Z");


let result = Intl.DateTimeFormat("en-US").format(d);
console.log(result);

result = Intl.DateTimeFormat("fr-FR").format(d);

let opts = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
result = Intl.DateTimeFormat("en-US", opts).format(d);
console.log(result);

result = Intl.DateTimeFormat("es-ES", opts).format(d);
console.log(d);


opts = { hour: "numeric", minute: "2-digit", timeZone: "America/New_York" };
result = Intl.DateTimeFormat("fr-CA", opts).format(d);
console.log(result);


opts = { year: "numeric", era: "short"};
result = Intl.DateTimeFormat("en-u-ca-japanese", opts).format(d);
console.log(result);
