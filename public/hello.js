const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();

const chapter=Math.floor(Math.random() * 25);

// document.getElementById("abc").addEventListener("load", Wallpaper4);

async function Wallpaper4() {
    const wallpaper = await wall.getAnimeWall4({ title: "Mountains", type: "sfw", page: 1 })
    console.log(wallpaper[chapter].image)
    // var hell = wallpaper[chapter].image;
    // document.getElementById("abc").style.backgroundImage = "url('hell')";
    // const element = document.getElementById("abc");
    // element.style.backgroundImage = "url(`${hell}`)";
}

Wallpaper4() 
