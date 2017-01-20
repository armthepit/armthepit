var mongoose = require("mongoose");

var artistsSchema = new mongoose.Schema({
	email: {
		type: String, 
	},
	password: {
		type: String, 
	},	
	name: {
		type: String, 
	},
	sortName: {
		type: String, 
	},	
	hometown: {
		type: String, 
	},	
	state: {
		type: String, 
	},
	country: {
		type: String, 
	},	
	genre: {
		type: String, 
	},	
	recordLabel: {
		type: String, 
	},
	bio: {
		type: String, 
	},	
	bandMembers: {
		type: Array, 
	},	
	artistWebsite: {
		type: String, 
	},
	facebook: {
		type: String, 
	},	
	reverbnation: {
		type: String, 
	},	
	soundCloud: {
		type: String, 
	},	
	twitter: {
		type: String, 
	},
	youtubeChannel: {
		type: String, 
	},	
	otherWebsite1: {
		type: String, 
	},	
	otherWebsite2: {
		type: String, 
	},	
	representative: {
		type: String, 
	},
	repEmail: {
		type: String, 
	},
	repPhone: {
		type: String, 
	},	
	views: {
		type: Number, 
	},	
	plays: {
		type: Number, 
	},		
	picture: {
		type: String, 
	},	
	songs: {
		type: Array, 
	},	
	youtubeVideo: {
		type: String, 
	},	
	createdAt: {
		type: Date, 
		default: Date.now
	}
});

var Artists = mongoose.model("Arists", artistsSchema);

module.exports = Artists;