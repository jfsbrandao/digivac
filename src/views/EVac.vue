<template>
<div><v-btn
      depressed
      color="#3e3e62"
      fab
      dark
      fixed
      left
      top
      to="/Main"
      >
      <v-icon dark>fa-arrow-left</v-icon>
      </v-btn>
    <v-card color="#3e3e62" width="400px" style="margin:auto; margin-bottom: 40px; margin-top: 10px" flat>
        <p class="title">{{nome}}</p>
        <p style="color: white; text-align:left; font-weight: bold">
            IDADE: {{idade}}
            <br>
            SEXO: {{sexo}}
            <br>
            CPF: {{cpf}}
        </p>
        <v-card color="#b8b4e4" flat rounded="0">
            <v-card-title style="font-weight: bold; color: white; text-shadow: 1px 1px black; margin-bottom: 10px" class="justify-center">IMUNIZANTES</v-card-title>
            <div>
            <v-list-item v-for="value in listadevacinas" :key="value">
                <v-list-item-content>
                    <v-card color="white" flat rounded="0">
                        <p class="paragrafo">{{value}}</p>
                    </v-card>
                </v-list-item-content>
            </v-list-item>
            </div>
        </v-card>
    </v-card>
</div>
</template>

<script>
import axios from "axios"
export default {
    data () {
        return {
            nome:'',
            cpf:'',
            idade:'',
            sexo:'',        
            listadevacinas:[],
        }
    },
    created: function () {
                axios.get("http://localhost:5000/userinformation")
                .then(response => {
                    var stringzona = response.data.split(",");
                    this.nome = stringzona[0]
                    this.cpf = stringzona[1]
                    this.idade = stringzona[2]
                    this.sexo = stringzona[3]
                    for (var i=5; i<stringzona.length; i++){
                        this.listadevacinas.push(stringzona[i].split("/")[0])
                    }
                    console.log(this.listadevacinas)
                    
                })
                .catch(error => console.log(error))
      
        }
};

</script>

<style lang="scss">

    .title{
        color:white; 
        font-weight: bold; 
        text-shadow: 1px 1px black; 
        margin-top: 50px; 
        text-align: left;
    }

    .paragrafo{
        text-align: left; 
        margin-bottom: 0; 
        margin-top:15px; 
        margin-left: 10px; 
        font-weight: bold;
        font-size: 20px; 
        color: #b8b4e4;
        text-shadow: 1px 1px grey;
    }

</style>
