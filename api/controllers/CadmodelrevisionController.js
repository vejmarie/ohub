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
    // TODO check cad model exists
    CadModelRevision.find({ owner: req.params.cadModelId }, function(err, cadModelRevisions) {
      if (err) {
        sails.log.error(err);
        return res.serverError({ error: 'Internal server error'});
      }
      res.ok(cadModelRevisions);
    });
  }

};
