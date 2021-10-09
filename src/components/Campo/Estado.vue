<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'
import useLocalizacao from '@/modules/Localizacao'

let input = ref(props.valor)
let estados = ref('')

const props = defineProps({ valor: String })
const emit = defineEmits(['uf', 'update:modelValue'])

const { validarEstado, erros } = useValidacaoForm()
const { listaEstados } = useLocalizacao()

const emitir = () => {
	emit('uf', input.value)
	emit('update:modelValue', input.value)
}

const validarInput = () => {
	emitir()
	validarEstado('estado', input.value)
}

estados.value = listaEstados
emitir()

</script>

<template lang="pug">

p
	label(for="estado") Estado *
	select(
		id="estado"
		v-model="input"
		@change="validarInput"
		:class="{ '!border-red-400' : erros.estado }"
		)
		option(value="") Selecione
		option(
			v-for="item in estados"
			:value="item.uf"
			) {{ item.nome }}
	mensagem-erro(v-if="erros.estado") {{ erros.estado }}

</template>