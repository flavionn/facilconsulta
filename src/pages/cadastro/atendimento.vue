<script setup>

import { onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

onBeforeMount(() => !store.state.form.profissional.tudoOk ? router.push({ name: 'index' }) : '')
onMounted(() => window.scrollTo(0,0))

</script>

<template lang="pug">

form-atendimento

</template>

<route lang="yaml">

meta:
  layout: cadastro
  titulo: Sobre o atendimento
  subtitulo: Detalhes do atendimento
  imagem: /img/desktop-pagina-2.png

</route>