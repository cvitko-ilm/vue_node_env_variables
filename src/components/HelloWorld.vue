<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <rbc-expandable-container 
      :accordion="true"
      header="Expandable header label"
    >
      <rbc-expandable 
        :arrow="true" 
        :duration="200"
      >
        <div slot="trigger">
          Expandable label 1
        </div>
        Content area 1
      </rbc-expandable>
      <rbc-expandable 
        :arrow="true" 
        :duration="200"
      >
        <div slot="trigger">
          Expandable label 2
        </div>
        Content area 2
      </rbc-expandable>
      <rbc-expandable 
        :arrow="true" 
        :duration="200"
      >
        <div slot="trigger">
          Expandable label 3
        </div>
        Content area 3
      </rbc-expandable>
    </rbc-expandable-container>
    <rbc-button>View results</rbc-button>
  </div>
</template>

<script>
import Button from 'rbc-wm-framework-vuejs/dist/wm/components/Button'
import Expandable from 'rbc-wm-framework-vuejs/dist/wm/components/Expandable'
import ExpandableContainer from 'rbc-wm-framework-vuejs/dist/wm/components/ExpandableContainer'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    "rbc-button": Button,
    "rbc-expandable": Expandable,
    "rbc-expandable-container": ExpandableContainer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~rbc-wm-framework-vuejs/dist/wm/components/Button/style.min.css';
@import '~rbc-wm-framework-vuejs/dist/wm/components/Expandable/style.min.css';
@import '~rbc-wm-framework-vuejs/dist/wm/components/ExpandableContainer/style.min.css';
</style>
