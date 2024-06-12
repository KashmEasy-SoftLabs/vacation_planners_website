const nodemailer = require("nodemailer");

export async function sendMail(subject, toEmail, data) {
    const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        secure: true,
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'
        },
        requireTLS: true,
        port: 465,
        debug: true,
        auth: {
            user: `${process.env.NODEMAILER_EMAIL}`,
            pass: `${process.env.NODEMAILER_PW}`,
        },
    });

    const mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        html: data,
    };
    // Wrap transporter.sendMail in promise
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error);
            } else {
                resolve(true);
            }
        });
    });
}