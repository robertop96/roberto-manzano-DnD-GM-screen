const userData = require('./seed_data/users');
const profileData = require('./seed_data/profiles');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('user').insert(userData);
    })
    .then(() => {
      return knex('profile').del();
    })
    .then(() => {
      //insert seed entries
      return knex('user')
        .pluck('id')
        .then((userIds) => {
          return userIds;
        });
    })
    .then((userIds) => {
      const profileDataWithUserIds = profileData.map((profile) => {
        // Shouldn't this correspond with the user id of my user???
        profile.user_id = userIds[Math.floor(Math.random() * userIds.length)];
        return profile;
      });
      return knex('profile').insert(profileDataWithUserIds);
    });
};
