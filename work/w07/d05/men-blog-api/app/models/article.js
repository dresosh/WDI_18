//MODEL
var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

//create a new schema
var ArticleSchema = new Schema({
	title: String,
	author: String,
	created_at: Date,
	votes: {type:Number, default:0},
	content: String
})

// defines prehook
// before each save the created_at value will be set
ArticleSchema.pre('save', function(next){
	this.created_at = new Date();
	next();
});

module.exports = mongoose.model('Article', ArticleSchema);