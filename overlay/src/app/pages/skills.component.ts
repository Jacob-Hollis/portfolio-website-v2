import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="display-4 text-center">Skills</h1>
          </div>
        </div>
        <div style="padding-top: 2em;">
          <p class="bio">
            Throughout my career I've used a wide variety of languages, frameworks, technologies, and tools. Right
            now, I primarily use <span>.NET</span>, <span>C#</span>, and <span>Python</span> in my workplace. In my
            free time, I've been tinkering with other frameworks such as <span>Django</span> and
            <span>React</span>.
          </p>
        </div>
        <div style="padding-top: 2em" class="row">
          <div class="col">
            <p class="recent-skills-header">Here are a few technologies I’ve been working with recently:</p>
            <div class="row justify-content-start" style="padding-left: 5em; padding-top: 1em; max-width: 50%">
              @for (skill of recentSkills; track skill) {
                <div class="col-6">
                  <p class="skills-list" style="color: #71D6C8">
                    <span class="fa-li"><i class="fa fa-chevron-circle-right"></i></span>{{ skill }}
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
        <div class="row" style="padding-top: 2em">
          <div class="col">
            <p class="bio">Want to see my skills in action? Check out my projects:</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-left col-lf-1">
              <a routerLink="/projects">
                <button class="btn btn-iconed btn-lg btn-rounded btn-outline-warning" role="button">
                  <span class="spn">Projects</span> <i class="fa fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div style="padding-top: 1em; padding-left: 1em" class="d-flex align-content-center flex-wrap">
          @for (icon of icons; track icon) {
            <div class="skills-col">
              <i [class]="icon"></i>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class SkillsComponent {
  readonly recentSkills = ['C#', 'Python', 'Django', 'Java'];

  readonly icons = [
    'devicon-csharp-plain-wordmark colored skills-icon',
    'devicon-python-plain-wordmark colored skills-icon',
    'devicon-java-plain-wordmark colored skills-icon',
    'devicon-dot-net-plain-wordmark colored skills-icon',
    'devicon-microsoftsqlserver-plain-wordmark colored skills-icon',
    'devicon-azure-plain-wordmark colored skills-icon',
    'devicon-amazonwebservices-plain-wordmark colored skills-icon',
    'devicon-django-plain-wordmark colored skills-icon',
    'devicon-react-plain-wordmark colored skills-icon',
    'devicon-docker-plain-wordmark colored skills-icon',
  ];
}
