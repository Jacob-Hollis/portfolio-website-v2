import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row justify-content-center">
          <h1 class="display-4 text-center">Get In Touch</h1>
        </div>
        <div class="row justify-content-center">
          <p class="text-center" style="color: #7e8ba5; font-size: large; width: 30em; padding-top: 2em;">
            My inbox is always open to any questions, even if you just want to say hello! I’ll do my best to get back
            to you as soon as possible!
          </p>
        </div>
        <div class="text-center">
          <h1 class="display-4 text-center" style="padding-top: 0.5em; color: #71D6C8">
            <i class="fa-solid fa-chevron-down fa-bounce"></i>
          </h1>
        </div>
        <div class="d-flex justify-content-center flex-wrap">
          <div style="padding: 2em">
            <a href="mailto:jakebhollis@gmail.com" aria-label="Email Jacob">
              <button class="text-warning" style="border: none; background: none; font-size: 5em" role="button">
                <i class="fa-regular fa-envelope contact-button"></i>
              </button>
            </a>
          </div>
          <div style="padding: 2em">
            <a href="https://www.linkedin.com/in/jb-hollis/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <button class="text-warning" style="border: none; background: none; font-size: 5em" role="button">
                <i class="fa-brands fa-linkedin contact-button"></i>
              </button>
            </a>
          </div>
          <div style="padding: 2em">
            <a href="https://github.com/Jacob-Hollis" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <button class="text-warning" style="border: none; background: none; font-size: 5em" role="button">
                <i class="fa-brands fa-github contact-button"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ContactComponent {}
