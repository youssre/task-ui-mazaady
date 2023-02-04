<template>
  <div class="home">
    <topCard></topCard>
    <midCard></midCard>
  </div>
</template>

<script>
import topCard from '@/components/topCard.vue'
import midCard from '@/components/midCard.vue';
export default {
    name: "HomeView",
    components: {
      topCard,
      midCard
    }
}
</script>

<style>

</style>