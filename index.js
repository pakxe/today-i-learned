let i = new Map();
i.set("a", "b");

console.log(i.get("c"));
console.log(i.get("c") || 0);
console.log(i.get("c") ?? 0);
