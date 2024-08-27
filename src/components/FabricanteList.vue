<script setup>
import { reactive, onMounted } from 'vue'
import { useFabricanteStore } from '@/stores/fabricante'

const fabricanteStore = useFabricanteStore()
const newFabricante = reactive(
  {
    name: '',
  }
)
const deleteFab = reactive({
  id: ''
})

async function addFabricante() {
  await fabricanteStore.createFabricante(newFabricante)
  newFabricante.name = ''
  newFabricante.icon = ''
}

async function delFab() {
  await fabricanteStore.deleteFabricante(deleteFab)
  deleteFab.id = ''
}

onMounted(async () => {
  await fabricanteStore.getFabricantes()
})
</script>

<template>
  <div class="container">
    <div class="fabricante-add">
      <input type="text" v-model="newFabricante.name" placeholder="Nome">
      <button @click="addFabricante">Adicionar</button>
    </div>

    <div class="fabricante-list">
      <div v-if="fabricanteStore.fabricantes.length === 0">
        <p>Fabricantes não encontrados!!!</p>
      </div>
      <table class="fabricante-list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="fabricante in fabricanteStore.fabricantes" :key="fabricante.id">
            <td>{{ fabricante.id }}</td>
            <td>{{ fabricante.name }}</td>
            <td > <span class="mdi mdi-delete" @click="delFab" /></td>
          </tr>
        </tbody>

      </table>
    </div>
  </div>

</template>

<style scoped>
.container {
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fabricante-list {
  width: 30vw;
  border-collapse: collapse;

  & th {
    font-weight: bold;
  }

  & tr:nth-child(odd) {
    background-color: beige;
  }
}
</style>