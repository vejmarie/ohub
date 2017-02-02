require.config({
  paths: {
    Ractive: '../packages/ractive/ractive'
  }
});

require(['Ractive'],
        function(Ractive) {

  var ractive = new Ractive({
    el: "ractive-container",
    template: "#template",
    data: {
      projects: [
        {
          name: 'RuggedPOD',
          identifier: 'ruggedpod',
          imageUrl: '/images/ruggedpod.jpg',
          owner: {
            username: "ggiamarchi"
          }
        },
        {
          name: 'Windmill Server',
          identifier: 'windmill',
          imageUrl: '/images/no-project-picture.png',
          owner: {
            username: "ggiamarchi"
          }
        },
        {
          name: 'Open Rack v1',
          identifier: 'openrackv1',
          imageUrl: '/images/no-project-picture.png',
          owner: {
            username: "ggiamarchi"
          }
        },
        {
          name: 'Barreleye Server',
          identifier: 'barreleye',
          imageUrl: '/images/no-project-picture.png',
          owner: {
            username: "ggiamarchi"
          }
        },
        {
          name: 'Winterfell Server',
          identifier: 'winterfell',
          imageUrl: '/images/no-project-picture.png',
          owner: {
            username: "ggiamarchi"
          }
        }
      ]
    }
  });

});
