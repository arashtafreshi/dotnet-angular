using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

public class EmailService{


    public void SendEmail(){
        SmtpClient client = new SmtpClient("smtp.ionos.com");
        client.UseDefaultCredentials = false;
        client.Port = 587;
        //client.Credentials = new NetworkCredential("a.tafreshi@jeeveh.com", "1JeeveheBkhod");
        client.EnableSsl =true;
        
        MailMessage mailMessage = new MailMessage();
        mailMessage.From = new MailAddress("a.tafreshi@jeeveh.com");
        mailMessage.To.Add("arash.nasirtafreshi@gmail.com");
        mailMessage.Body = "body";
        mailMessage.Subject = "subject";
        client.Credentials = new NetworkCredential("a.tafreshi@jeeveh.com", "1JeeveheBkhod");
        try{
            client.Send(mailMessage);
        }catch(Exception ex){
            var t = 34;
        }
        
    }


    // end of class
}