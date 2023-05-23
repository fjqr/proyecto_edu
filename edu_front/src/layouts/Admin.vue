<template>
  <div class="row">
    <div class="col-12">
      <p class="text text-h3 q-ma-md">ADMINISTRADOR</p>
    </div>
  </div>
  <div class="row justify-center">
    <div class="col-4">
      <!-- <q-input color="teal" filled v-model="text" label="Buscar" class="q-ma-md">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input> -->
      <q-input
        standout="bg-teal text-white"
        v-model="cedula"
        label="Cédula de identidad"
        :dense="dense"
      />
      <!-- <q-input standout="bg-teal text-white" v-model="lastName" label="Apellido" :dense="dense" /> -->
    </div>
  </div>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-2 flex justify-center">
      <q-btn color="primary" label="Enviar" class="q-ma-md" />
    </div>
    <div class="col-2 flex justify-center">
      <q-btn color="red" label="Borrar" class="q-ma-md" />
    </div>
  </div>
  <div class="row justify-center">
    <TablaAdmin />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import TablaAdmin from "../components/TablaAdmin.vue";
// const text = ref("");
const cedula = ref("");
// const lastName = ref("");
const dense = ref(false);
const options: any = ref([]);
const filterFn = () => {
  console.log("funciona");
};
</script>
