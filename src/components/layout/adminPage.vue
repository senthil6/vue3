<template>
<el-container>
    <el-main>
        <div class="root">
            <h2>Create an Account</h2>
            <p>
                <input type="text" placeholder="Email" v-model="email" />
            </p>
            <p>
                <input type="password" placeholder="Password" v-model="password.password" />
            </p>
            <p>
                <input type="password" placeholder="Confirm Password" v-model="password.confirm" />
            </p>
            <button type="button" @click="submitForm">Submit</button>
        </div>
    </el-main>
</el-container>
</template>

<style lang="css">
.root {
    width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 30px;
    border-radius: 20px;
}

input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ddd;
    font-size: 1em;
    padding: 5px 0;
    margin: 10px 0 5px 0;
    width: 100%;
}

button {
    background-color: #3498db;
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    color: white;
}
</style>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required,email } from '@vuelidate/validators'
export default {
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({ 
    email: '',
    password:{
        password:'',
        confirm:''
    }
   }),
  validations () {
    return {
       email: { required,email },
    password:{
        password: { required },
        confirm: { required }
    }
    }
  },
  methods: {
    async submitForm () {
      const result = await this.v$.$validate()
      if (result) {
        alert('Form succesfully submitted')
        return
      }else {
        alert('Some Invalid field for above form')
      }
      // perform async actions
    }
  }
}
</script>
