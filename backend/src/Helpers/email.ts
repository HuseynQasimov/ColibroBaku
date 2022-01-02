import nodemailer from "nodemailer"

export async function sendEmail (receiver: string, content: string) {
  const transporter = nodemailer.createTransport({
    pool: true,
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "greatcharlie717@gmail.com",
      pass: "wflcdxtttuzdznjn"
    }
  })

  const info = await transporter.sendMail({
    from: "greatcharlie717@gmail.com",
    to: receiver,
    subject: "Hello ✔", // Subject line
    html: content // html body
  })

  console.log("Message sent: %s", info.messageId)
}
