const IntroContent = document.getElementById('Intro');
const OmmigContent = document.getElementById('Ommigstart');
const ArbetslivserfarenhetContent = document.getElementById('Arblfstart');
const UtbildningContent = document.getElementById('Utbstart');
const CouContent = document.getElementById('Coustart');
const PokContent = document.getElementById('Portstart');

function Intro() {
  IntroContent.innerHTML = `
  <br>
<a class="btn btn-outline-info" href="https://robinkarlsson-se.translate.goog/?_x_tr_sl=sv&_x_tr_tl=en&_x_tr_hl=sv&_x_tr_pto=wapp" role="button">View this site in another language</a><br><br>
    <img src="resources/giphy.gif">
    <h2>ROBIN KARLSSON</h2>
    <p>Systemutvecklare & Webbutvecklare</p>
    </div><br>
    <div class="inline-block">
    <a href="https://www.linkedin.com/in/robin-karlsson-81aa1b20b/" target=“_blank”>
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
        <b><u>Vad jag söker</u></b><br>
        Söker arbetsgivare inom närområdet (Västmanlands län, Örebro, Eskilstuna och eventuellt Borlänge) alternativt arbetsgivare som erbjuder distans/hybrid som är i behov av utvecklare.<br><br>
        En arbetsgivare som kan bidra till min personliga utveckling med trevliga kollegor som gör arbetsdagarna roliga och givande. 
        Om ni ser min profil som intressant så vänligen hör av er till mig via kontaktvägarna ovan.</div>
    </div>
    </p>
    `;
}
function Arbetslivserfarenhet() {
  ArbetslivserfarenhetContent.innerHTML = `
    <embed src="resources/we.png" height="5%" width="5%">
    <div class="flex-Arblf">
    <div>
        <span class="badge bg-secondary">Infobric Fleet (Systemutvecklare) - Praktik</span></h3>
        <u><br>Januari 2023-02-20-2023-06-04 <b style="color:green;">(Nuvarande)</b><br></u>
        Webbutveckling
    </div>
    </div>
    <div class="flex-Arblf">
    <div>
        <span class="badge bg-secondary">Infobric Fleet (Systemutvecklare) - Praktik</span></h3>
        <u><br>Januari 2022-11-07-2023-01-13 <b style="color:red;">(Avslutad)</b><br></u>
        Som en del av mina studier så har jag utfört min LIA (Lärande i arbete) - Praktik hos Infobric Fleet där jag jobbat som Systemutvecklare. 
        Mitt uppdrag var att konvertera en körjournalsmodul från Ext JS till React. Arbetet inkluderade TypeScript, React, Semantic UI, SCSS, custom CSS, Tillståndshantering med MobX, hämta/skicka data via API/Controllers m.m.
    </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <span class="badge bg-secondary">Försvarsmakten (Systemanalytiker)</span></h3>
            <u><br>Januari 2020-nu <b style="color:green;">(Nuvarande)</b><br></u>
            Applikationsansvarig & funktionsexpert för Försvarsmaktens intranät (SharePoint).<br><br>
            Ledande roll i kravarbete och utveckling vid förändringar samt leder och genomför sprintar (Ref. Agilt arbetssätt). Felsöka och identifiera lösningar för uppkomna incidenter.<br><br>
            Backlogghantering, Releaseplanering, Incidenthantering, Ansvarar för att alla delar I applikationerna överensstämmer med Försvarsmaktens regelverk.<br><br> 
            Arbetar med att förbättra och förenkla rutiner och arbetssätt inom systemförvaltningen.  
        </div>
    </div>
    <div class="flex-Arblf">
        <div>
        <span class="badge bg-secondary">Niborium (Musikproducent och låtskrivare)</span></h3>
            <u><br>2018-nu <b style="color:green;">(Fritid/Hobby)</b><br></u>
            Musikproducent och låtskrivare sedan 2018, gjort egen musik under artistnamnen Robin Whispers, Swedish Melodies och Niborium (Nuvarande).<br><br> 
            Har lyckats nått miljontals streams och följare runtom hela världen. Producerar house, psytrance, trance, dubstep, pop och hiphop/rap.
            Jag är även ghostproducer och producerar musik åt andra artister.<br><br>
            Min musik finns på flesta streaming tjänsterna under mitt artistnamn Niborium.
        </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <span class="badge bg-secondary" style='white-space: normal !important'>D Good Company LTD (Bolagsdirektör och utvecklare)</span></h3>
            <u><br> Aug 2012-Juli 2021 <b style="color:red;">(Avslutad)</b><br></u>
            D Good Company LTD var ett engelska LTD-företag baserat i London,
            71-75 Shelton Street, Covent Garden (Storbritannien).<br><br>
            D Good Company LTD var ett multinationellt bolag i Storbritannien som specialiserade sig på utveckling/förvaltning av IT-tjänster.
        </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <span class="badge bg-secondary">Region Västmanland (Applikationskonsult)</span></h3>
            <u><br> Mars 2017-Jan 2020 <b style="color:red;">(Avslutad)</b><br></u>
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
            <span class="badge bg-secondary" style='white-space: normal !important'>Mälardalens Högskola (Systemansvarig & Förvaltare för Office365/SharePoint)</span></h3>
            <u><br> Aug 2016-Mars 2017 <b style="color:red;">(Avslutad)</b><br></u>
            Arbetade med Skype för Business, OneDrive för Business, SharePoint, Exchange, Yammer, Delve, Sway, Office Online, OneNote och Azure.<br><br>
            Arbetade med underhåll, support, dokumentation och utbildning.<br><br>

            <span class="badge bg-secondary" style='white-space: normal !important'>Mälardalens Högskola (Supporttekniker/Onsite tekniker, First & Second line)</span></h3>
            <u><br> Juni 2011–Aug 2016 <b style="color:red;">(Avslutad)</b><br></u>
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
        <span class="badge bg-secondary">Uniflex IT-Konsult (Tele2 Support)</span></h3>
        <u><br> 2010-2011 <b style="color:red;">(Avslutad)</b><br></u>
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
            <span class="badge bg-secondary">Webbutveckling & Systemutveckling</span></h6>
            <span class="badge bg-secondary">Objektorienterad programmering (OOP)</span></h6>
            <span class="badge bg-secondary">Scrum & SAFe (Scaled Agile Framework)</span></h6><br>
            <span class="badge bg-secondary">Enhetstester (xUnit, MSTest) <br>/ Testdriven utveckling (TDD)</span></h6>
            <br><br>
            
            <u><b>Front-end:</b></u><br>
            <span class="badge bg-secondary">React</span></h6>
            <span class="badge bg-secondary">TypeScript</span></h6>
            <span class="badge bg-secondary">JavaScript</span></h6>
            <span class="badge bg-secondary">Blazor WebAssembly (WASM)</span></h6>
            <span class="badge bg-secondary">Tillståndshantering (Context, Redux & MobX)</span></h6>
            <span class="badge bg-secondary">HTML5</span></h6>
            <span class="badge bg-secondary">CSS3</span></h6>
            <span class="badge bg-secondary">SCSS (Sassy CSS)</span></h6>
            <span class="badge bg-secondary">Bootstrap</span></h6>
            <span class="badge bg-secondary">Bulma</span></h6>
            <span class="badge bg-secondary">Semantic UI</span></h6>
            <br><br>

            <u><b>Backend-end:</b></u><br>
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

            <span class="badge bg-secondary">Node.js</span></h6>
            <span class="badge bg-secondary">Express</span></h6>
            <br><br>

            <span class="badge bg-secondary">SQL</span></h6>
            <span class="badge bg-secondary">SQLite</span></h6>
            <span class="badge bg-secondary">InMemory Database Provider</span></h6>
            <br><br>

            <u><b>Programmeringsspråk:</b></u><br>
            <span class="badge bg-secondary">C#</span></h6>
            <span class="badge bg-secondary">JavaScript</span></h6>
            <span class="badge bg-secondary">TypeScript</span></h6>
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
            <span class="badge bg-secondary">Webpack / Babel / Parcel</span></h6>
            <span class="badge bg-secondary">Selenium WebDriver</span></h6>
            <span class="badge bg-secondary">Unified Modeling Language (UML)</span></h6>
            <span class="badge bg-secondary">Kestrel</span></h6>
            <span class="badge bg-secondary">Linux</span></h6>
            <span class="badge bg-secondary">Apache & Nginx</span></h6>
            <br><br>

            <u><b>Hosting & Cloud platforms</u></b><br>
            <span class="badge bg-secondary">Vercel</span></h6>
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
export { Intro, Ommig, Arbetslivserfarenhet, Utbildning, Cou, Pok };
