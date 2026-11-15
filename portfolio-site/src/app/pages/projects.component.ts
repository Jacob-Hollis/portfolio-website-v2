import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '../data/projects';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="display-4 text-center">Projects</h1>
          </div>
        </div>
        <div class="row" style="padding-top: 2em">
          <div class="col">
            <p class="bio">If you have questions about any of my projects, feel free to contact me:</p>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-left col-lf-1">
              <a routerLink="/contact">
                <button class="btn btn-iconed btn-lg btn-rounded btn-outline-warning" role="button">
                  <span class="spn">Contact</span> <i class="fa fa-arrow-right"></i>
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="row" style="padding-top: 2em">
          @for (project of projects; track project.title) {
            <div class="col-md-4" style="padding-top: 2em">
              <div class="card mb-4 h-100" style="background-color: #112240;">
                <div class="card-header border-0" style="background-color: #112240;">
                  <div class="row" style="padding-top: 0.5em">
                    <div class="col">
                      <a [href]="project.link" target="_blank" rel="noopener noreferrer" aria-label="Open project">
                        <button style="color: #71D6C8; border: none; background: none; padding-left: 1em;" role="button">
                          <i class="fa fa-folder-open" style="font-size: 2em;"></i>
                        </button>
                      </a>
                    </div>
                    <div class="col-2">
                      <a [href]="project.link" target="_blank" rel="noopener noreferrer" aria-label="Open project link">
                        <button class="float-right project-link" style="color: #7e8ba5; border: none; background: none;" role="button">
                          <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 1.3em;"></i>
                        </button>
                      </a>
                    </div>
                    <div class="col-2">
                      <a [href]="project.githubLink" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                        <button class="float-right project-link" style="color: #7e8ba5; border: none; background: none;" role="button">
                          <i class="fa-brands fa-github project-github-button" style="font-size: 1.3em;"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <h5 class="card-title" style="color: white">{{ project.title }}</h5>
                  <p class="card-text" style="color: #7e8ba5">{{ project.description }}</p>
                  <div class="row justify-content-start">
                    @for (tech of project.technologies; track tech) {
                      <div class="col">
                        <p class="card-text" style="color: #71D6C8; font-size: 0.8em; padding-top: 1.5em">{{ tech }}</p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
}
