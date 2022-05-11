const IntroContent = document.getElementById('Intro');
const OmmigContent = document.getElementById('Ommigstart');
const ArbetslivserfarenhetContent = document.getElementById('Arblfstart');
const UtbildningContent = document.getElementById('Utbstart');
const CouContent = document.getElementById('Coustart');
const PokContent = document.getElementById('Portstart');

function Intro() {
  IntroContent.innerHTML = `
    <img src="resources/rk.jpg">
    <h2>ROBIN KARLSSON</h2>
    <p>Webbutvecklare .NET <br>& Botutveckling (Selenium)</p>
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
    <div class="flex-about">
        <div><b><u>Namn</u><br> </b>Robin Karlsson<br></div>
        <div><b><u>Ålder</u><br> </b><p id="age"></p><br></div>
        <div><b><u>Körkort</u><br> </b> Ja (B-behörighet).<br></div>
    </div>
    <div class="flex-about">
        <div><b><u>Personliga egenskaper</u><br> </b>Serviceinriktad, driven, pedagogisk, flexibel, utåtriktad, ödmjuk och prestigelös.<br></div>
        <div><b><u>Fritid</u><br> </b>Umgås med familj och vänner, skidåkning, datorspel, spelar schack och producerar egen musik.<br><br></div>
    </div>
    <div class="flex-about-ovrigt">
        <div><b><u>Övrigt</u><br> </b>Har ett stort intresse för teknik, intresset för tekniken väcktes redan under min barndom och därför jag valde utbilda mig inom IT (Systemvetenskap på IT-gymnasiet och Webbutvecklare .NET på Tekniska Högskolan i Jönköping - Jönköping University).<br><br> 
        Har sedan 2010 arbetat i IT-branschen inom diverse roller (first line, second line, dispatcher, IT-tekniker, systemförvaltare/analytiker och lite med utveckling).<br><br>
        Jag söker arbetsgivare inom närområdet (Västmanlands län och Örebros län) alternativt arbetsgivare som erbjuder distans/flexibel distans som är i behov av utvecklare.<br><br>
        En arbetsgivare som kan bidra till min personliga utveckling med trevliga kollegor som gör arbetsdagarna roliga och givande. 
        Om ni ser min profil som intressant så vänligen hör av er till mig via kontaktvägarna ovan.</div>
    </div>
    </p>
    `;
}
function Arbetslivserfarenhet() {
  ArbetslivserfarenhetContent.innerHTML = `
    <div class="flex-Arblf">
        <div>
            <u><b>Försvarsmakten (Systemanalytiker)</b><br> Januari 2020-nu (Nuvarande)<br></u>
            Applikationsansvarig & funktionsexpert för Försvarsmaktens intranät (SharePoint).<br><br>
            Ledande roll i kravarbete och utveckling vid förändringar samt leder och genomför sprintar (Ref. Agilt arbetssätt). Felsöka och identifiera lösningar för uppkomna incidenter.<br><br>
            Backlogghantering, Releaseplanering, Incidenthantering, Ansvarar för att alla delar I applikationerna överensstämmer med Försvarsmaktens regelverk.<br><br> 
            Arbetar med att förbättra och förenkla rutiner och arbetssätt inom systemförvaltningen.  
        </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <u><b>Niborium (Musikproducent och låtskrivare)</b><br> 2018-nu (Fritid/Hobby)<br></u>
            Musikproducent och låtskrivare sedan 2018, gjort egen musik under artistnamnen Robin Whispers, Swedish Melodies och Niborium (Nuvarande).<br><br> 
            Har lyckats nått miljontals streams och följare runtom hela världen. Producerar house, psytrance, trance, dubstep, pop och hiphop/rap.
            Jag är även ghostproducer och producerar musik åt andra artister.
        </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <u><b>D Good Company LTD (Bolagsdirektör och utvecklare)</b><br> Aug 2012-Juli 2021 (Avslutad)<br></u>
            D Good Company LTD var ett engelska LTD-företag baserat i London,
            71-75 Shelton Street, Covent Garden (Storbritannien).<br><br>
            D Good Company LTD var ett multinationellt bolag i Storbritannien som specialiserade sig på utveckling/förvaltning av IT-tjänster.
        </div>
    </div>
    <div class="flex-Arblf">
        <div>
            <u><b>Region Västmanland (Applikationskonsult)</b><br> Mars 2017-Jan 2020 (Avslutad)<br></u>
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
        <div>
        <u><b>Mälardalens Högskola (Systemansvarig & Förvaltare för Office365/SharePoint)</b><br> Aug 2016-Mars 2017 (Avslutad)<br></u>
            Arbetade med Skype för Business, OneDrive för Business, SharePoint, Exchange, Yammer, Delve, Sway, Office Online, OneNote och Azure.<br><br>
            Arbetade med underhåll, support, dokumentation och utbildning.<br><br>
            <u><b>Mälardalens Högskola (Supporttekniker/Onsite tekniker, First & Second line)</b><br> Juni 2011–Aug 2016 (Avslutad)<br></u>
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
    <u><b>Uniflex IT-Konsult</b><br> 2010-2011 (Avslutad)<br></u>
        Jobbade på Transcom i Kungsör för Tele2’s tekniska support.<br>
        Vi hade support på ADSL, Kabel, Stadsnät, Kabel och LAN<br>
        förbindelser och felsökning kring detta. Felsökning av förbindelser,<br>
        Zyxel routrar, bredbandstelefoni m.m.<br>
    </div>
    </div>
`;
}
function Utbildning() {
  UtbildningContent.innerHTML = `
    <p>
    <div class="flex-Utb">
        <div>  
            <b>Tekniska högskolan i Jönköping (JTH)</b><br>
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
    <p>
    <div class="flex-Port">
        <div> 
            <u><b>Kunskaper inom:</b></u><br>
            Objektorienterad programmering (OOP)<br><br> 
            <b>[Programmeringsspråk]:</b><br>
            C# (1-2 år)<br>
            JavaScript (1-2 år)<br>
            Visual Basic (2-3 år)<br>
            PowerShell (1 år)<br><br>
            <b>[Ramverk & Bibliotek]</b><br>
            .NET Core (inkl WEB API/REST, Entity Framework, Identity Core & SignalR)<br>
            React<br>
            Bootstrap<br><br> 
        
            <b>[Övrigt]:</b><br>
            MVC/Razor pages, Dependency Injection & Repository Pattern.<br>
            Enhetstester (xUnit) / Testdriven utveckling (TDD).<br>
            Model-view-intent arkitektur (React)<br>
            HTML5 & CSS3<br>
            GIT<br>
            Node.js<br>
            Automapper<br>
            SwaggerUI<br>
            WebSockets<br>
            WebRTC & RTMP<br>
            Webpack / Babel / Parcel<br>
            Selenium WebDriver<br>
        </div>   
    </div>    
    <div class="flex-Port">
        <div>
            <div class="contentbox">
                <u><b>Portfolio</b></u><br>(Läses in med fetch via Github API): 
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
