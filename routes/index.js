var express=require('express');
var cors = require('cors')
var bodyParser=require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var router=express.Router();
var mongo=require('mongodb');
router.use(cors())
router.use(bodyParser.json());
router.use(cookieParser());
router.use(session({secret: "hotshot"}));

/*Start Login service*/
router.get('/api/login',function(req,res){

	var query=req.body;
	console.log("input",req.body);
	MongoClient=mongo.MongoClient;
	//var url='mongodb://localhost/SA';
	var url='mongodb+srv://hotshotsolutions:Hotshot@321@cluster0-5if9n.mongodb.net/whatsapp?retryWrites=true&w=majority'
	MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
		if(err){
			console.log("Error in connecting database");
		}
		else{
			console.log('connected');
			var db = client.db('whatsapp');
			//console.log(db);
			//var collection=db.collection("login");
			db.collection('login').findOne({username:query.username,password:query.password}, function (findErr, result) {
				if (findErr) throw findErr;
				console.log(result);
				if(result)
				 res.json(result);
				else
					res.json("Invalid User name or password"); 
				client.close();
			  });
			
		} 	
	});
});

router.get('/api/contacts',function(req,res){

	var query=req.body;
	console.log("input",req.body);
	MongoClient=mongo.MongoClient;
	//var url='mongodb://localhost/SA';
	var url='mongodb+srv://hotshotsolutions:Hotshot@321@cluster0-5if9n.mongodb.net/whatsapp?retryWrites=true&w=majority'
	MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
		if(err){
			console.log("Error in connecting database");
		}
		else{
			console.log('connected');
			var db = client.db('whatsapp');
			//console.log(db);
			//var collection=db.collection("login");
			db.collection('contacts').find({}).toArray(function (findErr, result) {
				if (findErr) throw findErr;
				console.log(result);
				if(result)
				 res.json(result);
				else
					res.json("Invalid User name or password"); 
				client.close();
			  });
			
		} 	
	});
});

router.get('/api/template',function(req,res){

	var query=req.body;
	console.log("input",req.body);
	MongoClient=mongo.MongoClient;
	//var url='mongodb://localhost/SA';
	var url='mongodb+srv://hotshotsolutions:Hotshot@321@cluster0-5if9n.mongodb.net/whatsapp?retryWrites=true&w=majority'
	MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
		if(err){
			console.log("Error in connecting database");
		}
		else{
			console.log('connected');
			var db = client.db('whatsapp');
			//console.log(db);
			//var collection=db.collection("login");
			db.collection('template').find({}).toArray(function (findErr, result) {
				if (findErr) throw findErr;
				console.log(result);
				if(result)
				 res.json(result);
				else
					res.json("Invalid User name or password"); 
				client.close();
			  });
			
		} 	
	});
});

router.post('/api/contacts',function(req,res){
	console.log("In Post");
var query=req.body;
	console.log("input",req.body);
	MongoClient=mongo.MongoClient;
	//var url='mongodb://localhost/SA';
	var url='mongodb+srv://hotshotsolutions:Hotshot@321@cluster0-5if9n.mongodb.net/whatsapp?retryWrites=true&w=majority'
	MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
		if(err){
			console.log("Error in connecting database");
		}
		else{
			console.log('connected');
			var db = client.db('whatsapp');
			//console.log(db);
			//var collection=db.collection("login");
			db.collection('contacts').insert(query, function (findErr, result) {
				if (findErr) throw findErr;
				console.log(result);
				if(result)
				 res.json("Success");
				else
					res.json("Failed to insert"); 
				client.close();
			  });
			
		} 	
	});
});

router.post('/api/template',function(req,res){
	console.log("In Post");
var query=req.body;
	console.log("input",req.body);
	MongoClient=mongo.MongoClient;
	//var url='mongodb://localhost/SA';
	var url='mongodb+srv://hotshotsolutions:Hotshot@321@cluster0-5if9n.mongodb.net/whatsapp?retryWrites=true&w=majority'
	MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
		if(err){
			console.log("Error in connecting database");
		}
		else{
			console.log('connected');
			var db = client.db('whatsapp');
			//console.log(db);
			//var collection=db.collection("login");
			db.collection('template').insert(query, function (findErr, result) {
				if (findErr) throw findErr;
				console.log(result);
				if(result)
				 res.json("Success");
				else
					res.json("Failed to insert"); 
				client.close();
			  });
			
		} 	
	});
});


router.put('/api/contacts',function(req,res){
	console.log("In Put");
var query=req.body;
console.log(query);
MongoClient=mongo.MongoClient;
var url='mongodb+srv://hotshotsolutions:Hotshot@321@cluster0-5if9n.mongodb.net/whatsapp?retryWrites=true&w=majority'
MongoClient.connect(url,{ useNewUrlParser: true },function(err,client){
if(err){
	console.log("Error is getting data "+err);
}
else{
	var db = client.db('whatsapp');
	//console.log(db);
	//var collection=db.collection("login");
	db.collection('contacts').update(query, function (findErr, result) {
		if (findErr) throw findErr;
		console.log(result);
		if(result)
		 res.json("Success");
		else
			res.json("Failed to insert"); 
		client.close();
	  });


	var collection=db.collection("dairies");
	collection.update({"username":query.username,"date":query.find.date},{$push:{timeSlot:query.time}});
	res.header('Content-Length', 100);
	var obj={"status":true};
	res.json(obj);
}
});
});


/*End Dairy service*/
module.exports=router;