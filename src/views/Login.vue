<template>
    <body class="body-roxo">
        <v-card color="#525b7c" flat rounded="xl" class="card">
            <div>
            <v-card-title class="justify-center">
                <p>LOGIN DO CLIENTE</p>
            </v-card-title>
            </div>
            <div class="center">
                <v-text-field
                    label="USUÁRIO"
                    filled
                    rounded
                    background-color="#b8b4e4"
                    dark
                    prepend-inner-icon="fa-user"
                    name="email"
                    v-model="pessoa.email"
                >
                </v-text-field>
            </div>
            <div class="center">
                <v-text-field
                    label="SENHA"
                    filled
                    rounded
                    background-color="#b8b4e4"
                    dark
                    prepend-inner-icon="fa-lock"
                    name="Senha"
                    v-model="pessoa.senha"
                >
                </v-text-field>
            </div>
            <div>

            <v-btn
            style="margin-right:30px"
            depressed
            rounded
            color="#b8b4e4"
            dark
            x-large
            v-on:click="login">
                ENTRAR
            </v-btn>

            <v-btn
            depressed
            rounded
            color="#b8b4e4"
            dark
            x-large
            to="/cadastro">
                CADASTRO
            </v-btn>

            </div>
            <div style="margin-top:10px">
            <h4 class="errorMessage">{{message}}</h4>
            </div>
        </v-card>
    </body>
</template>

<script>
import axios from "axios"

export default {
    data () {
        return {
            message:'',
            pessoa: {
                email: null,
                senha: null,
            }
        }
    },
    methods: {
        login(){
            axios.post("http://localhost:5000/login", this.pessoa)
            .then(response => {
                if(response.data == "ERRO"){
                    this.message = "Dados incorretos"
                }
                else{
                    this.$router.push({path: '/Main'});
                }
            })
            .catch(error => console.log(error))
        }
    }
};
</script>


<style scoped lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    p{
        color: #FFFFFF;
        font-family: 'Lato', Arial, Helvetica, sans-serif;
    }

    .body-roxo{
        background-color: #3e3e62;
    }
    
    .center{
            display: flex;
            justify-content: center;
            margin-right: 30px;
            margin-left: 30px;
    }

    .card {
        margin:auto;
        margin-top: 50px;
        width: 400px;
        height: 350px;
        display: block;
        background-color: #525b7c;
    }

    .errorMessage{
        color: white;
    }

</style>