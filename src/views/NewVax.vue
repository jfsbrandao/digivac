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
    <v-card color="#525b7c" flat rounded="xl" class="card">
        <v-card-title class="justify-center">
            <p>NOVO IMUNIZANTE</p>
        </v-card-title>
        <div>
            <p id="titulozinho">IMUNIZANTE:</p>

                <v-select
                    :items="vacinas"
                    label="selecione a vacina"
                    background-color= "#b8b4e4"
                    color= #b8b4e4
                    dark
                    solo
                    style="margin-left: 20px; margin-right: 20px"
                    v-model="vacina.vacina"
                    >
                </v-select>

            <p id="titulozinho">LOTE:</p>

                <v-text-field
                label="INSIRA O LOTE DA VACINA"
                background-color="#b8b4e4"
                solo
                dark
                style="margin-left: 20px; margin-right: 20px"
                v-model="vacina.lote">
                </v-text-field>

            <v-btn
            depressed
            rounded
            color="#b8b4e4"
            dark
            large
            v-on:click="setVacina">
            AVANÇAR</v-btn>

        <div><h4 class="errorMessage">{{message}}</h4></div>




        </div>
    </v-card>
    </div>
</template>



<script>
import axios from "axios"
export default{
    data () {
        return{
            message: '',
            vacinas: ["Sars Covid-19", "Hepatite b", "H1-N1", "BCG", "Febre Amarela", "Tríplice Viral"],
            vacina: {
                vacina:'',
                lote:'',
                }
        }
    },
    methods: {
        setVacina(){
            axios.put("http://localhost:5000/vacinas_do_usuario_logado", this.vacina)
            .then(response => {
                if(response.data == "False"){
                    this.message = "Vacina já cadastrada"
                }
                else if(response.data == "False2"){
                    this.message = "Erro, verifique as credenciais"
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

<style lang="scss">
    p{
        color: #FFFFFF;
        font-family: 'Lato', Arial, Helvetica, sans-serif;
        font-weight: bold;
    }

    .card {
            margin-top: 70px;
            width: 350px;
            height: 450px;
            background-color: #525b7c;
        }

    #titulozinho{
        text-align: left;
        margin-left: 30px;
        font-size: 20px;
    }

    #vacina{
        color: #FFFFFF;
        text-align: left;
    }
    
    .errorMessage{
        color: white;
    }
</style>
