<script setup>

import { ref } from 'vue'
import useValidacaoForm from '@/modules/ValidacaoForm'
import useEspecialidades from '@/modules/Especialidades'

let input = ref(props.valor)
let especialidades = ref([])

const props = defineProps({ valor: String })
const emit = defineEmits(['update:modelValue'])

const { validarEspecialidade, erros } = useValidacaoForm()
const { listaEspecialidades } = useEspecialidades()

const validarInput = () => {
	emit('update:modelValue', input.value)
	validarEspecialidade('especialidade', input.value)
}

props.valor === undefined ? input.value = '' : ''
especialidades.value = listaEspecialidades

</script>

<template lang="pug">

p
	label(for="especialidade") Especialidade principal *
	select(
		id="especialidade"
		v-model="input"
		@change="validarInput"
		:class="{ '!border-red-400' : erros.especialidade }"
		)
		option(value="") Selecione a especialidade
		option(
			v-for="item in especialidades"
			:value="item"
			) {{ item }}
	mensagem-erro(v-if="erros.especialidade") {{ erros.especialidade }}

</template>