import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  // imageSourceOne = "assets\passionOne.jpg";
  // imageSourceTwo = '/src/assets/passionTwo.jpg';

  passionHeaderOne = `My passion involves creating and maintaining websites that are functional, aesthetically pleasing, and user-friendly.`;
  passionHeaderTwo = `My passion involves using their technical and creative skills to build and maintain websites that are functional, visually appealing, and easy to use.`;
  passionOne = 'passion image one';
  passionTwo = 'passion image Two';
  passionTextOne = `They have a strong desire to continuously improve their skills and 
                    keep up with the latest trends and technologies in the industry. They enjoy solving complex problems and finding innovative solutions to challenges that arise during the development process. They also 
                    have a keen eye for detail and take pride in delivering high-quality work that meets the needs of their clients or users. Overall, a web developer's passion is fueled by their love for technology, design, 
                    and the satisfaction of bringing ideas to life on the web.`
  passionTextTwo = `They enjoy the process of problem-solving 
                    and finding solutions to challenges that arise during the development process. Their passion is driven by a desire to continually learn and stay up-to-date with the latest web technologies and trends. They take 
                    pride in delivering high-quality work that meets the needs of their clients or users, and they derive satisfaction from seeing their ideas come to life on the web. Overall, a web developer's passion is a combination 
                    of technical expertise, creativity, and a desire to create something useful and impactful for others.`
        
  cards = [
    {
      title:`HTML & CSS  🌐🎨`,
      description:`I have a solid understanding of HTML and CSS, which are the building blocks of web development. 
                  I use HTML to structure the content of a website, and CSS to style and format that content`,
      buttonName : 'Learn More',
      url :  'https://bootcamp.berkeley.edu/resources/coding/learn-web-development/what-does-a-front-end-web-developer-do/'           
    },
    {
      title:'JavaScript 📱',
      description:` I am proficient in JavaScript, a programming language that allows me to create interactive elements 
                    and dynamic user experiences. I use JavaScript to add animations, form validations, and other interactive features to 
                    a website.`,
      buttonName:'My Projects',
      url: '../project-and-blog'
    },
    {
      title:'Frameworks and Libraries 📚',
      description: `I work with a variety of frameworks and libraries to simplify their development process. 
                    Some of the frameworks and libraries i work with include Bootstrap and Angular.Js`,
    },
    {
      title:`Responsive Design 💫`,
      description:` I have a deep understanding of responsive design principles, which allows websites i create
                    look great on any device. `
    },
    {
      title:`User Experience 😁`,
      description:`My focus is on creating a positive user experience for visitors to a website or application. 
                  I ensure that the site is easy to navigate and that the user interface is intuitive and easy to use. I'm also Certified😉.`,
      buttonName:'Certificate',
      url:'https://www.coursera.org/account/accomplishments/certificate/DXL7R2MTMLBB',
    },
    {
      title:`Collaboration 🤝`,
      description:`I work closely with designers, back-end developers, and other members of a development team 
                    to ensure that the website or application meets the client's needs and expectations. Send an email for collaborations on the button below`,
      buttonName: 'Contact',
      url: '../contact'  
      },
    
  ]                  
          goToSite(url:string){
            window.location.href = url
          }
               
                  }
