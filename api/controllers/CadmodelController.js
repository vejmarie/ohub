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
    // TODO check project exists
    CadModel.find({ owner: req.params.projectId }, function(err, cadModels) {
      if (err) {
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }
      res.ok(cadModels);
    });
  }

};
