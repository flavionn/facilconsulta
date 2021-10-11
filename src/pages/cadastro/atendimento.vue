<script setup>

import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

onBeforeMount(() => !store.state.form.profissional.tudoOk ? router.push({ name: 'index' }) : '')

</script>

<template lang="pug">

form-atendimento

</template>

<route lang="yaml">

meta:
  layout: cadastro
  titulo: Sobre o atendimento
  subtitulo: Detalhes do atendimento
  imagem: /public/img/desktop-pagina-2.png

</route>