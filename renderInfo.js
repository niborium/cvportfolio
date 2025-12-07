const IntroContent = document.getElementById('Intro');
const OmmigContent = document.getElementById('Ommigstart');
const ArbetslivserfarenhetContent = document.getElementById('Arblfstart');
const UtbildningContent = document.getElementById('Utbstart');
const CouContent = document.getElementById('Coustart');
const PokContent = document.getElementById('Portstart');
const AkaContent = document.getElementById('Akastart');

function Intro() {
  IntroContent.innerHTML = `
  <br>
<a class="btn btn-outline-info" href="https://robinkarlsson-se.translate.goog/?_x_tr_sl=sv&_x_tr_tl=en&_x_tr_hl=sv&_x_tr_pto=wapp" role="button">View this site in another language</a><br><br>
    <img src="resources/giphy.gif">
    <h2>ROBIN KARLSSON</h2>
    <p>Örebro</p>
    _________________________________________________________________________________________________<br>
    <p>Systemutvecklare @ <a href="https://infobric.se/equipment-assets/sv/plattformar/infobric-machines/" style='text-decoration: none;'>Infobric Machines</a></p>
    <p>Systemutvecklare @ <a href="https://Thalorion.com" style='text-decoration: none;'>Thalorion.com</a></p>
    <p>Musikproducent & Låtskrivare (retired) @ <a href="https://soundcloud.com/niborium" style='text-decoration: none;'>Niborium</a></p>
    </div><br>
    <div class="inline-block">
    <a href="https://www.linkedin.com/in/niborium" target=“_blank”>
    <img src="resources/linkedin.png" style="width:42px;height:42px;">
    </a>
    </div>
    <div class="inline-block">
    <a href="https://github.com/niborium" target=“_blank”>
    <img src="resources/github.png" style="width:42px;height:42px;">
    </a>
    </div>
    <div class="inline-block">
    <a href="mailto:robink90@gmail.com" target=“_blank”>
    <img src="resources/mail.png" style="width:42px;height:42px;">
    </a>
    `;
}

