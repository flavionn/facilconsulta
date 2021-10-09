<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'

let input = ref(props.valor)
const props = defineProps({ valor: String })

const { validarPreco, erros } = useValidacaoForm()
const validarInput = () => validarPreco('preco', event.target.dataset.maskRawValue)

</script>

<template lang="pug">

p
	label(for="celular") Informe o preço da consulta *
	input(
		type="text"
		id="preco"
		v-model="input"
		placeholder="Valor"
		@keyup="validarInput"
		@blur="validarInput"
		@input="$emit('update:modelValue', $event.target.dataset.maskRawValue)"
		:class="{ '!border-red-400' : erros.preco }"
		v-maska='["R$ #", "R$ ##", "R$ ###"]'
		)
	mensagem-erro(v-if="erros.preco") {{ erros.preco }}

</template>