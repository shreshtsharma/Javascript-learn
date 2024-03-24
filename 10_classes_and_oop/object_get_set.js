const User={
    mail:"h@hc.com",
    _password:"abc",

    get email(){
        return this.mail.toUpperCase()
    },

    // mere liye email ek property h koi  method ni h isliye main usse acces karunga mujhe koi mtlb ni aap usse kaise store kar rahe ho _email ya mail ya xyz mein jaise array mein hum .length property lete h 
    set email(value){
        this.mail=value
}
}

const tea=Object.create(User)
console.log(tea.email);