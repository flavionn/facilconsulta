<script setup>

import { ref } from 'vue'
import { useStore } from 'vuex'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref('')

const emit = defineEmits(['update:modelValue'])

const store = useStore()
const { validarPreco, erros } = useValidacaoForm()

const validarInput = () => validarPreco('preco', input.value)

store.state.form.atendimento.preco ? input.value = store.state.form.atendimento.preco : ''
emit('update:modelValue', input.value)

</script>

<template lang="pug">

p
	label(for="celular") Informe o preço da consulta
	input(
		type="text"
		id="preco"
		v-model="input"
		placeholder="Valor"
		@keyup="validarInput"
		@blur="validarInput"
		@input="$emit('update:modelValue', $event.target.value)"
		:class="{ '!border-red-400' : erros.preco }"
		)
	mensagem-erro(v-if="erros.preco") {{ erros.preco }}

</template>