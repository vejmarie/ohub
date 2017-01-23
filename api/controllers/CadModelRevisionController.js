/**
 * CadmodelrevisionController
 *
 * @description :: Server-side logic for managing cadmodelrevisions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  find: function(req, res) {
    if (!req.params.projectId) {
      return res.notFound();
    }
    // TODO check project exists
    // TODO check cad model exists in this projects
    CadModelRevision.find({ owner: req.params.cadModelId }, function(err, cadModelRevisions) {
      if (err) {
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }
      res.ok(cadModelRevisions);
    });
  },

  create: function(req, res) {
    var c = req.body;
    // TODO check project exists and user is authorized
    // TODO check CAD model exists
    c.owner = req.params.cadModelId;
    c.projectId = req.params.projectId;

    CadModelRevision.create(c, function(err, revision) {
      if (err) {
        if (err.status === 400) {
            return res.badRequest();
        }
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }
      res.created(revision);
    });
  },

  update: function(req, res) {
    var c = req.body;
    Project.findOne({ id: req.params.projectId }, function(err, project) {
      if (err) {
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }

      if (!project) {
        return res.send(404);
      }

      // TODO check user is authorized

      CadModel.findOne({ id: req.params.cadModelId, owner: req.params.projectId }, function(err, cadmodel) {
        if (err) {
          sails.log.error(err);
          return res.serverError({ error: 'Internal server error'});
        }

        if (!cadmodel) {
          return res.send(404);
        }

        var c = req.body;

        if (c.owner && c.owner !== cadmodel.id) {
          return res.send(400);
        }

        CadModelRevision.update({ id: req.params.id, owner: req.params.cadModelId }, c).exec(function(err, revisions) {
          if (err) {
            sails.log.error(err);
            return res.serverError({ error: 'Internal server error'});
          }
          if (revisions.length === 0) {
            return res.send(404);
          }
          res.ok(revisions[0]);
        });
      });
    });
  },

  destroy: function(req, res) {
    var c = req.body;
    // TODO check project exists and user is authorized
    CadModelRevision.destroy({ id: req.params.id, owner: req.params.cadModelId, projectId: req.params.projectId }, function(err, cadmodels) {
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
