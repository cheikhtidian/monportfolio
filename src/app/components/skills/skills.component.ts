import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills">
      <div class="container">
        <div class="section-label">{{ c().label }}</div>
        <h2 class="section-title">{{ c().title }}</h2>
        <div class="section-divider"></div>
        <div class="skills-grid">
          <div class="skill-group" *ngFor="let group of c().groups">
            <div class="group-title">{{ group.title }}</div>
            <div class="tags">
              <span class="tag" [class.highlight]="s.highlight" *ngFor="let s of group.skills">{{ s.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--cream); }
    .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1.25rem; }
    .skill-group { background: var(--white); border: 0.5px solid var(--border); border-radius: 4px; padding: 1.3rem; transition: box-shadow var(--transition); }
    .skill-group:hover { box-shadow: var(--shadow-sm); }
    .group-title { font-family: var(--font-serif); font-size: 0.95rem; color: var(--navy); font-weight: 600; margin-bottom: 0.85rem; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border-light); }
    .tags { display: flex; flex-wrap: wrap; gap: 0.45rem; }
    .tag { font-size: 0.78rem; padding: 0.25rem 0.65rem; background: var(--cream); border: 0.5px solid var(--border); border-radius: 2px; color: var(--text-muted); }
    .tag.highlight { background: var(--gold-pale); border-color: var(--gold); color: #7a640a; font-weight: 500; }
  `]
})
export class SkillsComponent {
  lang = inject(LanguageService);

  fr = {
    label: 'Savoir-faire', title: 'Compétences techniques',
    groups: [
      { title: 'Backend', skills: [{ name: 'Java', highlight: true }, { name: 'Spring Boot', highlight: true }, { name: 'PHP (6 ans)', highlight: true }, { name: 'Python', highlight: true }, { name: 'REST API' }, { name: 'Spring Security' }] },
      { title: 'Frontend & Mobile', skills: [{ name: 'Angular', highlight: true }, { name: 'Android (Java)', highlight: true }, { name: 'Flutter' }, { name: 'TypeScript' }, { name: 'HTML / CSS / JS' }] },
      { title: 'IA & Données', skills: [{ name: 'TensorFlow Lite', highlight: true }, { name: 'Whisper', highlight: true }, { name: 'DistilBERT', highlight: true }, { name: 'OpenCV' }, { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'Oracle DB' }] },
      { title: 'Outils & DevOps', skills: [{ name: 'Git' }, { name: 'Maven' }, { name: 'Liquibase' }, { name: 'Docker' }, { name: 'Linux' }, { name: 'LaTeX' }] },
      { title: 'Enseignement', skills: [{ name: 'Traitement d\'images' }, { name: 'POO Java' }, { name: 'VB.NET' }, { name: 'HTML / PHP / MySQL' }, { name: 'Env. de développement' }, { name: 'Affinity Designer' }] }
    ]
  };

  en = {
    label: 'Expertise', title: 'Technical Skills',
    groups: [
      { title: 'Backend', skills: [{ name: 'Java', highlight: true }, { name: 'Spring Boot', highlight: true }, { name: 'PHP (6 years)', highlight: true }, { name: 'Python', highlight: true }, { name: 'REST API' }, { name: 'Spring Security' }] },
      { title: 'Frontend & Mobile', skills: [{ name: 'Angular', highlight: true }, { name: 'Android (Java)', highlight: true }, { name: 'Flutter' }, { name: 'TypeScript' }, { name: 'HTML / CSS / JS' }] },
      { title: 'AI & Data', skills: [{ name: 'TensorFlow Lite', highlight: true }, { name: 'Whisper', highlight: true }, { name: 'DistilBERT', highlight: true }, { name: 'OpenCV' }, { name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'Oracle DB' }] },
      { title: 'Tools & DevOps', skills: [{ name: 'Git' }, { name: 'Maven' }, { name: 'Liquibase' }, { name: 'Docker' }, { name: 'Linux' }, { name: 'LaTeX' }] },
      { title: 'Teaching', skills: [{ name: 'Image Processing' }, { name: 'OOP Java' }, { name: 'VB.NET' }, { name: 'HTML / PHP / MySQL' }, { name: 'Dev Environment' }, { name: 'Affinity Designer' }] }
    ]
  };

  c() { return this.lang.isFr() ? this.fr : this.en; }
}
