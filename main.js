window.addEventListener("DOMContentLoaded", (event) => {
    const btn = document.getElementById('btn');
    if (btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const body = 'name: '+name + '<br/> email: ' + email + '<br/> subject: ' + subject + '<br/> message: ' + message;

                Email.send({
                    SecureToken : "acec99a9-3ae9-4d76-a75f-97a1501a1896",
                    To : 'contact@niouf.net',
                    From : "simon.miotto07@gmail.com",
                    Subject : "contact message",
                    Body : body,
                }).then(
                message => alert(message)
                );

            
        })
    }
})