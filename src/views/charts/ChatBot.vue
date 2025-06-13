<template>
    <div class="chatbot-container">
        <div class="chat-header" @click="toggleChat">
            Paciente
        </div>
        <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <div v-show="isOpen" class="chat-body">
                <div class="messages">
                    <div v-for="(msg, index) in messages" :key="index"
                        :class="['message', msg.from === 'user' ? 'user' : 'bot']">
                        {{ msg.text }}
                    </div>
                </div>
                <div class="input-container">
                    <input v-model="input" @keyup.enter="sendMessage" type="text" placeholder="Escribí tu mensaje..." />
                    <button @click="sendMessage">Enviar</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: true,
            input: "",
            messages: [
                { text: "Hola 👋 ¿En qué puedo ayudarte?", from: "bot" }
            ],
            respuestasGenericas: [
                "Entiendo, gracias por contármelo.",
                "Interesante, ¿querés que te lo explique mejor?",
                "Estoy aquí para ayudarte con lo que necesites.",
                "Esto es solo una demostración 😄"
            ]
        };
    },
    methods: {
        toggleChat() {
            this.isOpen = !this.isOpen;
        },
        sendMessage() {
            if (this.input.trim()) {
                const msg = this.input;
                this.messages.push({ text: msg, from: "user" });
                this.input = "";

                // Simular respuesta del bot
                setTimeout(() => {
                    const respuesta = this.respuestasGenericas[
                        Math.floor(Math.random() * this.respuestasGenericas.length)
                    ];
                    this.messages.push({ text: respuesta, from: "bot" });
                }, 700);
            }
        },
        beforeEnter(el) {
            el.style.height = '0';
        },
        enter(el) {
            el.style.transition = 'height 0.3s ease';
            const height = el.scrollHeight;
            requestAnimationFrame(() => {
                el.style.height = height + 'px';
            });
            el.addEventListener('transitionend', () => {
                el.style.height = 'auto';
            }, { once: true });
        },
        leave(el) {
            el.style.height = el.scrollHeight + 'px';
            el.style.transition = 'height 0.3s ease';
            requestAnimationFrame(() => {
                el.style.height = '0';
            });
        }
    }
};
</script>

<style scoped>
.chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 320px;
    font-family: "Segoe UI", sans-serif;
    z-index: 9999;
}

.chat-header {
    background: #007bff;
    color: white;
    padding: 12px;
    font-weight: bold;
    border-radius: 12px 12px 0 0;
    cursor: pointer;
    text-align: center;
}

.chat-body {
    background: #f9f9f9;
    border: 1px solid #007bff;
    border-top: none;
    max-height: 400px;
    overflow-y: auto;
    border-radius: 0 0 12px 12px;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.messages {
    flex-grow: 1;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
}

.message {
    padding: 8px 12px;
    margin: 5px 0;
    border-radius: 20px;
    max-width: 80%;
    word-wrap: break-word;
}

.message.bot {
    background-color: #e0e0e0;
    align-self: flex-start;
}

.message.user {
    background-color: #007bff;
    color: white;
    align-self: flex-end;
}

.input-container {
    display: flex;
    gap: 5px;
}

input[type="text"] {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;
}

button {
    background-color: #007bff;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    color: white;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background-color: #0056b3;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
