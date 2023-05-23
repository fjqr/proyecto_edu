<template>
  <div class="row">
    <div class="col-12 q-ma-md">
      <p class="text text-h3 myTitle">REGISTRO DE CUENTA</p>
    </div>
  </div>
  <div class="row">
    <div class="col-4"></div>
    <div class="col-4 q-ma-md">
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
          v-model="form.name"
          label="Nombre"
          hint="Escriba su nombre"
          class="q-ma-md"
          lazy-rules
          :rules="[
            (val) => (val && val.lenght > 0) || 'Por favor, ingrese su nombre',
          ]"
        />
        <q-input
          filled
          v-model="form.lastname"
          label="Apellido"
          hint="Escriba su apellido"
          class="q-ma-md"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.lenght > 0) || 'Por favor, ingrese su apellido',
          ]"
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
        <q-input
          filled
          type="password"
          v-model="form.password"
          label="Confirmar password"
          hint="Por favor, confirme su contraseña"
          class="q-ma-md"
          lazy-rules
          :rules="[]"
        />
        <div class="row justify-evenly">
          <q-btn label="Submit" type="submit" color="primary" class="q-ma-md" />
          <q-btn label="cancelar" type="reset" color="red" class="q-ma-md" />
        </div>
      </q-form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  user: 0,
  email: "",
  password: "",
  name: "",
  lastname: "",
});

const onSubmit = () => {
  const qRadio = document.querySelectorAll("#q-radio");
  console.log(Array.from(qRadio).filter((v) => v.getAttribute("aria-checked")));
};
</script>
