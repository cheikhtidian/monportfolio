import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact">
      <div class="container">
        <div class="section-label">{{ c().label }}</div>
        <h2 class="section-title">Contact</h2>
        <div class="section-divider"></div>
        <div class="contact-grid">
          <div class="contact-info">
            <p class="intro">{{ c().intro }}</p>
            <div class="contact-links">
              <a *ngFor="let link of contactLinks" [href]="link.href" class="contact-link">
                <div class="link-icon">{{ link.icon }}</div>
                <span>{{ link.label }}</span>
              </a>
            </div>
          </div>
          <div class="form-wrap">
            <div class="contact-form">
              <div class="form-group">
                <label>{{ c().name }}</label>
                <input type="text" [(ngModel)]="form.name" [placeholder]="c().namePh">
              </div>
              <div class="form-group">
                <label>{{ c().email }}</label>
                <input type="email" [(ngModel)]="form.email" [placeholder]="c().emailPh">
              </div>
              <div class="form-group">
                <label>{{ c().subject }}</label>
                <input type="text" [(ngModel)]="form.subject" [placeholder]="c().subjectPh">
              </div>
              <div class="form-group">
                <label>{{ c().message }}</label>
                <textarea [(ngModel)]="form.message" rows="5" [placeholder]="c().messagePh"></textarea>
              </div>
              <button class="btn-submit" (click)="onSubmit()" [disabled]="submitted">
                {{ submitted ? c().sent : c().send }}
              </button>
            </div>
            <p class="form-note" *ngIf="submitted">{{ c().thanks }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section { background: var(--navy); }
    .section-label { color: rgba(212,175,55,0.75); }
    .section-title { color: var(--white); }
    .section-divider { background: var(--gold); }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3.5rem; }
    .intro { color: rgba(255,255,255,0.65); font-size: 0.96rem; line-height: 1.8; margin-bottom: 2rem; }
    .contact-links { display: flex; flex-direction: column; gap: 1rem; }
    .contact-link { display: flex; align-items: center; gap: 0.85rem; color: rgba(255,255,255,0.72); font-size: 0.92rem; text-decoration: none; transition: color var(--transition); }
    .contact-link:hover { color: var(--gold-light); }
    .link-icon { width: 34px; height: 34px; border-radius: 50%; border: 0.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
    .contact-form { display: flex; flex-direction: column; gap: 1rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.35rem; }
    label { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: rgba(255,255,255,0.45); }
    input, textarea { background: rgba(255,255,255,0.06); border: 0.5px solid rgba(255,255,255,0.18); color: var(--white); padding: 0.72rem 1rem; border-radius: 2px; font-family: var(--font-sans); font-size: 0.92rem; width: 100%; outline: none; transition: border-color var(--transition); }
    input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.28); }
    input:focus, textarea:focus { border-color: var(--gold); }
    textarea { resize: vertical; }
    .btn-submit { padding: 0.75rem 1.75rem; background: var(--gold); color: var(--navy); border: none; font-weight: 600; font-size: 0.9rem; cursor: pointer; border-radius: 2px; align-self: flex-start; transition: background var(--transition); font-family: var(--font-sans); }
    .btn-submit:hover:not(:disabled) { background: var(--gold-light); }
    .btn-submit:disabled { opacity: 0.6; cursor: default; }
    .form-note { margin-top: 0.75rem; font-size: 0.85rem; color: var(--gold-light); }
    @media (max-width: 680px) { .contact-grid { grid-template-columns: 1fr; } }
  `]
})
export class ContactComponent {
  lang = inject(LanguageService);
  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;

  contactLinks = [
    { icon: '✉', label: 'serigne.cheikh.ahmet.tidiane.sy.thioune@uqtr.ca', href: 'mailto:serigne.cheikh.ahmet.tidiane.sy.thioune@uqtr.ca' },
    { icon: 'in', label: 'https://www.linkedin.com/in/serigne-cheikh-ahmet-tidiane-sy-thioune-193569217/details/education/', href: 'https://linkedin.com/in/serigne-thioune' },
    { icon: '◆', label: 'https://github.com/cheikhtidian', href: 'https://github.com/serigne-thioune' },
    { icon: '⊙', label: 'Trois-Rivières, Québec, Canada', href: '#' }
  ];

  content = {
    fr: { label: 'Travaillons ensemble', intro: 'Je suis disponible pour des postes de développeur backend ou fullstack. N\'hésitez pas à me contacter pour discuter d\'une opportunité ou d\'une collaboration.', name: 'Nom', email: 'Courriel', subject: 'Objet', message: 'Message', namePh: 'Votre nom complet', emailPh: 'votre@courriel.com', subjectPh: 'Opportunité d\'emploi, collaboration...', messagePh: 'Votre message...', send: 'Envoyer le message', sent: 'Message envoyé ✓', thanks: 'Merci ! Je reviendrai vers vous très prochainement.' },
    en: { label: 'Let\'s work together', intro: 'I am available for backend or fullstack developer positions. Feel free to reach out to discuss an opportunity or collaboration.', name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', namePh: 'Your full name', emailPh: 'your@email.com', subjectPh: 'Job opportunity, collaboration...', messagePh: 'Your message...', send: 'Send message', sent: 'Message sent ✓', thanks: 'Thank you! I will get back to you very soon.' }
  };

  c() { return this.lang.isFr() ? this.content.fr : this.content.en; }

  /*onSubmit() {
    if (this.form.name && this.form.email && this.form.message) {
      this.submitted = true;
    }
  }*/

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;

    emailjs.send(
      'service_bqkf9bc',      // ex: 'service_abc123'
      'template_31kn2rc',     // ex: 'template_xyz456'
      {
        from_name:  this.form.name,
        from_email: this.form.email,
        subject:    this.form.subject,
        message:    this.form.message
      },
      'GZTlKbBVcr1_X3S0T'        // ex: 'user_XXXXXXXXX'
    ).then(() => {
      this.submitted = true;
    }).catch((err) => {
      console.error('Erreur EmailJS :', err);
      alert('Erreur lors de l\'envoi. Réessaie plus tard.');
    });
  }
}
