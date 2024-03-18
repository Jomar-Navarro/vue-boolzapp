console.log('vue-boolzapp');

const { DateTime } = luxon;
const { createApp } = Vue;


createApp({

data(){
    return {
    contacts: [
        {
            name: 'Michele',
            avatar: 'assets/img/avatar_1.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: 'assets/img/avatar_2.jpg',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: 'assets/img/avatar_3.jpg',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: 'assets/img/avatar_4.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: 'assets/img/avatar_5.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: 'assets/img/avatar_6.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: 'assets/img/avatar_7.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: 'assets/img/avatar_8.jpg',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
        ],

      // Contatore
        counter: 0,

      // Reset input chat
        newMessage: '',
        chatToSearch: '',
        searchChat: false,  

        activeContact: null,
        dataOra: '',
        onlyOra: '',
    }
    
    
    },

    computed: {
    filterChat(){
    this.contacts.forEach(contact => {
        if (contact.name.toLowerCase().includes(this.chatToSearch.toLowerCase())) {
            contact.visible = true
        }else{
            contact.visible = false
        }

    });
    return this.contacts;
},

    visibleContact(){
        return contacts.filter(contact => contact.visible)
    }
    },

    created(){
        this.activeContact = this.contacts[0];
        console.log(this.activeContact);
    },

    methods: {
    // Questa funzione quando clicko all'interno delle chat degli utenti mi prende il suo rispettivo indice. Che di conseguenza mi porta alla sua rispettiva conversazione
    selectChat(index){
    this.activeContact = this.contacts[index];
    },

    // Questo funzione mi aggiunge il messaggio in base a cosa scrivo nell'input
    addMessage(){
        if (this.newMessage !== '') {
        // Creo una costante dandogli il nome 'activeUser' per prendere l'oggetto dell'array in base al suo indice
        const activeUser = this.contacts[this.counter]
        // Riprendo la costante per pushare nell'array dell'oggetto messages un nuovo oggetto "data, message, status"
        activeUser.messages.push({
        date: '14/03/2024 00:00:00',
        message: this.newMessage,
        status: 'sent',
        });

        // Questo codice ha la stessa logica precedente ma con un timer. Sempre nell'array nell'oggetto "messages" pusho un nuovo oggetto ma con lo status 'received'
        setTimeout(() => {
        activeUser.messages.push({
            date: '14/03/2024 00:00:00',
            message: 'Ok!',
            status: 'received',
        })
        }, 1000);
        }

    // Mi resetta il testo che inserisco dentro l'input quando click il tasto invio
    this.newMessage = '';
    },
},

    mounted(){
        this.dataOra = DateTime.now().setLocale('it').toFormat('dd/MM/yyyy hh:mm:ss')

        this.onlyOra = DateTime.now().setLocale('it').toFormat('hh:mm:ss')
    }
    
}).mount('#app')