<script setup>

import { ref } from 'vue'

const props = defineProps({
	passo: String
})

const totalPassos = ref(2)
const percentualPasso = (props.passo / totalPassos.value) * 100

</script>

<template lang="pug">

div(class="flex items-center space-x-8")
	div(class="overflow-hidden bg-facilConsulta-secondary3 h-4 rounded-full relative flex-1")
		div(
			class="bg-facilConsulta-primary h-full"
			:style="{ width: percentualPasso + '%' }"
			)
	span {{ passo }} de {{ totalPassos }}

</template>