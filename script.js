/* ----------------- STEP 0: PANDA AUTO ----------------- */
setTimeout(() => {
  document.getElementById("pandaPage").classList.remove("active");
  document.getElementById("lyricsPage").classList.add("active");
}, 3500);

/* ----------------- STEP 1: LYRICS PAGE ----------------- */
const lyricsText = document.getElementById("lyricsText");
const lyricsSong = document.getElementById("lyricsSong");

const lyricsLines = [
  "We are still kids and we're so in love",
  "Fightin' against all odds",
  "I know we'll be alright this time",
  "Darling, just hold my hand",
  "Be my girl, I'll be your man",
  "I see my future in your eyes"
];

let lineIndex = 0;

function typeLyrics() {
