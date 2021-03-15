const Movie = require("../model/Movie");

module.exports = {
	createList: async (req, res) => {
		try {
			let newMovie = new Movie({
				movie: req.body.movie,
			});

			let newCreatedMovie = await newMovie.save();

			res.json({
				newCreatedMovie,
			});
		} catch (e) {
			console.log(e);
			res.status(500).json({ error: e.message });
		}
	},
	getList: async (req, res) => {
		try {
			let allList = await Movie.find({});

			res.json({
				allList: allList,
			});
		} catch (e) {
			console.log(e);
			res.status(500).json({ error: e.message });
		}
	},
	deleteByID: async (req, res) => {
    try {
      let deletedMovie = await Movie.findByIdAndDelete({
        _id: req.params.id,
      });

      res.json({
        data: deletedMovie,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
	},
	updateByID: async (req, res) => {
    try {
      let updatedMovie = await Movie.findByIdAndUpdate(
        {
          _id: req.params.id,
        },
        {
          movie: req.body.movie,
        },
        { new: true }
      );

      res.json({
        data: updatedMovie,
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  },
};
