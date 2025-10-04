// Configuración global para los tests

// Mock de localStorage
const localStorageMock = {
    store: {},
    getItem(key) {
        return this.store[key] || null;
    },
    setItem(key, value) {
        this.store[key] = String(value);
    },
    removeItem(key) {
        delete this.store[key];
    },
    clear() {
        this.store = {};
    }
};

global.localStorage = localStorageMock;

// Suprimir warnings en tests solo cuando sea necesario en tests individuales
// Para suprimir advertencias o errores en tests específicos, usa jest.spyOn en los archivos de test, por ejemplo:
// jest.spyOn(console, 'warn').mockImplementation(() => {});
// jest.spyOn(console, 'error').mockImplementation(() => {});