<script setup>

import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

!store.state.form.profissional.tudoOk ? router.push({ name: 'index' }) : ''

</script>

<template lang="pug">

form-atendimento

</template>

<route lang="yaml">

meta:
  layout: cadastro
  titulo: Sobre o atendimento
  subtitulo: Detalhes do atendimento

</route>