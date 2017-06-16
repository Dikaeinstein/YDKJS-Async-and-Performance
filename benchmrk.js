var foo = () => [5,1,9,6,3,8].sort();

var bench = new Benchmark("foo test", foo);

document.writeln(bench.hz);
document.writeln(bench.stat.moe);
document.writeln(bench.stat.variance);