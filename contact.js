function emailSend(){

    Email.send({
        Host : "s1.maildns.net",
        Username : "ajeetadsvv@gmail.coma",
        Password : "B2926BD20B87F04238DA6D656B268D632B49",
        To : '',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}