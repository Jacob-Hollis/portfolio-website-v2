import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

/** Navbar + footer wrapper (was base.html in the Django site). */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="d-flex flex-column min-vh-100">
      <nav class="navbar navbar-dark navbar-expand-md">
        <a routerLink="/" class="navbar-brand" (click)="menuOpen.set(false)">
          <img src="img/logo.png" width="40" height="40" alt="JH Logo" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          [attr.aria-expanded]="menuOpen()"
          aria-label="Toggle navigation"
          (click)="menuOpen.set(!menuOpen())"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" [class.show]="menuOpen()" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            @for (link of links; track link.path) {
              <li
                class="nav-item"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{ exact: true }"
                ariaCurrentWhenActive="page"
              >
                <a class="nav-link" [routerLink]="link.path" (click)="menuOpen.set(false)">{{ link.label }}</a>
              </li>
            }
          </ul>
        </div>
      </nav>

      <main role="main" class="container">
        <router-outlet />
      </main>

      <footer class="mt-auto">
        <div class="container text-center" style="margin-bottom: 1em">
          <span class="text-muted" style="color: #7e8ba5; font-size: 0.8em;">Designed &amp; Built by Jacob Hollis</span>
          <br />
          <span class="text-muted" style="color: #7e8ba5; font-size: 0.8em;">{{ year }}</span>
        </div>
      </footer>
    </div>
  `,
})
export class ShellComponent {
  readonly menuOpen = signal(false);
  readonly year = new Date().getFullYear();

  readonly links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];
}
