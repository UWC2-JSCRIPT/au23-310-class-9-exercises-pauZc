const createMessageHolder = () => {
    const messages = []
    return {
        addMessage: (message) => {
            messages.push(message)
        },
        getMessage: (index) => {
            if (index >= 0 && index < messages.length) {
              return messages[index];
            } else {
              return "No message at that Index";
            }
        }
    }
}

const createGreeting = (greeting) => {
    return (name) => {
        return `${greeting}, ${name}`
    }
}
const greet = createGreeting("Yo What's up")
const formalGreeting = createGreeting('Good day fine Person!')
console.log(greet('Dennis'))