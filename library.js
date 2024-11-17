const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function(){
       const playlistsObject = this.playlists;
       for(const key in playlistsObject){
       console.log(`${key}: ${playlistsObject[key]["name"]} - ${playlistsObject[key]["tracks"].length} tracks`);
       }
  },
  printTracks: function(){
       const tracksObject = this.tracks;
       for(const key in tracksObject){
             console.log(`${key}: ${tracksObject[key]["name"]} by ${tracksObject[key]["artist"]} (${tracksObject[key]["album"]})`);
       } 
  },
  printPlaylist: function(playlistId){
       const playlist = this.playlists[playlistId];
              console.log(`${playlist["id"]}: ${playlist["name"]} - ${playlist["tracks"].length} tracks`);
       
  playlist["tracks"].forEach(trackId => {
        const track = this.tracks[trackId];
        if(track){
console.log(`${track["id"]}: ${track["name"]} by ${track["artist"]} (${track["album"]})`);
        }
  });
  },
 addTrackToPlaylist: function(trackId, playlistId){
       const track = this.tracks[trackId];
   const playlist = this.playlists[playlistId];
   if(trackId){
       playlist["tracks"].push(trackId);
   }
   return playlist;
 },
 addTrack: function(name, artist, album){
              const trackId = generateUid();
             
              const newTrack = {id: trackId,
                    name: name,
                    artist: artist,
                    album: album
              };
               this.tracks[trackId] = newTrack;
               return library;
             
 },
 addPlaylist: function(name){
       const playlistId = generateUid();
   const newPlaylist = {
       id: playlistId,
       name: name,
   };
   this.playlists[playlistId] = newPlaylist;
   console.log(library);
 }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
/* const printPlaylists = function() {
  
//access key playlists, within playlists key we will access playlistkey   // and then name key and tracks key.
       const playlistsObject = library["playlists"];
       for(const key in playlistsObject){
              console.log(`${key}: ${playlistsObject[key]["name"]} - ${playlistsObject[key]["tracks"].length} tracks`);
       }
   
} */
library.printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

/*const printTracks = function() {
 const tracksObject = library["tracks"];
 for(const key in tracksObject){
       console.log(`${key}: ${tracksObject[key]["name"]} by ${tracksObject[key]["artist"]} (${tracksObject[key]["album"]})`);
 }
}*/
library.printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

/*const printPlaylist = function(playlistId) {
       const playlist = library["playlists"][playlistId];
              console.log(`${playlist["id"]}: ${playlist["name"]} - ${playlist["tracks"].length} tracks`);
       
  playlist["tracks"].forEach(trackId => {
        const track = library["tracks"][trackId];
        if(track){
console.log(`${track["id"]}: ${track["name"]} by ${track["artist"]} (${track["album"]})`);
        }
  });
}; */
library.printPlaylist("p02");


// adds an existing track to an existing playlist

/*const addTrackToPlaylist = function(trackId, playlistId) {
   const track = library["tracks"][trackId];
   const playlist = library["playlists"][playlistId];
   if(trackId){
       playlist["tracks"].push(trackId);
   }
   return playlist;
}; */
console.log(library.addTrackToPlaylist("t01", "p02"));
console.log(library);

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

/*const addTrack = function(name, artist, album) {
 const trackId = generateUid();

 const newTrack = {id: trackId,
       name: name,
       artist: artist,
       album: album
 };
  library["tracks"][trackId] = newTrack;
  console.log(library);
}  */

console.log(library.addTrack("Regret","Sidhu Moosewala","Moosetape"));

// adds a playlist to the library

/*const addPlaylist = function(name) {
   const playlistId = generateUid();
   const newPlaylist = {
       id: playlistId,
       name: name,
   };
   library["playlists"][playlistId] = newPlaylist;
   console.log(library);
}*/
library.addPlaylist("Saurav");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}