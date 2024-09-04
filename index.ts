
import {v4 as randomUUID}from "uuid"
import { faker } from "@faker-js/faker";

class Post {
  private _id: string;
  private _userName: string; // Atributo privado do tipo string
  private _avatarUrl: string;
  private _imageUrl: string;
  private _isLiked: boolean;
  private _description: string;
  private _createdAt: Date;
  private _numberOfLikes: number;

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._id = randomUUID();
    this._userName = userName;
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._isLiked = false;
    this._description = description;
    this._createdAt = new Date();
    this._numberOfLikes = 0;
  }

  like() {
    this._isLiked = !this._isLiked;
    // Incrementa o número de likes
    if (this._isLiked) {
      this._numberOfLikes += 1;
    } else {
      this._numberOfLikes -= 1;
    }
  }
}

const posts: Post[] = [];

for (let index = 0; index < 15; index++) {
  const userName = faker.person.firstName();
  const avatarUrl = faker.image.avatar();
  const imageUrl = faker.image.urlLoremFlickr();
  const description = faker.lorem.word();

  const post = new Post(userName, avatarUrl, imageUrl, description);

  posts.push(post);
}

// toHTML(){
// const div = document.createElement('div')
// div.innerHTML = `<b>${this._userName}</b>`
// document.body.appendChild(div)
// }