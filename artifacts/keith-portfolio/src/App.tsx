import { type ReactNode, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Linkedin, Mail, Menu, X } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [['about', 'About'], ['work', 'Experience'], ['capabilities', 'Strengths'], ['contact', 'Contact']];
  const work = [
    { num: '01', name: 'Voice detection', detail: 'A guided product walkthrough that shows how I turn a technical capability into a clear customer conversation.', tags: ['Presales', 'Workflow', 'Demo'], href: 'https://hclsoftware.storylane.io/share/extr5ieauh2k' },
    { num: '02', name: 'Risk management', detail: 'A focused solution narrative for making complex risk information visible, understandable, and easier to act on.', tags: ['Solutions', 'Clarity', 'Demo'], href: 'https://hclsoftware.storylane.io/share/zhsryyqnvmuw' },
    { num: '03', name: 'Port authority', detail: 'An operational application concept that brings domain context and product thinking into one clear view.', tags: ['Operations', 'UX', 'Demo'], href: 'https://hclsoftware.storylane.io/share/9tduu7pglv7f' },
    { num: '04', name: 'Expenses app', detail: 'A streamlined business workflow that demonstrates practical discovery, prioritisation, and delivery thinking.', tags: ['Finance', 'Product', 'Demo'], href: 'https://hclsoftware.storylane.io/share/ywttipzco0rc' },
    { num: '05', name: 'Open source components', detail: 'Reusable components I have developed and made available through the HCL Volt MX Marketplace.', tags: ['Open source', 'Components', 'Marketplace'], href: 'https://marketplace.hclvoltmx.com/search/Keith' },
  ];
  const capabilities = [
    ['01', 'Presales engineering', 'Translating customer needs into credible solution approaches, technical narratives, estimates, and next steps.'],
    ['02', 'Solution architecture', 'Connecting business goals, product capabilities, integrations, constraints, and delivery realities into a workable blueprint.'],
    ['03', 'Technical communication', 'Making complex ideas clear through discovery, demos, diagrams, prototypes, and conversations with varied audiences.'],
    ['04', 'Technical leadership', 'Bringing structure to delivery, asking better questions, and helping teams move from ambiguity to confident action.'],
    ['05', 'Customer partnership', 'Building trust across the full lifecycle — from first conversation and proposal through implementation and post-launch support.'],
  ];
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };
  return (
    <main className="site-shell" data-testid="page-home">
      <div className="container-wide">
        <header className="nav" data-testid="header-navigation">
          <button className="mark" onClick={() => scrollTo('top')} data-testid="button-home">
            <span className="mark-dot" /> <span>KEITH<br />FARRELL</span>
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([id, label]) => <button key={id} onClick={() => scrollTo(id)} data-testid={`link-${id}`}>{label}</button>)}
            <button className="nav-contact" onClick={() => scrollTo('contact')} data-testid="link-nav-contact">Discuss a role <ArrowUpRight size={15} /></button>
          </nav>
        </header>

        <section className="hero" id="top" data-testid="section-hero">
          <div>
            <div className="eyebrow mono reveal"><span className="eyebrow-line" /> Presales Engineer / Technical Lead</div>
            <h1 className="display reveal delay-1" data-testid="text-hero-heading">Technical depth.<br /><em>Clear direction.</em></h1>
            <p className="hero-intro reveal delay-2" data-testid="text-hero-intro">I'm Keith — a Pre-sales Technical Associate and Tech Lead at HCL Software. I help enterprise customers understand what is possible, how it fits together, and what it will take to deliver.</p>
            <div className="hero-actions reveal delay-3">
              <button className="btn-primary" onClick={() => scrollTo('work')} data-testid="button-explore-work">View my experience <ArrowDownRight size={16} /></button>
              <button className="text-link" onClick={() => scrollTo('contact')} data-testid="link-start-conversation"><span>Talk about a role</span> <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="hero-portrait-wrap reveal delay-2" data-testid="display-portrait">
            <div className="portrait-frame">
              <img src="/static/keith-farrell.jpg" alt="Keith Farrell" data-testid="img-keith-portrait" />
              <div className="portrait-caption mono">Keith Farrell<br />Developer / Human</div>
            </div>
          </div>
        </section>
      </div>

      <section className="section" id="about" data-testid="section-about">
        <div className="container-wide">
          <div className="section-header">
            <div className="eyebrow mono">01 / About <span className="eyebrow-line" /></div>
            <h2 className="section-title display">The person<br /><em>behind the solution.</em></h2>
            <p className="section-lede">I bring technical fluency and client-facing clarity to the full product lifecycle — from pre-sales architecture and resource estimation to blueprinting, development, and post-launch support.</p>
          </div>
          <div className="about-grid">
             <p className="about-copy" data-testid="text-about-copy">I’m a technical lead and solution architect who helps enterprise teams move from a business need to a workable solution. I’m at my best where customer conversations, product thinking, and delivery realities meet — and where a clear technical point of view can move a decision forward.</p>
            <div className="about-aside" data-testid="display-about-details">
               <div className="aside-row"><span className="mono">Target roles</span><span>Presales Engineer<br />Technical Lead</span></div>
              <div className="aside-row"><span className="mono">Company</span><span>HCL Software</span></div>
              <div className="aside-row"><span className="mono">Focus</span><span>Enterprise solution architecture</span></div>
              <div className="aside-row"><span className="mono">Experience</span><span>HCL Software · Kony · Temenos</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work" data-testid="section-work">
        <div className="container-wide">
          <div className="section-header">
            <div className="eyebrow mono">02 / Experience in practice <span className="eyebrow-line" /></div>
            <h2 className="section-title display">Proof of<br /><em>how I work.</em></h2>
            <p className="section-lede">A selection of guided walkthroughs that show how I shape a solution, communicate value, and make technical ideas easier for customers and teams to understand.</p>
          </div>
          <div className="work-list" data-testid="list-selected-work">
             {work.map((item) => <a className="work-item" key={item.num} href={item.href} target="_blank" rel="noreferrer" aria-label={`Open ${item.name} walkthrough`} data-testid={`card-work-${item.num}`}><span className="work-num mono">{item.num}</span><h3 className="work-name">{item.name}<ArrowUpRight size={18} strokeWidth={1.8} /></h3><p className="work-detail">{item.detail}</p><div className="work-tags">{item.tags.map((tag) => <span className="tag mono" key={tag}>{tag}</span>)}</div></a>)}
          </div>
        </div>
      </section>

      <section className="section" id="capabilities" data-testid="section-capabilities">
        <div className="container-wide">
          <div className="section-header">
            <div className="eyebrow mono">03 / Strengths <span className="eyebrow-line" /></div>
            <h2 className="section-title display">The bridge<br /><em>between need and build.</em></h2>
            <p className="section-lede">I work across customers, commercial teams, product, and engineering — translating between perspectives so good solutions can move forward.</p>
          </div>
          <div className="cap-grid" data-testid="grid-capabilities">{capabilities.map(([index, title, body]) => <article className="cap-card" key={index} data-testid={`card-capability-${index}`}><div className="cap-index mono">{index}</div><h3>{title}</h3><p>{body}</p></article>)}</div>
        </div>
      </section>

      <section className="section principles" data-testid="section-principles">
        <div className="container-wide">
          <div className="section-header">
            <div className="eyebrow mono">04 / Working principles <span className="eyebrow-line" /></div>
            <h2 className="section-title display">How I bring<br /><em>teams forward.</em></h2>
            <p className="section-lede">No theatre. No cargo-cult process. Just good questions, tight loops, and a healthy respect for the customer and the outcome.</p>
          </div>
          <div className="principles-grid">{[['01', 'Start with the why', 'Before a component, a layout, or a line of code: understand what it needs to change for someone.'], ['02', 'Make the invisible visible', 'Prototypes, clear language, and small working increments beat grand plans every time.'], ['03', 'Sweat the useful details', 'Accessibility, performance, responsive behavior — polish is not decoration, it is respect.'], ['04', 'Leave things better', 'A good build should be easier to understand, extend, and hand over than it was before.']].map(([n, title, body]) => <article className="principle" key={n}><span className="mono">{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
        </div>
      </section>

      <section className="contact-section" id="contact" data-testid="section-contact">
        <div className="container-wide">
          <div className="contact-wrap"><div><div className="eyebrow mono"><span className="eyebrow-line" /> 05 / Contact</div><h2 className="contact-title display" data-testid="text-contact-heading">Looking for<br /><span>technical clarity?</span><br />Let's talk.</h2><p className="contact-note">If you’re hiring for a presales engineering or technical leadership role, I’d be glad to discuss how my experience could support your customers, teams, and growth.</p><a className="contact-email" href="mailto:keith_farrell@hotmail.com" data-testid="link-email"><Mail size={17} /> keith_farrell@hotmail.com <ArrowUpRight size={16} /></a></div><aside className="contact-aside"><div className="mono">Professional profile</div><p>Connect with me about open roles, solution work, and the teams building useful things.</p><div className="socials"><a className="social-btn" href="https://www.linkedin.com/in/keith-farrell-53348710/" target="_blank" rel="noreferrer" aria-label="Keith on LinkedIn" data-testid="link-linkedin"><Linkedin size={17} /></a><a className="social-btn" href="https://wa.me/447789667446" target="_blank" rel="noreferrer" aria-label="Chat with Keith on WhatsApp" data-testid="link-whatsapp"><SiWhatsapp size={17} /></a></div></aside></div>
          <footer className="footer mono" data-testid="footer"><span>© {new Date().getFullYear()} Keith Farrell</span><button onClick={() => scrollTo('top')} data-testid="button-back-to-top">Back to top <ArrowUpRight size={13} /></button></footer>
        </div>
      </section>
    </main>
  );
}

function Router() {
  return <RoutedErrorBoundary><Switch><Route path="/" component={Home} /><Route component={NotFound} /></Switch></RoutedErrorBoundary>;
}
function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}
function App() {
  return <QueryClientProvider client={queryClient}><TooltipProvider><WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter><Toaster /></TooltipProvider></QueryClientProvider>;
}
export default App;