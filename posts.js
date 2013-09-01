/* The PostsDAO must be constructed with a connected database object */
function PostsDAO(db) {
    "use strict";

    /* If this constructor is called without the "new" operator, "this" points
     * to the global object. Log a warning and call it correctly. */
    if (false === (this instanceof PostsDAO)) {
        console.log('Warning: PostsDAO constructor called without "new" operator');
        return new PostsDAO(db);
    }

    var school_list = db.collection("school_list");

    
    this.getPosts = function(num, callback) {
        "use strict";

        //posts.find().sort('date', -1).limit(num).toArray(function(err, items) {
          school_list.find().sort('date', -1).limit(num).toArray(function(err, items) {
                    
		  "use strict";

            if (err) return callback(err, null);

            console.log("Found " + items.length + " posts");

            callback(err, items);
        });
    }

}

module.exports.PostsDAO = PostsDAO;
