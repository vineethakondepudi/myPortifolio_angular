import { Component, OnInit } from '@angular/core';

export interface Project {
  title: string;
  role: string;
  description: string;
  responsibilities: string[];
  environment: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})


export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Coats-React Native Mobile Application',
      role: 'React Native Developer (React Native integrate with Azure)',
      description: 'This application integrates seamlessly with Microsoft Azure to securely access and manage documents from SharePoint using the Microsoft Graph API. It ensures robust security through Azure-based authentication and authorization mechanisms. Users can like, share, download, and preview various file extensions directly within the application. Additionally, the app provides seamless access to user profile details, enhancing overall user experience and productivity.',
      responsibilities: [
        'Developed UI components using React Native to provide a seamless user interface for accessing and managing documents from SharePoint.',
        'Implemented and maintained comprehensive test cases using the Jest framework to ensure the reliability and functionality of the application\'s features.',
        'Integrated Microsoft Graph API into the React Native application to fetch and manipulate documents from SharePoint securely.',
        'Designed and implemented modular UI components in React Native, ensuring scalability and reusability across different parts of the application.',
        'Developed responsive user interfaces to optimize user experience and ensure compatibility across various devices, enhancing accessibility to SharePoint documents.',
        'Collaborated closely with business users and operations teams to gather requirements, understand business needs, and address production queries related to document management and accessibility.'
      ],
      environment: ['React Native', 'Azure', 'Microsoft Graph', 'Jest', 'Git']
    },
    {
      title: 'Weight Sharing Application',
      role: 'Node JS Developer (React JS with Node JS)',
      description: 'The main objective of this application is to facilitate weight sharing at airports. If a passenger\'s luggage exceeds the weight limit, they can share the excess weight with another passenger who has underweight luggage. This system allows for efficient weight distribution and provides benefits to both parties involved. By optimizing the airport experience, the application aims to reduce stress related to excess luggage fees and ensure smoother check-in processes for passengers. Additionally, by promoting weight sharing, the application supports sustainability efforts by potentially lowering carbon emissions and environmental impact associated with air travel.',
      responsibilities: [
        'Developed APIs using Node JS technology as per client requirements, ensuring efficient backend functionality and performance.',
        'Integrated REST APIs into the Angular application to facilitate seamless data exchange and functionality.',
        'Responsible for writing comprehensive unit test cases for APIs using testing frameworks such as Cypress, and Webdriver IO, ensuring code quality and reliability.',
        'Participated in performance analysis, design, development, and testing phases to deliver robust and scalable solutions.',
        'Participated actively in requirements gathering and design development meetings to align technical solutions with business needs.'
      ],
      environment: ['Node JS', 'React JS', 'Prime React', 'MySQL', 'Cypress', 'Webdriver IO', 'Git']
    }
  ];

  currentProjectIndex: number = 0;
  detailsVisible: boolean = false; // New property

  constructor() { }

  ngOnInit(): void { }

  toggleDetails(): void {
    this.detailsVisible = !this.detailsVisible;
  }

  nextProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex + 1) % this.projects.length;
    this.detailsVisible = false; // Hide details when changing project
  }

  prevProject(): void {
    this.currentProjectIndex = (this.currentProjectIndex - 1 + this.projects.length) % this.projects.length;
    this.detailsVisible = false; // Hide details when changing project
  }

  getCurrentProject(): Project {
    return this.projects[this.currentProjectIndex];
  }
}
