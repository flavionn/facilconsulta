<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const titulo = computed(() => route.meta.titulo)
const subtitulo = computed(() => route.meta.subtitulo)

</script>

<template lang="pug">

layout-container(class="px-12 space-y-8 pt-12 pb-16")
	ui-botao-voltar
	ui-cadastro-titulo(v-if="titulo") {{ titulo }}
	ui-cadastro-subtitulo(v-if="subtitulo") {{ subtitulo }}
	router-view

</template>