import { ref } from 'vue'
import { defineStore } from 'pinia'

import FabricanteService from '@/service/fabricante'
const fabricanteService = new FabricanteService()

export const useFabricanteStore = defineStore('fabricante', () => {
  const fabricantes = ref([])

  async function getFabricantes() {
    fabricantes.value = await fabricanteService.getFabricantes()
  }

  async function createFabricante(fabricante) {
    await fabricanteService.createFabricante(fabricante)
    getFabricantes()
  }

  async function deleteFabricante(fabricante_id) {
    await fabricanteService.deleteFabricante(fabricante_id)
    getFabricantes()
  }

  return { fabricantes, getFabricantes, createFabricante, deleteFabricante }
})