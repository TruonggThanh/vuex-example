<template>
  <div class="task">
    <h1>Vuexx</h1>
    <p>{{$store.state.name}}</p>
    <p>{{name}}</p>
    <button @click="updateProfile">Change</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Task',
    computed: {
        ...mapGetters(['name'])
    },
    methods: {
        ...mapMutations(['setName']),
        ...mapActions(['updateProfile'])
    }
}
</script>