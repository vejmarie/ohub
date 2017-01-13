var request = require('supertest');
var chai = require('chai');
var expect = chai.expect;

describe('Complete scenario', function() {

  var user, project;

  describe('Create a user', function() {
    it('should create a user', function (done) {
      request(sails.hooks.http.app)
        .post('/api/users')
        .send({
          firstname: 'John',
          lastname: 'Lenon',
          email: 'john.lenon@opencompute.org',
          password: 'password'
        })
        .expect(201)
        .expect(function(res) {
          user = res.body;
        })
        .end(done);
    });
  });

  describe('Create a project', function() {
    it('should create a project', function (done) {
      request(sails.hooks.http.app)
        .post('/api/projects')
        .send({
          name: 'Awesome Project',
          identifier: 'awesome',
          owner: user.id
        })
        .expect(201)
        .expect(function(res) {
          project = res.body;
        })
        .end(done);
    });
  });

});
