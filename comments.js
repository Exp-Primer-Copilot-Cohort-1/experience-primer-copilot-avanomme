//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/CommentDB', { useNewUrlParser: true });

// Create a schema
var commentSchema = new Schema({
    text: String,