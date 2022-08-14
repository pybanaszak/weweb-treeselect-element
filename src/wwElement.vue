<template>
    <div class="treeselect">
      <p style="font-size:8px;">coucou</p>
      <treeselect v-model="value" :multiple="true" :options="optionsData" />
   </div>
</template>

<script>

// import the component
import Treeselect from '@riophae/vue-treeselect'
// import the styles
import '@riophae/vue-treeselect/dist/vue-treeselect.css'

export default {
  // register the component
  components: { Treeselect },
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    optionsData() {
      return {
        value: this.content.initValue,
        options: this.content.options,
      };
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
