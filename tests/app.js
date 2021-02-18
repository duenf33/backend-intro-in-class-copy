var express = require("express");
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let artistArray = [
  {
    id: 1,
    name: "Kanye",
    albumsArray: [
      {
        id: 1,
        name: "The coding dropout",
      },
    ],
    topSongs: [
      {
        id: 1,
        name: "The Javascript State of Mind",
      },
    ],
  },
  {
    id: 2,
    name: "Chris Brown",
    albumsArray: [
      {
        id: 1,
        name: "The Greatest Algorithm",
      },
    ],
    topSongs: [
      {
        id: 1,
        name: "Wheel on the bus",
      },
    ],
  },
];
function dynamicErrorMessage(res, message) {
  return res
    .status(404)
    .send(`Sorry the ${message} you are looking does not exist`);
}
app.get("/get-all-artists", function (req, res) {
  res.send(artistArray);
});
app.get("/get-all-artists-without-album-top-songs", function (req, res) {
  let result = [];
  artistArray.forEach((artist) => {
    result.push({ id: artist.id, name: artist.name });
  });
  res.json(result);
});
app.get("/get-artist-by-id/:id", function (req, res) {
  let result = [];
  let parsedID = Number(req.params.id);
  artistArray.forEach((artist) => {
    if (artist.id === parsedID) {
      result.push(artist);
    }
  });
  if (result.length === 0) {
    dynamicErrorMessage(res, "artist");
  } else {
    res.json(result);
  }
});
app.get("/get-artist-by-album-id/:artistID/:albumID", function (req, res) {
  let result = [];
  let parsedArtistID = Number(req.params.artistID);
  let parsedAlbumID = Number(req.params.albumID);
  artistArray.forEach((artist) => {
    if (artist.id === parsedArtistID) {
      let foundArtistAlbumArray = artist.albumsArray;
      foundArtistAlbumArray.forEach((album) => {
        if (album.id === parsedAlbumID) {
          result.push(album);
        }
      });
    }
  });
  if (result.length === 0) {
    dynamicErrorMessage(res, "album");
  } else {
    res.json(result);
  }
});
app.get("/get-artist-by-top-song-id/:artistID/:topSongID", function (req, res) {
  let result = [];
  let parsedArtistID = Number(req.params.artistID);
  let parsedTopSongID = Number(req.params.topSongID);
  artistArray.forEach((artist) => {
    if (artist.id === parsedArtistID) {
      let foundArtistTopSongArray = artist.topSongs;
      foundArtistTopSongArray.forEach((item) => {
        if (item.id === parsedTopSongID) {
          result.push(item);
        }
      });
    }
  });
  if (result.length === 0) {
    dynamicErrorMessage(res, "top song");
  } else {
    res.json(result);
  }
});
app.post("/create-new-artist", function (req, res) {
  let ifArtistExistsArray = [];
  artistArray.forEach((i) => {
    if (i.name.toLowerCase() === req.body.name.toLowerCase()) {
      ifArtistExistsArray.push(i);
    }
  });
  if (ifArtistExistsArray.length > 0) {
    res
      .status(500)
      .send(
        "Sorry the artist you are trying to create is already in the database"
      );
  } else {
    let artistCount = artistArray.length;
    artistArray.push({
      id: artistCount,
      name: req.body.name,
      albumsArray: req.body.albumsArray,
      topSongs: req.body.topSongs,
    });
    res.send(artistArray);
  }
});
app.post("/create-new-album/:artistID", function (req, res) {
  let ifArtistExistsArray = [];
  let foundArtistIndex;
  let parsedArtistID = Number(req.params.artistID);
  artistArray.forEach((i, index) => {
    if (i.id === parsedArtistID) {
      foundArtistIndex = index;
      ifArtistExistsArray.push(i);
    }
  });
  if (ifArtistExistsArray.length === 0) {
    res
      .status(500)
      .send(
        "Sorry the artist you are trying add an album is not in the database, go create the artist"
      );
  } else {
    let foundArtistAlbumArray = ifArtistExistsArray[0].albumsArray;
    let checkIsAlbum = [];
    foundArtistAlbumArray.forEach((album, index) => {
      if (album.name === req.body.name) {
        checkIsAlbum.push(album);
      }
    });
    if (checkIsAlbum.length > 0) {
      return res
        .status(500)
        .send(
          "Sorry the album you want to create exists already, please choose another album name"
        );
    } else {
      artistArray[foundArtistIndex].albumsArray.push({
        id: artistArray[foundArtistIndex].albumsArray.length + 1,
        name: req.body.name,
      });
      return res.send(artistArray);
    }
  }
});
// app.get("/artist/:artistID", function (req, res) {
//   let found = false;
//   artistArray.forEach((item) => {
//     if (item.id === Number(req.params.artistID)) {
//       found = true;
//     }
//   });
//   if (found) {
//     res.status(200).send(`found`);
//   } else {
//     res.status(404).send(`Sorry the artist you are looking for does not exist`);
//   }
// });
app.listen(3000, () => {
  console.log("STARTED");
});