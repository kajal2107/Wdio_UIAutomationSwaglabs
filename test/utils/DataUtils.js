module.exports = {
    getRandomString : function() {
        let randomNumber = Math.floor(Math.random() * 100 + 1)
        return `string${new Date().getTime().toString()}${randomNumber}`
    },

    getRandomId : function() {
        let randomNumber = Math.floor(Math.random() * 100 + 1)
        return `ID_${new Date().getTime().toString()}${randomNumber}`
    },

    getRandomPhone : function(){
       return `${Math.random().toString().slice(2,12)}`
    },

    getRandomEmail : function(){
        return `${new Date().getTime().toString()}${'@email.com'}`
     }
 
}

