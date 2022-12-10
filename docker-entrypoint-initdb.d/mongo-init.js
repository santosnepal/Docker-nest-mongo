print('Started adding the user')
db = db.getsiblingDB('docker-created')
db.createUser(
    {
        user: "docker-user",
        pwd: "docker-user",
        roles:[
            {
                role: "readWrite",
                db: "docker-created"
            }
        ]
    }
);
db.createCollecton("test")
print("End adding the user roles.")