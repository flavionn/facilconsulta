<script setup>

import { computed } from 'vue'

const props = defineProps({
	to: String
})

const linkExterno = computed(() => props.to.startsWith('http'))

</script>

<template lang="pug">

a(
	v-if="linkExterno"
	target="_blank"
	:href="to"
	)
	slot

router-link(
	v-else=""
	:to="{ name: to }"
	)
	slot


</template>

<style lang="sass" scoped>

a
	@apply border
	@apply rounded-xl
	@apply px-4
	@apply py-4

</style>