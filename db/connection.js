const mongoose = require('mongoose');

// .connect('mongodb://localhost:27017/ogrenci-takip', { mongodb+srv://scrayt:scr1234@erenbekman.plkog7z.mongodb.net/ogrenci-takip
mongoose
	.connect(
		'mongodb+srv://scrayt:scr1234@erenbekman.plkog7z.mongodb.net/ogrenci-takip',
		{
			useUnifiedTopology: true,
			useNewUrlParser: true,
		}
	)
	.then((result) => {
		console.log('db connection');
	})
	.catch((err) => {
		console.log('db not connection' + err);
	});
