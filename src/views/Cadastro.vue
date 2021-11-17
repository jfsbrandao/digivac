<template>
    <div><v-btn
        depressed
        color="#3e3e62"
        fab
        dark
        fixed
        left
        top
        to="/"
        >
        <v-icon dark>fa-arrow-left</v-icon>
        </v-btn>
    <body class="body-roxo">
        <v-card color="#525b7c" flat rounded="xl" class="card">
            <div>
            <v-card-title class="justify-center">
                <p>CADASTRO</p>
            </v-card-title>
            </div>

            <p id='titulozinho'>NOME:</p>
            <div class="center">
                <v-text-field
                    label="INSIRA SEU NOME"
                    filled
                    rounded
                    background-color="#b8b4e4"
                    dark
                    v-model="pessoa.nome"
                >
                </v-text-field>
            </div>

            <p id='titulozinho'>IDADE:</p>
            <div class="center">
                <v-text-field
                    label="INSIRA SUA IDADE"
                    filled
                    rounded
                    background-color="#b8b4e4"
                    dark
                    inputmode="numeric"
                    v-model="pessoa.idade"
                >
                </v-text-field>
            </div>

            <p id='titulozinho'>SEXO:</p>
            <div class="center">
                <v-select
                    :items="sexo"
                    label="selecione o sexo"
                    background-color= "#b8b4e4"
                    color=#b8b4e4
                    dark
                    solo
                    flat
                    rounded
                    height=55
                    v-model="pessoa.sexo"
                    >
                </v-select>
            </div>

            <p id="titulozinho">EMAIL:</p>
            <div class="center">
                <v-text-field
                    label="INSIRA SEU E-MAIL"
                    filled
                    rounded
                    background-color="#b8b4e4"
                    dark
                    v-model="pessoa.email"
                >
                </v-text-field>
            </div>
            <p id="titulozinho">CPF:</p>
            <div class="center">
                <v-text-field
                    label="INSIRA SEU CPF"
                    filled
                    rounded
                    background-color="#b8b4e4"
                    dark
                    inputmode="numeric"
                    name="Cpf"
                    v-model="pessoa.cpf"
                >
                </v-text-field>
            </div>

            <p id="titulozinho">SENHA:</p>
            <div class="center">
                <v-text-field
                label="SENHA"
                filled
                rounded
                background-color="#b8b4e4"
                dark
                name="Senha"
                v-model="pessoa.senha">
                </v-text-field>

            </div>
            <div>

            <v-btn
            depressed
            rounded
            color="#b8b4e4"
            dark
            x-large
            v-on:click="setUser"
            >
                AVANÇAR
            </v-btn>

            <div style="margin-top:10px;">
                <h4 class="errorMessage">{{message}}</h4>
            </div>

            </div>
        </v-card>
    </body>
    </div>
</template>

<script>
import axios from "axios"

export default {

    data() {

        return {

            sexo:["Masculino","Feminino"],
            message:'',

            pessoa: {
                nome:null,
                sexo:null,
                email: null,
                cpf: null,
                senha: null,
                idade: null,
            }
        }
        
    },

    methods: {
        setUser() {

            axios.post("http://localhost:5000/cadastrar_usuario", this.pessoa)
            .then(response => {
                if(response.data == "False"){
                    this.message = "Dados incorretos"
                }
                else{
                    this.$router.push({ path: '/Main' });
                }
            })
            .catch(error => console.log(error))
        }
    }
}
</script>


<style scoped lang="scss">

    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

    p{
        color: #FFFFFF;
        font-family: 'Lato', Arial, Helvetica, sans-serif;
    }

    #titulozinho{
        text-align: left;
        margin-left: 40px;
    }

    .body-roxo{
        background-color: #3e3e62;
    }
    
    .center{
            display: flex;
            justify-content: center;
            margin-right: 30px;
            margin-left: 30px;
            margin-bottom: 10;
    }

    .card {
        margin:auto;
        margin-top: 40px;
        margin-bottom: 50px;
        width: 400px;
        height: 960px;
        display: block;
        background-color: #525b7c;
    }

    .errorMessage{
        color: white;
    }
    
</style>