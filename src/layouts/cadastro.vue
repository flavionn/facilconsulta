<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const titulo = computed(() => route.meta.titulo)
const subtitulo = computed(() => route.meta.subtitulo)

</script>

<template lang="pug">

layout-container
	ui-botao-voltar(class="mt-6 mb-4 ml-8")
	cadastro-container
		ui-cadastro-titulo(v-if="titulo") {{ titulo }}
		ui-cadastro-subtitulo(v-if="subtitulo") {{ subtitulo }}
		router-view

</template>