function Ommig() {
  OmmigContent.innerHTML = `
    <p>
    <br>
    <img src="resources/1619357188531.jpg">
    <div class="flex-about">
        <div><b><u>Ålder</u><br> </b><span class="badge bg-secondary" id="age"></span></h6><br></div>
        <div><b><u>Körkort</u><br> </b> <span class="badge bg-secondary">B-behörighet</span></h6><br></div>
    </div>
    <div class="flex-about">
        <div><b><u>Personliga egenskaper</u><br> </b><span class="badge bg-secondary">Serviceinriktad</span></h6><br> <span class="badge bg-secondary">Driven</span></h6><br> <span class="badge bg-secondary">Pedagogisk</span></h6><br> <span class="badge bg-secondary">Flexibel</span></h6><br> <span class="badge bg-secondary">Utåtriktad</span></h6><br> <span class="badge bg-secondary">Ödmjuk</span></h6><br> <span class="badge bg-secondary">Prestigelös</span></h6><br></div>
        <div><b><u>Fritid</u><br> </b><span class="badge bg-secondary">Umgås med familj och vänner</span></h6><br> <span class="badge bg-secondary">Koda</span></h6><br> <span class="badge bg-secondary">Skidåkning</span></h6><br> <span class="badge bg-secondary">Schack</span></h6><br> <span class="badge bg-secondary">Producera musik</span></h6><br> <span class="badge bg-secondary">Teknik</span></h6><br><br></div>
    </div>
    <div class="flex-about-ovrigt">
        <div><b><u>Bakgrund</u><br> </b>Utbildad inom Systemvetenskap på IT-gymnasiet Västerås och Webbutvecklare .NET på Tekniska Högskolan i Jönköping - Jönköping University).<br><br> 
        Har sedan 2010 arbetat i IT-branschen inom diverse roller (first line, second line, dispatcher, IT-tekniker, systemförvaltare/analytiker och en del med utveckling).<br><br>
        <b><u>Öppen för erbjudanden</u></b><br>
        Öppen för förslag/erbjudanden inom närområdet: Örebro med omnejd (inkl hybrid) alternativt arbetsgivare som erbjuder distans.<br><br>
        Om ni ser min profil som intressant och en tjänst som kan passa min profil så hör gärna av er till mig via kontaktvägarna ovan för eventuella erbjudanden.
        <br><br>
        OBS! Är ej intresserad av intjänandemodell/pottmodell (konsultbolag), fast lön ska det vara.
        </div>
    </div>

    <div class="flex-Arblf">
    <div>
    <span class="badge bg-secondary">Niborium (Musikproducent och låtskrivare)</span></h3>
        <u><br>2017-2024 (retired) <b>(Fritid/Hobby)</b><br></u>
        Musikproducent och låtskrivare sedan 2017 fram till 2024, gjorde egen musik under artistnamnen Robin Whispers, Swedish Melodies och Niborium (Nuvarande).<br><br> 
        Har lyckats nått miljontals streams och följare runtom hela världen. Producerar house, electronic, funk, psytrance, trance, dubstep, pop och hiphop/rap.
        Jag är även ghostproducer och producerar musik åt andra artister.<br><br>
        Min musik finns numera exklusivt på  <a href="https://soundcloud.com/niborium" target=“_blank”>Soundcloud</a>.<br>
        Tidigare över 4 miljoner+ streams på Spotify + tidigare Soundcloud profil över 50 miljoner+ streams
    </div>
    </div>
    </p>
    `;
}
function Arbetslivserfarenhet() {
  ArbetslivserfarenhetContent.innerHTML = `
    <embed src="resources/we.png" height="5%" width="5%">
        <div class="flex-Arblf">
    <div>
    <span class="badge bg-secondary">Thalorion.com <br /> (Grundare & Systemutvecklare)</span></h3>
        <u><br>2025 feb-nu <b style="color:green;"> (Aktiv)</b><br></u>
            Thalorion - Healthcare LLMs - Byggd med React, Go som backend, MariaDB som databas, Auth + Paddle som betalning (subscription). Byggd på egna dedikerade servrar, hostat med Appwrite (Self-hosted BaaS).
        <br><br>
    </div>
    </div>
    <div class="flex-Arblf">
    <div>
        <span class="badge bg-secondary">Infobric Equipment & Assets <br /> (Infobric Machines - Systemutvecklare)</span></h3>
        <u><br>2024-02-01 - nu<b style="color:green;"> (Aktiv)</b><br></u>
        Systemutvecklare inom  React, TypeScript, MobX, Material UI, .NET, SQL, Google Maps & Automatiserade GUI tester med Playwright etc.
    </div>
    </div>
        <div class="flex-Arblf">
    <div>
        <span class="badge bg-secondary">Infobric Equipment & Assets <br /> (Infobric Fleet - Systemutvecklare)</span></h3>
        <u><br>2023-06-02-2024-01-29<br></u>
        Arbetet inkluderade React, Ext JS, TypeScript, MobX, Material UI, .NET, SQL, Google Maps och automatiserade GUI-tester med Selenium etc.
    </div>
    </div>
    <div class="flex-Arblf">
    <div>
        <span class="badge bg-secondary">Infobric Equipment & Assets <br/> (Infobric Fleet - Systemutvecklare) - Praktik</span></h3>
        <u><br>2023-02-20-2023-06-02<br></u>
        Som del av mina studier gör jag min andra praktikperiod (LIA) hos Infrobric Fleet fram tills examen för mina studier. Arbetet innefattar React, TypeScript, MobX & .NET
    </div>
    </div>
    <div class="flex-Arblf">
    <div>
        <span class="badge bg-secondary">Infobric Equipment & Assets <br /> (Infobric Fleet - Systemutvecklare) - Praktik</span></h3>
        <u><br>2022-11-07-2023-01-13<br></u>
        Som en del av mina studier så har jag utfört min LIA (Lärande i arbete) - Praktik hos Infobric Fleet där jag jobbat som Systemutvecklare. 
        Mitt uppdrag var att konvertera en körjournalsmodul från Ext JS till React. Arbetet inkluderade TypeScript, React, SCSS, custom CSS, Tillståndshantering med MobX, hämta/skicka data via API/Controllers m.m.
    </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <span class="badge bg-secondary">Försvarsmakten <br /> (Systemanalytiker)</span></h3>
            <u><br>Januari 2020-Maj 2023<br></u>
            Applikationsansvarig & funktionsexpert för Försvarsmaktens intranät (SharePoint).<br><br>
            Ledande roll i kravarbete och utveckling vid förändringar samt leder och genomför sprintar (Ref. Agilt arbetssätt). Felsöka och identifiera lösningar för uppkomna incidenter.<br><br>
            Backlogghantering, Releaseplanering, Incidenthantering, Ansvarar för att alla delar I applikationerna överensstämmer med Försvarsmaktens regelverk.<br><br> 
            Arbetar med att förbättra och förenkla rutiner och arbetssätt inom systemförvaltningen.  
        </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <span class="badge bg-secondary" style='white-space: normal !important'>D Good Company LTD <br /> (Bolagsdirektör och utvecklare)</span></h3>
            <u><br> Aug 2012-Juli 2021<br></u>
            D Good Company LTD var ett engelska LTD-företag baserat i London,
            71-75 Shelton Street, Covent Garden (Storbritannien).<br><br>
            D Good Company LTD var ett multinationellt bolag i Storbritannien som specialiserade sig på utveckling/förvaltning av IT-tjänster.
        </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <span class="badge bg-secondary">Region Västmanland <br /> (Applikationskonsult)</span></h3>
            <u><br> Mars 2017-Jan 2020<br></u>
            Arbetade i Office 365-gruppen på Region Västmanland.<br>
            Mitt fokusområde var SharePoint där jag jobbade med Business Logic lösningar (i form av
            InfoPath, automatiserade arbetsflöden och dynamiska formulär).<br><br>
            Även gjort kod-anpassningar (frontend) i form av JavaScript, CSS & REST-anrop.<br><br>
            Varit med och flyttat/ansvarat för projekt som flytt av databaser från
            Lotus Notes till SharePoint och byggt anpassade SPO-lösningar.<br><br>
            Hade även hand och förvaltade övriga O365-applikationer.
        </div>
    </div>
    <div class="flex-Arblf">
        <div style='width: 5em'>
            <span class="badge bg-secondary" style='white-space: normal !important'>Mälardalens Högskola <br /> (Systemansvarig & Förvaltare för Office365/SharePoint)</span></h3>
            <u><br> Aug 2016-Mars 2017<br></u>
            Arbetade med Skype för Business, OneDrive för Business, SharePoint, Exchange, Yammer, Delve, Sway, Office Online, OneNote och Azure.<br><br>
            Arbetade med underhåll, support, dokumentation och utbildning.<br><br>

            <span class="badge bg-secondary" style='white-space: normal !important'>Mälardalens Högskola <br /> (Supporttekniker/Onsite tekniker, First & Second line)</span></h3>
            <u><br> Juni 2011–Aug 2016<br></u>
            Arbetade som supporttekniker, första och andra linjen.<br>
            * AD Administration + NDS Administration.<br>
            * Fjärrstöd / Fjärrkontroll (DameWare).<br>
            * Felsöka mjukvaru- och hårdvarusupport.<br>
            * Programdistribution - SCCM.<br>
            * Ominstallation / Installation av datorer PC / MAC.<br>
            * Stöd för mobila enheter / tablets (HTC, Samsung, Iphone och Ipad).<br>
            * Felsökning av nätverk (trådlösa, trådlösa, uttag, korskopplingsrum).<br>
            * Redaktör i Polopoly och SharePoint.<br>
            * Dispatcher.<br>
            * Introduktion till studenter - IT-introduktion<br>
            * Telefonadministratör (Konfigurera nya telefonanknytningar och mobila abonnemang i Cisco
            CallManager).<br><br>
            <u>Projekt jag deltog i:</u><br>
            * Nätverksutbyte (Västerås och Eskilstuna) där vi bytte ut all utrustning mot ny.<br>
            * Bulk ersättning av datorer<br>
            * Migrering från Exchange on-prem till molnet (Online)
        </div>
    </div>
    <div class="flex-Arblf">
    <div>
        <span class="badge bg-secondary">Uniflex IT-Konsult <br /> (Tele2 Support)</span></h3>
        <u><br> 2010-2011<br></u>
        Jobbade på Transcom i Kungsör för Tele2’s tekniska support.
        Vi hade support på ADSL, Kabel, Stadsnät, Kabel och LAN förbindelser och felsökning kring detta. Felsökning av förbindelser, Zyxel routrar, bredbandstelefoni m.m.<br>
    </div>
    </div>
`;
}
function Utbildning() {
  UtbildningContent.innerHTML = `
    <p>
    <embed src="resources/education.png" height="5%" width="5%">
    <div class="flex-Utb">
        <div>  
            <b>Tekniska högskolan i Jönköping (JTH)</b><br>
            <u>Examen: Yrkeshögskoleexamen (Jönköping University)</u><br>
            <u>Program: Webbutvecklare .NET (2021-2023)</u><br>
            Webbapplikation MVP 50 Yhp<br>
            Objektorienterad programmering med C# 25 Yhp<br>
            Dynamiska Webbsystem 1 25 Yhp<br>
            Affärsmannaskap för IT 25 Yhp<br>
            Dynamiska Webbsystem 2 25 Yhp<br>
            Moderna Webbapplikationer 50 Yhp<br>
            Lärande i arbete 1 50 Yhp <br>
            Webbapplikationer med realtidskommunikation 50 Yhp<br>
            Affärsutveckling för IT 25 Yhp<br>
            Lärande i arbete 2 50 Yhp<br>
            Examensarbete 25 Yhp<br>
        </div>
    </div>
    <div class="flex-Utb">
        <div>
            <b>Kommunal vuxenutbildning på gymnasial nivå<br>(Västerås stad, VuxenUtbildningsCentrum)</b><br>
            <u>Kurs: Matematik 2a</u><br>
            Utfärdat 2021-02-15<br>
            Läste upp Matematik 2a för att kunna söka in på yrkeshögskola.<br> Ej godkänd på Matematik B i gymnasiet.
        </div>
    </div>
    <div class="flex-Utb">
        <div>
            <b>IT-Gymnasiet Västerås </b><br>
            <u>Program: Systemvetenskap (2006-2009)</u><br>
            Projekt och företagande<br>
            Problembaserat lärande (PBL)<br>
            Datorkunskap<br>
            Datorkommunikation<br>
            Lokala nätverk A<br>
            Operativsystem<br>
            Persondatorer<br>
            Programmering A, B och C<br>
            Webbdesign<br>
            Databashantering<br>
            Ellära A<br>
            Engelska A, B och C<br>
            Digitalteknik<br>
            Elektronik grundkurs<br>
            Estetisk verksamhet<br>
            Företagsekonomi A<br>
            Organisation och ledarskap<br>
            Idrott och hälsa A<br>
            Matematik A och B<br>
            Multimedia A och B<br>
            Naturvetenskap A<br>
            Religionskunskap A<br>
            Samhällskunskap<br>
            Svenska A och B<br>
            Lokala datanät<br>
            Projektarbete<br>
        </div>  
    </div>
    </p>
    `;
}
function Cou() {
  CouContent.innerHTML = `
    <embed src="resources/certificate.png" height="5%" width="5%">
    <div class="flex-Cou">
        <div><b>Microsoft Certified Solutions Developer (MCSD): App Builder</b> <br>(Utfärdat av Microsoft)</div>
        <div><b>Microsoft Certified Solutions Associate (MCSA): Web Application</b> <br>(Utfärdat av Microsoft)</div>
    </div>
    <div class="flex-Cou">
        <div><b>Microsoft Certified Solutions Associate (MCSA): O365</b> <br>(Utfärdat av Microsoft)</div>
        <div><b>Microsoft Certified: Azure AI Engineer Associate</b> <br>(Utfärdat av Microsoft)</div>
    </div>
    <div class="flex-Cou">
        <div><b>Microsoft Certified Professional (MCP)</b> <br>(Utfärdat av Microsoft)</div>
        <div><b>Certified SAFe 5 Agilist</b> <br>(Utfärdat av Scaled Agile, Inc)</div>
    </div>
    <div class="flex-Cou">
        <div><b>Agil projektledning med Scrum</b> <br>(Utfärdat av Learning Tree International)</div>
        <div><b>Arena Fide Master (AFM)</b> <br>(Utfärdat av International Chess Federation)</div>
    </div>
    `;
}
function Pok() {
  PokContent.innerHTML = `
    <embed src="resources/resume.png" height="5%" width="5%">
    <p>
    <div class="flex-Port">
        <div style='width: 19em'> 
            <u><b>Kunskaper inom</b></u><br>
            <span class="badge bg-secondary">Webbutveckling & Systemutveckling</span></h6><br>
            <span class="badge bg-secondary">Objektorienterad programmering (OOP)</span></h6>
            <span class="badge bg-secondary">Scrum & SAFe (Scaled Agile Framework)</span></h6><br>
            <span class="badge bg-secondary">Enhetstester (xUnit, MSTest) <br>/ Testdriven utveckling (TDD)</span></h6>
            <br><br>
            
            <u><b>Frontend:</b></u><br>
            <span class="badge bg-secondary">React</span></h6>
            <span class="badge bg-secondary">TypeScript</span></h6>
            <span class="badge bg-secondary">JavaScript</span></h6>
            <span class="badge bg-secondary">Blazor (WASM)</span></h6>
            <span class="badge bg-secondary">Tillståndshantering (Context, Redux & MobX)</span></h6>
            <span class="badge bg-secondary">HTML5, CSS3 & SASS/SCSS</span></h6>
            <span class="badge bg-secondary">React Bootstrap</span></h6>
            <span class="badge bg-secondary">Semantic UI</span></h6>
            <span class="badge bg-secondary">Material UI (MUI)</span></h6>
            <br><br>

            <u><b>Backend:</b></u><br>
            <span class="badge bg-secondary">.NET</span></h6>
            <span class="badge bg-secondary">WEB API & REST</span></h6>
            <span class="badge bg-secondary">MVC</span></h6>
            <span class="badge bg-secondary">Blazor Server</span></h6>
            <span class="badge bg-secondary">Razor</span></h6>
            <span class="badge bg-secondary">Dependency Injection (DI)</span></h6>
            <span class="badge bg-secondary">Entity Framework</span></h6>
            <span class="badge bg-secondary">Identity Core</span></h6>
            <span class="badge bg-secondary">SignalR</span></h6>
            <br><br>

            <span class="badge bg-secondary">Go (Gin, Echo & Fiber)</span></h6>
            <br><br>

            <span class="badge bg-secondary">Node.js</span></h6>
            <span class="badge bg-secondary">Express</span></h6>
            <span class="badge bg-secondary">Sequelize</span></h6>
            <br><br>

            <span class="badge bg-secondary">AppWrite (BaaS)</span></h6>
            <span class="badge bg-secondary">Coolify</span></h6>
            <br><br>

            <span class="badge bg-secondary">SQL / T-SQL</span></h6>
            <span class="badge bg-secondary">SQLite</span></h6>
            <span class="badge bg-secondary">InMemory Database Provider</span></h6>
            <br><br>

            <u><b>Programmeringsspråk:</b></u><br>
            <span class="badge bg-secondary">C#</span></h6>
            <span class="badge bg-secondary">TypeScript</span></h6>
            <span class="badge bg-secondary">JavaScript</span></h6>
            <span class="badge bg-secondary">Go</span></h6>
            <span class="badge bg-secondary">Lua</span></h6>
            <span class="badge bg-secondary">PowerShell</span></h6>
            <br><br>
        
            <u><b>Övrigt:</b></u><br>
            <span class="badge bg-secondary">GIT</span></h6>

            <span class="badge bg-secondary">Repository Pattern & SOLID Design Principles</span></h6>
            <span class="badge bg-secondary">Monolithic & Microservice Architecture</span></h6>
            <span class="badge bg-secondary">Automapper</span></h6>
            <span class="badge bg-secondary">SwaggerUI / OpenAPI</span></h6>
            <span class="badge bg-secondary">WebSockets</span></h6>
            <span class="badge bg-secondary">WebRTC</span></h6>
            <span class="badge bg-secondary">Microsoft Authentication Library (MSAL2.0)</span></h6>
            <span class="badge bg-secondary">OAuth2</span></h6>
            <span class="badge bg-secondary">OpenID Connect</span></h6>
            <span class="badge bg-secondary">Docker & Kubernetes</span></h6>
            <span class="badge bg-secondary">Vite</span></h6>
            <span class="badge bg-secondary">Webpack / Babel / Parcel</span></h6>
            <span class="badge bg-secondary">Selenium (Automated gui tests + scrapers and bots)</span></h6>
            <span class="badge bg-secondary">Unified Modeling Language (UML)</span></h6>
            <span class="badge bg-secondary">Kestrel</span></h6>
            <span class="badge bg-secondary">Linux</span></h6>
            <span class="badge bg-secondary">Apache & Nginx</span></h6>
            <span class="badge bg-secondary">Stripe</span></h6>
            <span class="badge bg-secondary">Sendgrid</span></h6>
            <br><br>

            <u><b>Hosting & Cloud platforms</u></b><br>
            <span class="badge bg-secondary">Coolify</span></h6>
            <span class="badge bg-secondary">Dokploy</span></h6> 
            <span class="badge bg-secondary">Vercel</span></h6>
            <span class="badge bg-secondary">Netlify</span></h6>
            <span class="badge bg-secondary">Railway</span></h6>
            <span class="badge bg-secondary">Contabo</span></h6>
            <span class="badge bg-secondary">Digital Ocean</span></h6>
            <span class="badge bg-secondary">Linode</span></h6>
            <span class="badge bg-secondary">Heroku</span></h6>
            <br>
        </div>   
    </div>    
    <div class="flex-Port">
        <div>
            <div class="contentbox">
                <u><b>Portfolio</b></u><br>
                <b>nxx.se <br>(tjänsten är nedstängd)</b><br>
                Var en gratis bilduppladdningstjänst som var utvecklad av mig. Byggd med React och .NET Core 6.0 Web API.
                Frontend hostades hos Vercel och backend hostades hos Contabo med Ubuntu (Nginx reverse proxy).
                Closed source projekt med Microservice Application Architecture.<br><br>
                Snapshot av tjänsten finns nedan:
                <a href="https://ibb.co/HrqHzb0"><img src="https://i.ibb.co/hKVmW4k/nxx-snapshot.png" alt="nxx-snapshot" border="0" width='50%' height='50%'/></a><br>
                <a href="https://archive.vn/I1gDL">Arkiverad snapshot hos Archive.vn</a><br>
                <a href="https://postimg.cc/Q9D3fSRX">Bildsnapshot hos postimg.cc (backup för ovan)</a><br>
                <a href="https://freeimage.host/i/HT4i9Np">Bildsnapshot hos freeimage.host (backup för ovan)</a>
                
                
                ______________________________________<br>
                
                (Nedan läses in med fetch via Github API): 
                <div id="githubrepos"></div>
                </div>
            </div> 
        </div>
    <div class="flex-Port">
        <div>
        <u><b>Övriga kunskaper inom IT:</b></u><br> 
            Hårdvarufelsökning av Dell/HP datorer (Desktops/Laptops) och klientfelsökning i Windows.<br><br>
            Mobila enheter/surfplattor (Android & iOS)<br><br>
            Nätverksfelsökning/Patchning av nätverk/Monitorering av nätverk (inkl Cisco Prime), <br><br>
            Katalogtjänster: Active Directory och NDS.<br><br>
            Programdistribution och installation/Ominstallation: SCCM<br><br>
            Fjärrstyrning: DameWare Remote, Fjärrskrivbord / RDP.<br><br>
            VoIP/Vood, Cisco IP och Cisco Unified CM Admin.<br><br>
            Polopoly CMS och SharePoint.<br><br>
            Ärendehantering via Siebel, Nilex och SM<br><br>
            Office 365<br><br>
            m.m.<br>
        </div>      
    </div>    
    <div class="flex-Port">
        <div>
            <u><b>Referenser:</b></u><br>
            Utlämnas vid efterfrågan.
        </div>      
    </div>
    </p>
`;
}
function Aka() {
  AkaContent.innerHTML = `
<div class="flex-Port">
<div>
    <u><b>Akademiska publikationer</b></u><br>
    <a href="https://drive.google.com/file/d/1Ys-J7Zp5OhNIZ9goS9AETvSaEl1Tn_kF/view?usp=sharing" style="text-decoration: none;">Migrering av en Sencha Ext JS-baserad webbapplikation till React (Robin Karlsson)</a><br><br>
    <br>
    <u><b>Forskningsrapporter</b></u><br>
    <a href="https://drive.google.com/file/d/1JnxQLpFkn2NkeFpzxRFcnebWtV1fjg89/view?usp=sharing" style="text-decoration: none;">White Paper: DNA-origami nanorobot för målstyrd cancerterapi (Robin Karlsson)</a><br><br>
    <a href="https://drive.google.com/file/d/1VuAjpZnNAcxOAnWL6KRRq_lU1HNiY8dv/view?usp=sharing" style="text-decoration: none;">White Paper: DNA Origami Nanorobot for Targeted Cancer Therapy (Robin Karlsson)</a><br><br>
    <u><b>Guider</b></u><br>
    <a href="https://docs.google.com/document/d/19iimuL5TQawNu2zDc-S5luyrxAg-AW_0faLs6G3H3qc/edit?usp=sharing" style="text-decoration: none;">Ollama - run local LLMS, configure nginx and letsencrypt and more - Written by Robin Karlsson (2025-05-05)</a><br><br>
    <a href="https://docs.google.com/document/d/1Hj2N29nYzp9QlwcRQoY8b1QILFrcs2mq/edit?usp=sharing&ouid=101989383758628553236&rtpof=true&sd=true" style="text-decoration: none;">React-handbook - (English react crash course) - Written by Robin Karlsson (2024-02-14)</a><br><br>
    <a href="https://docs.google.com/document/d/1MMAv2hC8QoRute1nw7HoMUxsAT_naJpkm6p2RBL7fuk/edit?usp=sharing" style="text-decoration: none;">React-handboken - (Swedish react crash course) - Written by Robin Karlsson (2024-02-14)</a><br><br>
    <a href="https://docs.google.com/document/d/1lHE56qE8gr2fYI1Yfaus84UUIdqW0Phw_vJccuR22mo/edit?usp=sharing" style="text-decoration: none;">Lua - Introduction (22 reserved keywords with examples, tables - data structuring mechanism, luarocks - package manager, build basic REST API with Milua) - Written by Robin Karlsson (2023-11-06)</a><br><br>
    <a href="https://docs.google.com/document/d/1BHXGSTj4_Xm5eWS_K-R01Ez2NOv2i72jkWixm43OzZ8/edit?usp=sharing" style="text-decoration: none;">A Guide to React Props and State Management - Written by Robin Karlsson (2023-07-12)</a><br><br>
    <a href="https://docs.google.com/document/d/1FZeU6CyZfLhHvcaBSK2Pvp7EN7uxC4d9GD7DYDaH0WM/edit?usp=sharing" style="text-decoration: none;">React common design patterns - Written by Robin Karlsson (2023-05-03)</a><br><br>
    <a href="https://docs.google.com/document/d/143kmoXyrdM8BXyAhGXKzLF4eBIQFFtV9S_pONTte3Yk/edit?usp=sharing" style="text-decoration: none;">React useEffect simplified - Written by Robin Karlsson (2023-05-03)</a><br><br>
    <a href="https://docs.google.com/document/d/1nflrzSXO4p-EdZanNhD6rwx8UsgUq8BO0DoU0fuxLTY/edit?usp=sharing" style="text-decoration: none;">React hooks in simple language - Written by Robin Karlsson (2023-05-03)</a><br><br>
    <a href="https://docs.google.com/document/d/19uRkiB1D1iCpJM2vbRWxKp2lXbErUxWe5MC6EmR-ryE/edit?usp=sharing" style="text-decoration: none;">MobX state management simplified - Written by Robin Karlsson (2023-05-02)</a><br><br>
</div>      
</div>
    `;
}
export { Intro, Ommig, Arbetslivserfarenhet, Utbildning, Cou, Pok, Aka };
