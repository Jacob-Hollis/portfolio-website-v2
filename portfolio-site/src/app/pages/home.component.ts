import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <p class="lead">Hi, my name is</p>
        <h1 class="display-3 text-responsive">Jacob Hollis 👋</h1>
        <div class="display-4 typing-container">
          <p>
            I'm a <br class="mobile-line-break" /><span class="typed-text">{{ typed() }}</span
            ><span class="cursor" [class.typing]="typing()">&nbsp;</span><br class="mobile-line-break" />
            Software Engineer
          </p>
        </div>
        <div class="bio-div">
          <p class="bio">
            As someone who is always looking to solve a problem, my mission is building practical software that
            transforms and improves lives.
          </p>
        </div>
        <div class="row">
          <div class="home-buttons col-md-4 col-sm-6">
            <a routerLink="/about" class="text-decoration-none">
              <button class="btn btn-iconed btn-lg btn-rounded btn-outline-warning btn-block" role="button">
                <span class="spn">About</span> <i class="fa fa-arrow-right"></i>
              </button>
            </a>
          </div>
          <div class="home-buttons col-md-4 hidden-xs hidden-sm">
            <a routerLink="/skills" class="text-decoration-none">
              <button class="btn btn-iconed btn-lg btn-rounded btn-outline-warning btn-block" role="button">
                <span class="spn">Skills</span> <i class="fa fa-arrow-right"></i>
              </button>
            </a>
          </div>
          <div class="home-buttons col-md-4 col-sm-6">
            <a routerLink="/projects" class="text-decoration-none">
              <button class="btn btn-iconed btn-lg btn-rounded btn-outline-warning btn-block" role="button">
                <span class="spn">Projects</span> <i class="fa fa-arrow-right"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit, OnDestroy {
  // Typing animation, ported from the old typing_animation.js with the same timings.
  private readonly words = ['Full-Stack', 'Back-End', 'Front-End'];
  private readonly typingDelay = 200;
  private readonly erasingDelay = 100;
  private readonly newTextDelay = 500; // pause between typing and erasing

  readonly typed = signal('');
  readonly typing = signal(false);

  private wordIndex = 0;
  private charIndex = 0;
  private timer: ReturnType<typeof setTimeout> | undefined;

  ngOnInit(): void {
    this.schedule(() => this.type(), this.newTextDelay);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private schedule(fn: () => void, delay: number): void {
    this.timer = setTimeout(fn, delay);
  }

  private type(): void {
    const word = this.words[this.wordIndex];
    if (this.charIndex < word.length) {
      this.typing.set(true);
      this.typed.set(word.substring(0, this.charIndex + 1));
      this.charIndex++;
      this.schedule(() => this.type(), this.typingDelay);
    } else {
      this.typing.set(false);
      this.schedule(() => this.erase(), this.newTextDelay);
    }
  }

  private erase(): void {
    if (this.charIndex > 0) {
      this.typing.set(true);
      this.typed.set(this.words[this.wordIndex].substring(0, this.charIndex - 1));
      this.charIndex--;
      this.schedule(() => this.erase(), this.erasingDelay);
    } else {
      this.typing.set(false);
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      this.schedule(() => this.type(), this.typingDelay + 500);
    }
  }
}
