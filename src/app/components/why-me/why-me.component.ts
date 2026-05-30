import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-why-me',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="why-me">
      <div class="container">
        <div class="section-label">{{ c().label }}</div>
        <h2 class="section-title">{{ c().title }}</h2>
        <div class="section-divider"></div>
        <p class="intro">{{ c().intro }}</p>
        <div class="cards-grid">
          <div class="card" *ngFor="let card of c().cards">
            <div class="card-icon">{{ card.icon }}</div>
            <div class="card-title">{{ card.title }}</div>
            <div class="card-text">{{ card.text }}</div>
          </div>
        </div>
        <div class="highlight-bar">
          <div class="stat" *ngFor="let s of c().stats">
            <div class="stat-number">{{ s.value }}</div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
        </div>
        <div class="cta-line">{{ c().cta }}</div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--navy); }
    .section-label { color: rgba(212,175,55,0.75); }
    .section-title { color: var(--white); }
    .section-divider { background: var(--gold); }
    .intro { color: rgba(255,255,255,0.65); font-size: 1rem; line-height: 1.8; max-width: 680px; margin-bottom: 2.5rem; font-style: italic; }
    .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-bottom: 3rem; }
    .card { background: rgba(255,255,255,0.05); border: 0.5px solid rgba(255,255,255,0.12); border-radius: 4px; padding: 1.4rem 1.3rem; transition: background var(--transition), border-color var(--transition); }
    .card:hover { background: rgba(255,255,255,0.08); border-color: rgba(212,175,55,0.4); }
    .card-icon { font-size: 1.6rem; margin-bottom: 0.75rem; }
    .card-title { font-family: var(--font-serif); font-size: 1rem; color: var(--gold-light); font-weight: 600; margin-bottom: 0.5rem; }
    .card-text { font-size: 0.88rem; color: rgba(255,255,255,0.62); line-height: 1.7; }
    .highlight-bar { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 1px; background: rgba(255,255,255,0.1); border: 0.5px solid rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; margin-bottom: 2.5rem; }
    .stat { padding: 1.5rem 1.25rem; background: rgba(255,255,255,0.04); text-align: center; }
    .stat-number { font-family: var(--font-serif); font-size: 1.8rem; color: var(--gold-light); font-weight: 700; line-height: 1; margin-bottom: 0.35rem; }
    .stat-label { font-size: 0.75rem; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; }
    .cta-line { text-align: center; color: rgba(255,255,255,0.55); font-size: 0.95rem; font-style: italic; padding-top: 0.5rem; border-top: 0.5px solid rgba(255,255,255,0.1); }
    @media (max-width: 680px) { .cards-grid { grid-template-columns: 1fr; } }
  `]
})
export class WhyMeComponent {
  lang = inject(LanguageService);

  content = {
    fr: {
      label: 'Valeur ajoutée', title: 'Pourquoi me choisir ?',
      intro: 'Je ne suis pas seulement un développeur — je suis quelqu\'un qui comprend les problèmes en profondeur, qui enseigne ce qu\'il maîtrise, et qui livre des solutions qui fonctionnent vraiment.',
      cards: [
        { icon: '🎓', title: 'Chercheur & praticien', text: 'Thèse M.Sc. avec 95,6 % de précision sur un problème réel. Je transforme des problématiques complexes en solutions fonctionnelles.' },
        { icon: '🏗️', title: 'Stack full-stack éprouvée', text: 'Java / Spring Boot en backend, Angular en frontend, Android pour le mobile. Je couvre l\'ensemble de la chaîne applicative.' },
        { icon: '🎤', title: 'Communicateur & pédagogue', text: 'Chargé de cours sur 5 matières et plus à l\'UQTR. Je sais expliquer, documenter et transmettre — compétence rare chez un développeur.' },
        { icon: '⚡', title: 'Autonome et livrable', text: 'Habitué à travailler seul sur des projets complexes de bout en bout, de la conception à la mise en production.' },
        { icon: '🤝', title: 'Profil interculturel', text: 'Expérience professionnelle au Sénégal (UCAD) et au Québec (UQTR). Multilingue (Français, Anglais, Wolof).' },
        { icon: '📈', title: 'Engagement & leadership', text: 'VP pédagogique de l\'AMI, organisateur de 5 conférences techniques. Je m\'implique au-delà du code.' }
      ],
      stats: [
        { value: '95,6 %', label: 'Précision extraction ML' },
        { value: '5+', label: 'Cours enseignés à l\'UQTR' },
        { value: '4+', label: 'Ans d\'expérience PHP/Web' },
        { value: '5', label: 'Conférences organisées' },
        { value: '3', label: 'Langues maîtrisées' }
      ],
      cta: 'Prêt à contribuer dès le premier jour — avec rigueur, autonomie et passion pour bien faire.'
    },
    en: {
      label: 'Added Value', title: 'Why choose me?',
      intro: 'I\'m not just a developer — I\'m someone who understands problems deeply, who teaches what they master, and who delivers solutions that actually work.',
      cards: [
        { icon: '🎓', title: 'Researcher & practitioner', text: 'M.Sc. thesis with 95.6% accuracy on a real-world problem. I turn complex challenges into working solutions.' },
        { icon: '🏗️', title: 'Proven full-stack toolkit', text: 'Java / Spring Boot backend, Angular frontend, Android mobile. I cover the entire application stack.' },
        { icon: '🎤', title: 'Communicator & educator', text: 'Lecturer for 5 subjects at UQTR. I know how to explain, document, and teach — a rare skill for a developer.' },
        { icon: '⚡', title: 'Autonomous & deliverable', text: 'Experienced working solo on complex projects end-to-end, from design to production deployment.' },
        { icon: '🤝', title: 'Multicultural profile', text: 'Professional experience in Senegal (UCAD) and Quebec (UQTR). Multilingual (French, English, Wolof).' },
        { icon: '📈', title: 'Commitment & leadership', text: 'VP Academic Affairs at AMI, organized 5 technical conferences. I engage beyond the code.' }
      ],
      stats: [
        { value: '95.6%', label: 'ML extraction accuracy' },
        { value: '5', label: 'Courses taught at UQTR' },
        { value: '6+', label: 'Years PHP/Web experience' },
        { value: '5', label: 'Conferences organized' },
        { value: '3', label: 'Languages spoken' }
      ],
      cta: 'Ready to contribute from day one — with rigor, autonomy, and a passion for doing things right.'
    }
  };

  c() { return this.lang.isFr() ? this.content.fr : this.content.en; }
}
