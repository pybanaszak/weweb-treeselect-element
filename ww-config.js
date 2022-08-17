export default {
  editor: {
    label: {
      en: "treeselect",
    },
  },
  properties: {
    name: {
      label: {
        en: "Name",
        fr : "Nom"
      },
      type: "Text",
      defaultValue: "treeselect",
      bindable: true,
    },
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
      defaultValue:null,
      bindable: true,
    }
  },
};
