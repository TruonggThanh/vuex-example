<template>
  <div class="random">
    <h1>{{ $store.state.name }}</h1>
    <h2>{{ name }}</h2>
    <button @click="updateProfile">Change Name</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'Random',
  computed: {
      ...mapGetters(['name'])
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions(['updateProfile'])
  }
}
</script>