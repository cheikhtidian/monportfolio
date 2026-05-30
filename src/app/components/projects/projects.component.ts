import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects">
      <div class="container">
        <div class="section-label">{{ c().label }}</div>
        <h2 class="section-title">{{ c().title }}</h2>
        <div class="section-divider"></div>
        <div class="projects-list">
          <div class="project-card" *ngFor="let p of c().projects" [class.featured]="p.featured">
            <div class="project-accent"></div>
            <div class="project-body">
              <div class="project-meta">
                <span class="badge" [ngClass]="p.badgeClass || ''">{{ p.badge }}</span>
                <span class="year">{{ p.year }}</span>
              </div>
              <h3 class="project-name">{{ p.name }}</h3>
              <p class="project-desc">{{ p.description }}</p>
              <div class="techs">
                <span class="tech" *ngFor="let t of p.techs">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--white); }
    .projects-list { display: flex; flex-direction: column; gap: 1.4rem; }
    .project-card { display: grid; grid-template-columns: 4px 1fr; background: var(--cream); border: 0.5px solid var(--border); border-radius: 4px; overflow: hidden; transition: box-shadow var(--transition), transform var(--transition); }
    .project-card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .project-accent { background: var(--navy-mid); }
    .project-card.featured .project-accent { background: var(--gold); }
    .project-body { padding: 1.4rem 1.6rem; }
    .project-meta { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
    .badge { font-size: 0.68rem; font-weight: 600; padding: 0.2rem 0.65rem; background: rgba(13,27,42,0.07); color: var(--navy); border-radius: 2px; letter-spacing: 0.07em; text-transform: uppercase; }
    .badge.thesis { background: var(--gold-pale); color: #7a640a; }
    .badge.academic { background: rgba(29,158,117,0.1); color: #0f6e56; }
    .year { font-size: 0.8rem; color: var(--text-light); }
    .project-name { font-family: var(--font-serif); font-size: 1.15rem; color: var(--navy); margin-bottom: 0.45rem; font-weight: 600; }
    .project-desc { font-size: 0.91rem; color: var(--text-muted); margin-bottom: 0.9rem; line-height: 1.7; }
    .techs { display: flex; flex-wrap: wrap; gap: 0.4rem; }
    .tech { font-size: 0.75rem; padding: 0.18rem 0.55rem; background: var(--white); border: 0.5px solid var(--border); border-radius: 2px; color: var(--text-muted); }
  `]
})
export class ProjectsComponent {
  lang = inject(LanguageService);

  fr = {
    label: 'Réalisations', title: 'Projets notables',
    projects: [
      { badge: 'Thèse M.Sc.', badgeClass: 'thesis', year: '2024 – 2025', featured: true, name: 'ConsultationService — Documentation médicale automatisée', description: 'Application Android native embarquant Whisper + DistilBERT (fine-tuné sur 200 consultations synthétiques) pour transcrire et extraire 5 signes vitaux automatiquement. 95,6 % de précision, 6,4× plus rapide que le temps réel. Article en préparation (JMIR / IEEE JBHI).', techs: ['Android (Java)', 'TensorFlow Lite', 'Whisper', 'DistilBERT', 'Python', 'ML embarqué'] },
      { badge: 'Recherche — LSJML', badgeClass: 'academic', year: '2024', featured: false, name: 'Forensic Shoe Print — Gestion de traces podoscopiques', description: 'Application full-stack pour la gestion forensique d\'empreintes de semelles. CRUD complet, upload d\'images, codification LSJML et Girod2, Spring Security JWT, migrations Liquibase.', techs: ['Spring Boot', 'Angular', 'PostgreSQL', 'Liquibase', 'Spring Security', 'TypeScript'] },
      { badge: 'Projet académique', badgeClass: '', year: '2022', featured: false, name: 'Application e-commerce — Architecture microservices', description: 'Boutique en ligne sur architecture microservices. Communication inter-services via Feign Client, interface Angular, gestion découplée des commandes et du catalogue.', techs: ['Spring Boot', 'Microservices', 'Feign Client', 'Angular', 'MySQL', 'Docker'] },
      { badge: 'Projet académique', badgeClass: '', year: '2022', featured: false, name: 'Application d\'aide COVID-19 — Localisation des ressources', description: 'Système de localisation des centres de tests et vaccination COVID-19 disponibles. API REST Django, frontend C#, visualisation cartographique en temps réel.', techs: ['Python', 'Django', 'REST API', 'C#', '.NET', 'MySQL'] },
      { badge: 'Projet académique', badgeClass: '', year: 'Jan. – Août 2023', featured: false, name: 'Affectation des présidents de jury — Baccalauréat', description: 'Application web d\'affectation automatique des présidents de jury. API REST backend, interface Angular, authentification et gestion des rôles (administrateur, jury, observateur).', techs: ['Angular', 'Java', 'Spring Boot', 'REST API', 'MySQL'] },
      { badge: 'Enseignement', badgeClass: '', year: '2024 – 2025', featured: false, name: 'Ressources pédagogiques — SIF1033, PRO1026 & INF1013', description: 'Matériel pédagogique complet : TPs OpenCV, grilles Norman pour INF1034, calculateur VB.NET, tutoriels Visual Studio. Génération automatique en PDF avec ReportLab.', techs: ['Python', 'OpenCV', 'VB.NET', 'Affinity Designer', 'ReportLab'] }
    ]
  };

  en = {
    label: 'Projects', title: 'Notable Projects',
    projects: [
      { badge: 'M.Sc. Thesis', badgeClass: 'thesis', year: '2024 – 2025', featured: true, name: 'ConsultationService — Automated Medical Documentation', description: 'Native Android app embedding Whisper + DistilBERT (fine-tuned on 200 synthetic consultations) to transcribe and extract 5 vital signs automatically. 95.6% accuracy, 6.4× faster than real time. Paper in preparation (JMIR / IEEE JBHI).', techs: ['Android (Java)', 'TensorFlow Lite', 'Whisper', 'DistilBERT', 'Python', 'Embedded ML'] },
      { badge: 'Research — LSJML', badgeClass: 'academic', year: '2024', featured: false, name: 'Forensic Shoe Print — Trace Evidence Management', description: 'Full-stack application for forensic shoe print management. Full CRUD, image upload, LSJML and Girod2 codification, Spring Security JWT, Liquibase migrations.', techs: ['Spring Boot', 'Angular', 'PostgreSQL', 'Liquibase', 'Spring Security', 'TypeScript'] },
      { badge: 'Academic project', badgeClass: '', year: '2022', featured: false, name: 'E-commerce App — Microservices Architecture', description: 'Online store built on a microservices architecture. Inter-service communication via Feign Client, Angular frontend, decoupled order and catalog management.', techs: ['Spring Boot', 'Microservices', 'Feign Client', 'Angular', 'MySQL', 'Docker'] },
      { badge: 'Academic project', badgeClass: '', year: '2022', featured: false, name: 'COVID-19 Aid App — Resource Locator', description: 'System for locating available COVID-19 testing and vaccination centers. Django REST API, C# frontend, real-time map visualization.', techs: ['Python', 'Django', 'REST API', 'C#', '.NET', 'MySQL'] },
      { badge: 'Academic project', badgeClass: '', year: 'Jan. – Aug. 2023', featured: false, name: 'Jury President Assignment — Baccalauréat Exams', description: 'Web application for automatic assignment of jury presidents. REST API backend, Angular frontend, authentication and role management (admin, jury, observer).', techs: ['Angular', 'Java', 'Spring Boot', 'REST API', 'MySQL'] },
      { badge: 'Teaching', badgeClass: '', year: '2024 – 2025', featured: false, name: 'Teaching Resources — SIF1033, PRO1026 & INF1013', description: 'Complete pedagogical material: OpenCV labs, Norman grids for INF1034, VB.NET weighted calculator, Visual Studio debugging tutorials. Auto-generated PDFs with ReportLab.', techs: ['Python', 'OpenCV', 'VB.NET', 'Affinity Designer', 'ReportLab'] }
    ]
  };

  c() { return this.lang.isFr() ? this.fr : this.en; }
}
