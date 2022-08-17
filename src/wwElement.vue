<template>
      <treeselect
       v-model="treeValue"
       :multiple="false"
       :options="treeOptions"
       :name="treeName"
       :show-count="true"
       placeholder="Catégorie du produit"
       loadingText="Chargement..."
      />
</template>

<script>

// import the component
import Treeselect from 'vue3-treeselect'
// import the styles
import 'vue3-treeselect/dist/vue3-treeselect.css'

export default {
  // register the component
  components: { Treeselect },
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    treeOptions() {return this.content.options},
    treeName() {return this.content.name},
    treeValue() {return this.content.initValue},
  },
};
</script>

<style lang="scss" scoped>

</style>
