var argv = require('yargs')
           .command("hello", "this is test command", function(yargs){
			   return yargs
			          .option('fname',{
						   demand: true,
						   alias: "n",
						   description: "This is first name"
				      })
					  .option('lname',{
						   demand: true,
						   alias: "l",
						   description: "This is lirst name"
				      })
		   })
		   .help()
           .argv;

console.log(argv);