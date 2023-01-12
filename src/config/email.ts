import nodemailer from 'nodemailer';
import { AppError } from '../errors/AppError';

type Email = {
  email: string;
  name: string;
  link?: string;
};

export function sendMail({ email, name, link }: Email) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAIL_USER,
      pass: process.env.NODEMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: 'dayonesuporte@gmail.com',
    to: email,
    subject: `Validar email para o Day One`,
    html: `<h2>
    Olá<span style="color:#787878"> ${name}</span><br/>Seja bem-vindo<br/>ao Day One</h2>
    <p>Obrigado por se registrar no projecto day one.
    Para completar o seu registo, precisamos que você confirme<br/> o seu endereço de e-mail clicando no link abaixo:
    <br/> 
    <h3>
    <a href=${link}>[Validar email]</a>
    </h3>
    <br/>
    Esse link é válido por 24 horas. Se você não conseguir clicar nele, copie e cole-o na barra de endereços do seu navegador.</p>
    <h3>Por que validar?</h3>
    <p>A validação de endereço de e-mail é uma técnica comum utilizada para garantir que um utilizador<br/>
    forneça um endereço de e-mail válido e que ele é de fato o proprietário desse endereço.</p>
  
    <p>
    A sua confirmação é essencial para garantir que possamos fornecer-lhe uma experiência segura e personalizada em nosso site.
    <br/>
    Se você tiver alguma dúvida ou precisar de ajuda, por favor, entre em contato conosco.
    <br/>
    <h4>
    Atenciosamente,<br/>
    DayOne, Silésio Leudério Cipriano.</h4>
    </p>
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('erro ao enviar email: ', error);
      throw new AppError('Error ao enviar email');
    } else {
      console.log('Email send' + info.response);
    }
  });
}
