import nodemailer from 'nodemailer';

export const mailContact = async(req , res)=>{

    const {name,email,message} = req.body;
    console.log("Received request body:", req.body);
    console.log("Name:", name, "Email:", email, "Message:", message);

    if(!name || !email || !message || !name.trim() || !email.trim() || !message.trim()){
        return res.status(400).json({error: 'all fields are required'})
    }
    if(name.trim().length <3){
        return res.status(400).json({error:'name must be 3 characters long'})
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!emailRegex.test(email)){
        return res.status(400).json({error:"invalid email format"})
    }
    if(message.trim().length <10){
        return res.status(400).json({error:'message must be minimum 10 characters long'})
    }


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    })

    const mailOptions={
        from: {
            name: "shamik ",
            address: process.env.EMAIL
        },
        to: process.env.EMAIL,
        subject: "Sent from Portfolio website",
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`,
        replyTo: req.body.email
    }

    const confirmationMail = {
        from:{
            name: "shamik goswami",
            address: process.env.EMAIL
        },
        to: req.body.email,
        subject: "message recieved",
        text: `hi ${req.body.name}, your message was recieved, we will get back to you`
    }

    try{
        await Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(confirmationMail)
        ])
        res.status(200).json({success: true, message: 'message sent successfully'})
    } catch(error){
        console.error("Error sending mail:", error.message);
        res.status(500).json({ error: "Failed to send message", details: error.message });
    }




}