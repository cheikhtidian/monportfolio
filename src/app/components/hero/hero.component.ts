import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero">
      <div class="container">
        <div class="hero-inner">
          <div class="avatar">ST</div>
          <div class="hero-text">
            <div class="eyebrow">{{ c().eyebrow }}</div>
            <h1 class="hero-name">Serigne Cheikh<br>Ahmet Tidiane Sy Thioune</h1>
            <p class="hero-subtitle">M.Sc. {{ c().subtitle }}</p>
            <p class="hero-bio">{{ c().bio }}</p>
            <div class="hero-badges">
              <span class="badge" *ngFor="let b of c().badges">{{ b }}</span>
            </div>
            <div class="hero-btns">
              <a (click)="scrollTo('projects')" class="btn-primary">{{ c().btnProjects }}</a>
              <a (click)="scrollTo('contact')" class="btn-outline">{{ c().btnContact }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--navy); padding: 6rem 0 5rem; }
    .hero-inner { display: flex; align-items: center; gap: 3.5rem; animation: fadeInUp 0.7s ease forwards; }
    .avatar {
      width: 148px; height: 148px; border-radius: 50%;
      background: var(--navy-mid); border: 3px solid var(--gold);
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-serif); font-size: 2.6rem; font-weight: 700; color: var(--gold-light);
      flex-shrink: 0;
    }
    .hero-text { flex: 1; }
    .eyebrow { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: var(--gold-light); margin-bottom: 0.85rem; }
    .hero-name { font-family: var(--font-serif); font-size: 2.7rem; font-weight: 700; color: var(--white); line-height: 1.12; margin-bottom: 0.6rem; }
    .hero-subtitle { font-size: 1rem; color: rgba(255,255,255,0.55); font-weight: 300; margin-bottom: 1.25rem; }
    .hero-bio { color: rgba(255,255,255,0.72); font-size: 0.97rem; line-height: 1.78; max-width: 500px; margin-bottom: 1.25rem; }
    .hero-badges { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.75rem; }
    .badge { font-size: 0.76rem; padding: 0.25rem 0.7rem; border: 0.5px solid rgba(212,175,55,0.45); color: var(--gold-light); border-radius: 2px; }
    .hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-primary { display: inline-block; padding: 0.7rem 1.6rem; background: var(--gold); color: var(--navy); font-weight: 600; font-size: 0.88rem; border-radius: 2px; cursor: pointer; transition: background var(--transition); }
    .btn-primary:hover { background: var(--gold-light); }
    .btn-outline { display: inline-block; padding: 0.68rem 1.6rem; border: 1.5px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.78); font-weight: 500; font-size: 0.88rem; border-radius: 2px; cursor: pointer; transition: border-color var(--transition), color var(--transition); }
    .btn-outline:hover { border-color: var(--gold-light); color: var(--gold-light); }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 680px) { .hero-inner { flex-direction: column; text-align: center; } .hero-bio { max-width: 100%; } .hero-badges, .hero-btns { justify-content: center; } .hero-name { font-size: 2rem; } }
  `]
})
export class HeroComponent {
  lang = inject(LanguageService);

  content = {
    fr: {
      eyebrow: 'Développeur Full-Stack & Chargé de cours · Trois-Rivières, QC',
      subtitle: 'Mathématiques Appliquées & Informatique — UQTR',
      bio: 'Développeur passionné par l\'IA et l\'innovation numérique, spécialisé en Java / Spring Boot, Android et Machine Learning embarqué. Enseignant à l\'UQTR, auteur d\'une thèse sur l\'automatisation de la documentation médicale par modèles ML.',
      badges: ['Java / Spring Boot', 'Angular', 'Android', 'Machine Learning', 'PHP (6 ans)'],
      btnProjects: 'Voir mes projets',
      btnContact: 'Me contacter'
    },
    en: {
      eyebrow: 'Full-Stack Developer & Lecturer · Trois-Rivières, QC',
      subtitle: 'Applied Mathematics & Computer Science — UQTR',
      bio: 'Developer passionate about AI and digital innovation, specializing in Java / Spring Boot, Android, and embedded Machine Learning. Lecturer at UQTR, author of a thesis on automating medical documentation using ML models.',
      badges: ['Java / Spring Boot', 'Angular', 'Android', 'Machine Learning', 'PHP (6 years)'],
      btnProjects: 'View my projects',
      btnContact: 'Contact me'
    }
  };

  c() { return this.lang.isFr() ? this.content.fr : this.content.en; }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 62, behavior: 'smooth' });
  }
}
