<template>
  <div>
    <b-button @click="showModal">
      Open Modal
    </b-button>
    <b-modal ref="my_modal">
      Hello From My Modal!
      <b-btn @click="hideModal">Close Me</b-btn>
    </b-modal>
  </div>
</template>

<script>

export default {
  name: 'add-video',

  data: () => {
    return {

    }
  },

  methods: {
  }
}
</script>

<style lang="scss">
</style>
