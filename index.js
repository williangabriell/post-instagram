"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_crypto_1 = require("node:crypto");
var faker_1 = require("@faker-js/faker");
var Post = /** @class */ (function () {
    function Post(userName, avatarUrl, imageUrl, description) {
        this._id = (0, node_crypto_1.randomUUID)();
        this._userName = userName;
        this._avatarUrl = avatarUrl;
        this._imageUrl = imageUrl;
        this._isLiked = false;
        this._description = description;
        this._createdAt = new Date();
        this._numberOfLikes = 0;
    }
    Post.prototype.like = function () {
        this._isLiked = !this._isLiked;
        // Incrementa o número de likes
        if (this._isLiked) {
            this._numberOfLikes += 1;
        }
        else {
            this._numberOfLikes -= 1;
        }
    };
    return Post;
}());
var posts = [];
for (var index = 0; index < 15; index++) {
    var userName = faker_1.faker.person.firstName();
    var avatarUrl = faker_1.faker.image.avatar();
    var imageUrl = faker_1.faker.image.urlLoremFlickr();
    var description = faker_1.faker.lorem.word();
    var post = new Post(userName, avatarUrl, imageUrl, description);
    posts.push(post);
}
posts[0].like();
// posts[0].like();
console.log(posts[0]);
