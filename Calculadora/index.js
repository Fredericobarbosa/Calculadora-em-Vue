const{createApp} = Vue;

createApp({
    data(){
        return{
            display:"",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null
        }
    },
    methods:{
        LidarBotao(valor){
            switch(valor)
            {
                case '*':
                case '/':
                case '-':
                case '+':
                   this.LidarOperador(valor);
                    break;

                case '.':
                    this.LidarDecimal();
                    break;

                case 'C':
                    this.LidarLimpar();
                    break;

                case '=':
                    this.LidarIgual();
                    break;

                default:
                    this.LidarNumero(valor);
            }
        },
        LidarOperador(valor){
            if (this.operador !== null) {
                this.lidarIgual();
            }
            this.numeroAnterior = parseFloat(this.display);
            this.operador = valor;
            this.display = '';
            console.log("O botão digitado foi: ",valor);
        },
        LidarDecimal(){
            if (!this.display.includes('.')) {
                this.display += '.';
            }
            console.log("Entrou no decimal");
            
        },
        LidarLimpar(){
            this.display='';
            this.numeroAtual=null;
            this.numeroAnterior=null;
            this.operador = null;
        },
        LidarIgual(){
            if (this.operador === null) return;

                this.numeroAtual = parseFloat(this.display);
                let resultado = 0;
                switch (this.operador) {
                    case '+':
                    resultado = this.numeroAnterior + this.numeroAtual;
                    break;
                    case '-':
                    resultado = this.numeroAnterior - this.numeroAtual;
                    break;
                    case '*':
                    resultado = this.numeroAnterior * this.numeroAtual;
                    break;
                    case '/':
                    resultado = this.numeroAnterior / this.numeroAtual;
                    break;
                }
          this.display = resultado.toString();
          this.operador = null;
            console.log("Entrou no Igual");
            
        },
        LidarNumero(valor){
            if (this.operador !== null && this.atual === null) {
                this.display = valor;
                this.numeroAtual = parseFloat(valor);
            } else {
                this.display += valor;
            }
            if (this.operador !== null) {
                this.numeroAtual = parseFloat(this.display); 
            } 
            console.log("O botão digitado foi: ",valor);
            
        }
    }
}).mount("#app");