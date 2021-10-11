<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const store = useStore()
const router = useRouter()
const route = useRoute()

const titulo = computed(() => route.meta.titulo)
const subtitulo = computed(() => route.meta.subtitulo)
const imagem = computed(() => route.meta.imagem)

</script>

<template lang="pug">

layout-container(class="space-y-8 pt-12 pb-32")
	ui-botao-voltar
	ui-app-titulo(v-if="titulo") {{ titulo }}
	ui-app-subtitulo(v-if="subtitulo") {{ subtitulo }}
	div(class="flex items-start")
		router-view(class="w-full md:(w-1/2)")
		img(
			v-if="imagem"
			class="invisible w-0 md:(visible w-1/2 ml-4)"
			:src="imagem"
			)

</template>