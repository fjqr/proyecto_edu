<template>
  <div class="row">
    <div class="col-12 myText">
      <q-form @submit="onSubmit">
        <q-radio
          id="q-radio"
          name="user"
          v-model="form.user"
          val="administrador"
          label="Administrador"
        />
        <q-radio
          id="q-radio"
          name="user"
          v-model="form.user"
          val="profesor"
          label="Profesor"
        />
        <q-radio
          id="q-radio"
          name="user"
          v-model="form.user"
          val="estudiante"
          label="Estudiante"
        />
        <q-input
          filled
          v-model="form.email"
          label="Correo"
          hint="Escriba su correo electrónico"
          class="q-ma-md"
          lazy-rules
          :rules="[
            (val) => (val && val.lenght > 0) || 'Por favor, ingrese su correo',
          ]"
        />
        <q-input
          filled
          type="password"
          v-model="form.password"
          label="Password"
          hint="Ingrese su contraseña"
          class="q-ma-md"
          lazy-rules
          :rules="[]"
        />

        <q-btn label="submit" type="submit" color="primary" class="q-ma-md full-width" />
      </q-form>
    </div>
  </div>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4">
      <router-link :to="'registro'">Crea una cuenta</router-link>
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  user: 0,
  email: "",
  password: "",
});

const onSubmit = () => {
  const qRadio = document.querySelectorAll("#q-radio");
  console.log(Array.from(qRadio).filter((v) => v.getAttribute("aria-checked")));
};
</script>
