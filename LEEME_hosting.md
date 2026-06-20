# Calendario de turnos EMB — versión web (PWA) + APK

Carpeta lista para subir a GitHub Pages. Da la dirección web de la app y, en el
mismo sitio, el enlace de descarga del APK.

## Archivos
- index.html ............ la app (calendario de turnos, 4 contratos)
- manifest.webmanifest .. para instalar como app (PWA)
- sw.js ................. funcionamiento sin conexión
- icon-192/512(.maskable).png .. iconos
- TurnosEMB.apk ......... (LO AÑADES TÚ tras compilar en Android Studio)

## Publicar (una sola vez)
1. Crea un repositorio nuevo en GitHub, p.ej. **turnos-emb** (público).
2. Sube TODOS los archivos de esta carpeta (botón "Add file > Upload files").
3. Settings > Pages > Build and deployment: Source = "Deploy from a branch",
   Branch = main / (root) > Save.
4. A los ~1-2 min tendrás la web en:
   https://haymadre9-lab.github.io/turnos-emb/

## Añadir el APK descargable
1. En Android Studio compila el APK (Build > Build APK(s)).
2. Renombra `app-debug.apk` a **TurnosEMB.apk**.
3. Súbelo a este mismo repo (Upload files).
4. Quedará descargable en:
   https://haymadre9-lab.github.io/turnos-emb/TurnosEMB.apk
   y el botón "⬇ APK" de la cabecera de la web ya lo descarga solo.

## Integrar en UsoEmbsa (carpeta en la pantalla principal)
Como la web ya lleva el botón de descarga del APK dentro, en UsoEmbsa basta con
UN enlace a:  https://haymadre9-lab.github.io/turnos-emb/
Crea una carpeta "Calendario de turnos" en la pantalla principal y mete ahí ese
enlace. (Si tus carpetas solo admiten archivos y no enlaces, dímelo y te añado
el soporte de enlaces en UsoEmbsa.)
