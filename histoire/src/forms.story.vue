<script lang="ts" setup>
import { reactive } from "vue";
import InputText from '../../components/input-text/input-text.vue';

const state = reactive({
  logoText: "LogoText",
});
</script>

<template>
  <Story title="Forms">
    <Variant title="form">

      <form action="#">
        <fieldset>
          <legend>Form legend</legend>
          <InputText label="Text input:" type="text"></InputText>
          <InputText label="Invalid input (min-length 10):" required="false" type="text" minlength="10"
            placeholder="Enter more than 10 chars" />
          <InputText label="Password input:" required="true" type="password" placeholder="Password" />
          <InputText label="Radio input:" type="radio" />
          <InputText label="Checkbox input:" type="checkbox" />

          <div class="form-group">
            <label for="select">Select field:</label>
            <select id="select" name="select">
              <option>Option 01</option>
              <option>Option 02</option>
            </select>
          </div>
          <div class="form-group">
            <label for="tarea">Textarea:</label>
            <textarea id="tarea" cols="30" rows="5" name="tarea">
Textarea text</textarea>
          </div>
          <div class="form-group">
            <label for="submit">Input Button:</label>
            <button class="btn btn-default" type="submit" role="button" name="submit" id="submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>

      <template #controls="{ state }">
        <HstText title="logoText" v-model="state.logoText" />
      </template>
    </Variant>
  </Story>
</template>
