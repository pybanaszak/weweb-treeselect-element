export default {
  editor: {
    label: {
      en: "treeselect",
    },
  },
  properties: {
    initValue: {
      label: {
        en: "Init value",
        fr : "Valeur initiale"
      },
      type: "Text",
      defaultValue: null,
      bindable: true,
    },
    options: {
      label: {
        en: "Options",
        fr : "Options"
      },
      type: "Text",
      defaultValue:
        [ {
          id: 'a',
          label: 'a',
          children: [ {
            id: 'aa',
            label: 'aa',
          }, {
            id: 'ab',
            label: 'ab',
          } ],
        }, {
          id: 'b',
          label: 'b',
        }, {
          id: 'c',
          label: 'c',
        }],
      bindable: true,
    }
  },
};
