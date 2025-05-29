let nama ="Otong";
console.log(nama);

nama = "Adit";
console.log("nama");

var barangMu = "Buku";
console.log(barangMu);

barangMu = "Baju";
console.log(barangMu); 

// let bisa output kedua variable yang sama dalam beda scoping.
let namaBaju = "Wow";
{
    let namaBaju = "lol";
    console.log(namaBaju);
}
console.log(namaBaju)

// var mengubah data dari scope global 
var Test = "Test";
{
    var Test = "Wowwww";
    console.log(Test);
}
console.log(Test)


halo = "Hello";
console.log(halo)

