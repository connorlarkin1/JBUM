import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import { Random } from 'meteor/random';
import { Fake } from 'meteor/anti:fake';


import { Posts } from '../../api/posts/posts';

Meteor.startup(() => {
  if (Meteor.users.find().count() === 0) {

    console.time('DB_Seed');
    console.log('Seeding Accounts DB...');

    seed1UserId = Accounts.createUser({
      username: 'dev',
      password: 'dev'
    });
    seed2UserId = Accounts.createUser({
      username: 'david',
      email: 'd@oo.com',
      password: '123456'
    });
    seed3UserId = Accounts.createUser({
      username: 'glenn',
      email: 'g@oo.com',
      password: '123456'
    });
    seed4UserId = Accounts.createUser({
      username: 'martin',
      email: 'm@oo.com',
      password: '123456'
    });
  }
  if (Posts.find().count() === 0) {
    console.log('Seeding Posts DB...');

    let comments = [];
    for(let i = 0; i < 10; i++) {
        comments.push({
            user_id: Meteor.users.findOne()._id,
            post_id: Fake.word(),
            comment_body: Fake.sentence(30),
            created: new Date()
        })
    }
    for (let i = 0; i < 10; i++) {
      Posts.insert({
        user_id: Meteor.users.findOne()._id,
        post_title: Fake.sentence(12),
        post_body: Fake.sentence(48),
        post_comments: [comments[i]],
        post_likes: Math.floor(Math.random() * 50)
      });
    }
  }
});
