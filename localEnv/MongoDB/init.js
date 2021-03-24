db.createUser(
    {
        user: "contentApp",
        pwd: "contentPassword",
        roles: [
            {
                role: "readWrite",
                db: "contentDB"
            }
        ]
    }
);

db.createCollection("contents_col", { capped : true, size : 5242880, max : 5000 } )