const bookshelf = require('../bookshelf');

const User = bookshelf.model('User', {
  tableName: 'user',
  tasks: function () {
    return this.hasMany('sheet', 'user_id');
  }
});

module.exports = User;
