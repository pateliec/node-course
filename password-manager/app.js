var storage = require('node-persist');
var crypto = require('crypto-js');
storage.initSync();

var args = require('yargs')
           .command("create", "Create account", function(yargs){
			   return yargs
			          .option('name',{
						   demand: true,
						   alias: "n",
						   description: "This is the name"
				      })
					  .option('username',{
						   demand: true,
						   alias: "u",
						   description: "This is username"
				      })
					  .option('password',{
						   demand: true,
						   alias: "p",
						   description: "This is password"
				      })
                      .option('key',{
						   demand: true,
						   alias: "k",
						   description: "This is secret key"
				      })
		   })
		   .command("get", "Get account", function(yargs){
			   return yargs
			          .option('username',{
						   demand: true,
						   alias: "u",
						   description: "This is the username"
				      })
                      .option('key',{
						   demand: true,
						   alias: "k",
						   description: "This is secret key"
				      })
		   })
		   .help()
           .argv;

var command = args._[0];

//console.log(args);

if(command == "create")
{
   
	var acc = {name:args.name, username:args.username, password:args.password};
    
    var accString = JSON.stringify(acc);
    
    var encAcc = crypto.AES.encrypt(accString, args.key);
  
	var result = createAccount(encAcc);
    
    console.log(result);
     
	
}

if(command == "get")
{
    var username = args.username;
    var key = args.key;
	var result = getAccount(username, key);
    console.log(result);
	
}
accounts = storage.getItemSync('accounts');


function createAccount(account)
{
    try{
         var accounts = storage.getItemSync('accounts');
         if(typeof accounts == "undefined")
         {
            var accounts =[]; 
         }
         accounts.push(account.toString());
         storage.setItemSync("accounts", accounts);
         return accounts;
       }catch(e)
        {
            console.log(e.message);
        }
}

function getAccount(username, key)
{
   
	var accounts = storage.getItemSync('accounts');
   
        if(typeof accounts != "undefined")
        {  
            for(i=0; i< accounts.length; i++)
            {
                try{
                    var byte = crypto.AES.decrypt(accounts[i], key);
                    var accString = byte.toString(crypto.enc.Utf8);
                    var accObj = JSON.parse(accString);
                    if(accObj.username == username)
                    {
                        return accObj;
                    }
                } catch(e)
                {
                    console.log(e.message);
                }
            }
            
        }
       
    }