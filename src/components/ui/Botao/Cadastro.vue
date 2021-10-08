<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
	to: String
})

const href = () => {
	router.push({ name: props.to })
}

</script>

<template lang="pug">

button(
	class="disabled:(opacity-50 cursor-not-allowed) cursive"
	@click="href"
	)
	slot

</template>