# My Moda – One-Page-Website

Statische Website (HTML, Tailwind CSS, etwas JavaScript) für das Modegeschäft My Moda, Marktplatz 11, 73614 Schorndorf. Kein Build nötig, sie läuft direkt auf Vercel.

## Projektstruktur

```
my-moda/
├── index.html            Startseite (alle Bereiche)
├── impressum.html        Impressum (Vorlage, muss ausgefüllt werden)
├── datenschutz.html      Datenschutz (Vorlage, muss angepasst werden)
├── css/styles.css        Eigene Styles
├── js/main.js            Mobile Navigation
├── js/tailwind-config.js Farben und Schriften (Tailwind-CDN)
├── assets/               favicon.svg, hanger.svg, og-image.png, apple-touch-icon.png
├── src/input.css         Nur für den optionalen Tailwind-Build
├── tailwind.config.js    Nur für den optionalen Tailwind-Build
├── package.json          Nur für den optionalen Tailwind-Build
├── vercel.json           Vercel-Einstellungen (saubere URLs, Sicherheits-Header)
├── robots.txt
└── sitemap.xml
```

## Lokal ansehen

`index.html` per Doppelklick im Browser öffnen. Internet wird gebraucht, weil Tailwind und die Schriften noch von externen Servern geladen werden.

## Vor Veröffentlichung und Verkauf erledigen

1. **Domain ersetzen:** In `index.html`, `robots.txt` und `sitemap.xml` steht überall `DEINE-DOMAIN.de`. Durch die echte Domain ersetzen.
2. **Öffnungszeiten prüfen:** Mo–Fr 18:30 Uhr stammt aus Branchenportalen, andere Quellen nennen 19:00 Uhr. Beim Laden nachfragen. Die Zeiten stehen dreimal in `index.html` (Hero, Besuch uns, Footer) und einmal im JSON-LD im `<head>`.
3. **Impressum und Datenschutz ausfüllen:** Beide Seiten sind Vorlagen mit Platzhaltern in [eckigen Klammern]. Sie ersetzen keine Rechtsberatung. Texte z. B. mit einem Generator wie eRecht24 erstellen lassen.
4. **Externe Dienste (Datenschutz):** Die Seite lädt aktuell Google Fonts und Tailwind von fremden Servern (dabei wird die IP-Adresse übertragen). Für eine rechtssichere Seite in Deutschland sollten beide lokal eingebunden werden, siehe unten.

### Optional, empfohlen: Tailwind und Schriften lokal einbinden

**Tailwind:** Node.js installieren, dann im Projektordner:

```
npm install
npm run build:css
```

Das erzeugt `css/tailwind.css`. In allen drei HTML-Dateien diese beiden Zeilen entfernen:

```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="js/tailwind-config.js"></script>
```

und stattdessen einfügen:

```html
<link rel="stylesheet" href="css/tailwind.css">
```

Außerdem in `.gitignore` die Zeile `css/tailwind.css` löschen, damit die Datei mit hochgeladen wird.

**Schriften:** Bodoni Moda und Jost z. B. über den Google-Webfonts-Helper als woff2 herunterladen, in einen Ordner `fonts/` legen, per `@font-face` in `css/styles.css` einbinden und die Google-Fonts-Zeilen (`preconnect` und `stylesheet`) in den HTML-Dateien löschen.

## Auf GitHub hochladen

1. Konto auf github.com anlegen und oben rechts auf **+ → New repository** klicken.
2. Namen vergeben (z. B. `my-moda-website`), **Private** wählen, **ohne** README anlegen, dann **Create repository**.
3. Git installieren (git-scm.com). Im Projektordner ein Terminal öffnen:

```
git init
git add .
git commit -m "Erste Version"
git branch -M main
git remote add origin https://github.com/DEIN-NAME/my-moda-website.git
git push -u origin main
```

Ohne Terminal geht es auch: In GitHub auf **uploading an existing file** klicken und alle Dateien und Ordner per Drag and Drop hineinziehen (den Ordner `my-moda` selbst nicht, nur dessen Inhalt).

## Mit Vercel veröffentlichen

1. Auf vercel.com mit dem GitHub-Konto anmelden.
2. **Add New → Project** wählen und das Repository `my-moda-website` importieren.
3. Einstellungen so lassen: **Framework Preset: Other**, Build Command leer, Output Directory leer.
4. Auf **Deploy** klicken. Nach etwa einer Minute ist die Seite unter einer `.vercel.app`-Adresse erreichbar.
5. Eigene Domain: im Projekt unter **Settings → Domains** hinzufügen und die angezeigten DNS-Einträge beim Domain-Anbieter eintragen.

Jede Änderung, die du auf GitHub hochlädst (`git push`), wird automatisch neu veröffentlicht.

## Verkauf und Übergabe an den Kunden

- Der Kunde legt eigene Konten bei GitHub und Vercel an. Das Repository lässt sich unter **Settings → Transfer ownership** übertragen, das Vercel-Projekt unter **Settings → Transfer**.
- Die Domain sollte auf den Kunden registriert sein oder zu ihm umgezogen werden.
- Vor der Übergabe sollten Impressum und Datenschutz vom Kunden ausgefüllt und geprüft sein.
- Alle Texte, Adressdaten und Öffnungszeiten vom Kunden bestätigen lassen.

## Eigene Fotos einbauen

Lege Fotos vom Laden (JPG, am besten Hochformat 4:5, ca. 1200 px breit) mit genau diesen Namen in `assets/images/` – sie ersetzen automatisch die Illustrationen:

- `hero.jpg` – Bild neben der Überschrift
- `laden-innen.jpg` – großes Bild bei „Über uns“
- `schaufenster.jpg` – kleines Bild bei „Über uns“

Ohne Fotos bleiben die gezeichneten Illustrationen aus `assets/illustrations/` sichtbar.
