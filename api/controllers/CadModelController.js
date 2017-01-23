/**
 * CadmodelController
 *
 * @description :: Server-side logic for managing cadmodels
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  find: function(req, res) {
    if (!req.params.projectId) {
      return res.notFound();
    }
    // TODO check project exists and user is authorized
    CadModel.find({ owner: req.params.projectId }, function(err, cadModels) {
      if (err) {
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }
      res.ok(cadModels);
    });
  },

  create: function(req, res) {
    var c = req.body;
    // TODO check project exists and user is authorized
    c.owner = req.params.projectId;
    CadModel.create(c, function(err, cadModel) {
      if (err) {
        if (err.status === 400) {
            return res.badRequest();
        }
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }
      res.created(cadModel);
    });
  },

  update: function(req, res) {
    var c = req.body;
    Project.findOne({ id: req.params.projectId }, function(err, project) {
      if (err) {
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }

      if (! project) {
        return res.send(404);
      }

      // TODO check user is authorized

      var c = req.body;

      if (c.owner && c.owner !== project.id) {
        return res.send(400);
      }

      CadModel.update({ id: req.params.id, owner: req.params.projectId }, c).exec(function(err, cadmodels) {
        if (err) {
          sails.log.error(err);
          return res.serverError({ error: 'Internal server error'});
        }
        if (cadmodels.length === 0) {
          return res.send(404);
        }
        res.ok(cadmodels[0]);
      });
    });
  },

  destroy: function(req, res) {
    var c = req.body;
    // TODO check project exists and user is authorized
    CadModel.destroy({ id: req.params.id, owner: req.params.projectId }, function(err, cadmodels) {
      if (err) {
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }
      if (cadmodels.length === 0) {
        return res.send(404);
      }
      res.send(204);
    });
  }

};
