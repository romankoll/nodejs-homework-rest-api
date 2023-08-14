## GoIT Node.js Course Template Homework

Wykonaj forka tego repozytorium, aby wykonywać zadania domowe (2-6). Fork utworzy repozytorium na Twoim koncie na http://github.com

Dodaj mentora jako collaboratora.

Dla każdego zadania domowego utwórz nową gałąź (branch).

- hw02
- hw03
- hw04
- hw05
- hw06

Każda nowa gałąź dla zadania powinna być tworzona z gałęzi master.

Po zakończeniu wykonania zadania domowego na swojej gałęzi, należy zrobić pull request (PR). Następnie dodaj mentora do przeglądu kodu. Dopiero po zatwierdzeniu PR przez mentora możesz scalić gałąź z zadaniem domowym do gałęzi master.

Uważnie czytaj komentarze mentora. Popraw uwagi i zrób commit na gałęzi z zadaniem domowym. Zmiany automatycznie pojawią się w PR po wysłaniu commitu z poprawkami na GitHub. Po poprawkach ponownie dodaj mentora do przeglądu kodu.

- Podczas oddawania zadania domowego podaj link do PR.
- Kod JS jest czytelny i zrozumiały, do formatowania używany jest Prettier.

### Komendy:

- `npm start` &mdash; uruchamia serwer w trybie produkcyjnym
- `npm run start:dev` &mdash; uruchamia serwer w trybie deweloperskim (development)
- `npm run lint` &mdash; uruchamia sprawdzanie kodu z ESLint, należy wykonać przed każdym PR i poprawić wszystkie błędy lintera
- `npm lint:fix` &mdash; to samo co powyższe, ale również automatycznie poprawia proste błędy.

Verify
‹ All languages
How to send email using Node.js
Make sure you have the prerequisites
Our library requires Node.js version 0.10, 0.12, or 4.

Create an API key
This allows your application to authenticate to our API and send mail. You can enable or disable additional permissions on the API keys page.

"systemcats" was successfully created and added to the next step.
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
Create an environment variable
Update your development environment with your SENDGRID_API_KEY. Run the following in your shell:

Install the package
The following recommended installation requires npm. If you are unfamiliar with npm, see the npm docs. Npm comes installed with Node.js since node version 0.8.x, therefore you likely already have it:

Send your first email
The following is the minimum needed code to send an email:

Implement and run the code above. If that runs without error, click “Next” and we’ll check to see if your email came through SendGrid.
