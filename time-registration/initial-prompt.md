**PROMPT:**

Maak een complete, standalone HTML-applicatie voor tijdregistratie. Geen webserver of externe dependencies vereist, alles staat in één HTML-bestand. Gebruik IndexedDB voor persistente opslag.

**Visuele stijl:**
Kopieer exact de CSS-variabelen, kleurenschema, typografie en componentstijlen van de meegeleverde style-example.html HTML-applicatie. Gebruik dezelfde `--accent`, `--bg`, `--surface`, `--border`, `--text`, `--text-muted`, `--shadow-*` en `--radius` variabelen. Implementeer dark mode via `[data-theme="dark"]` en een toggle-knop in de header identiek aan PrivatePDF. Gebruik dezelfde `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-danger` knopstijlen. Gebruik hetzelfde sticky header-patroon met logo links en acties rechts.

**Functionaliteit:**

*Urenregistratie:*
- Gebruiker selecteert een datum (standaard vandaag) en kiest of typt een projectnaam
- Als de projectnaam nog niet bestaat wordt het project automatisch aangemaakt
- Uren worden ingevoerd als decimale waarden in stappen van 0.25 (kwartier): 0.25, 0.50, 0.75, 1.00, 1.25, etc.
- Input-veld voor uren toont een dropdown/stepper met stappen van 0.25, minimaal 0.25, maximaal 24
- Per dag/project-combinatie wordt de totale tijd opgeslagen (niet losse tijdstempels)
- Bestaande boeking op dezelfde dag+project wordt overschreven of opgeteld — maak dit instelbaar via een toggle "Vervangen / Optellen"
- Verwijderknop per boeking in de dagweergave

*Projectbeheer:*
- Projecten hebben een naam en een optionele kleurcode (kleine gekleurde cirkel als visuele indicator)
- Lijst van alle projecten instelbaar via een apart tabblad of modal
- Projecten kunnen worden hernoemd of gearchiveerd (niet verwijderd, om historische data te behouden)
- Gearchiveerde projecten zijn niet meer selecteerbaar bij nieuwe boekingen maar blijven zichtbaar in rapporten

*Weekoverzicht (hoofd-view):*
- Tabel: projecten verticaal (rijen), dagen van de week horizontaal (kolommen: ma t/m zo)
- Navigatieknoppen ◀ Vorige week / Volgende week ▶ en een "Deze week"-knop
- Toon de weekdatum boven de tabel (bijv. "Week 19 · 5 mei – 11 mei 2025")
- Elke cel toont de uren voor dat project op die dag (leeg als 0, anders bijv. "2.50")
- Klikbare cellen: klik op een cel opent een inline edit-popover om uren direct te wijzigen of te verwijderen
- Rij-totalen rechts (totaal uren per project die week)
- Kolom-totalen onderaan (totaal uren per dag)
- Cel rechtsonder: grand total van de week
- Kleur-indicator per project in de eerste kolom (zelfde kleur als bij projectbeheer)
- Rijen van gearchiveerde projecten worden grijs/italic weergegeven als ze data hebben in die week

*Dagweergave (secundaire view):*
- Toon alle boekingen voor één dag in een lijstweergave
- Bereikbaar door op een dag-header in het weekoverzicht te klikken
- Terugknop naar weekoverzicht

*Data-export:*
- Knop "Exporteer CSV" in de weekview exporteert de zichtbare week als CSV
- Kolommen: Project, Ma, Di, Wo, Do, Vr, Za, Zo, Totaal

**IndexedDB schema:**
- Database naam: `TimeTracker`, versie 1
- Object store `projects`: `{ id (autoIncrement), name, color, archived }`
- Object store `entries`: `{ id (autoIncrement), projectId, date (string YYYY-MM-DD), hours (number) }`
- Index op `entries`: `by_date` op `date`, `by_project` op `projectId`, `by_date_project` op `[date, projectId]`

**UX-details:**
- Alle teksten in het Nederlands
- Toast-notificaties (zelfde stijl als style-example.html) bij opslaan, verwijderen, exporteren
- Leeg weekoverzicht toont een vriendelijke lege staat met uitleg
- Volledig responsief en mobiel-vriendelijk
- Geen externe fonts, geen CDN-dependencies (behalve eventueel één kleine JS-library die inline geïnlined kan worden — maar liever puur vanilla JS)
- Alles werkt offline na eerste load
- Er kan een backup worden gemaakt en teruggezet.