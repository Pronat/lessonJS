const obj1 = {
    name: '',
    say(message) {
        alert(message + ', ' + this.name)
    }
}

obj1.name = 'Alex'
obj1.say("Hello")
