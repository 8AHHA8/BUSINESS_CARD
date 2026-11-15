# BUSINESS CARD – Personal Portfolio Website

A modern, responsive, and fully multilingual personal portfolio website built with Python and Django. The application serves as a dynamic digital business card, showcasing professional experience, education, technical skills, and selected projects.

The website features a custom dark-themed interface, animated cosmic background, and a multilingual architecture supporting Polish, English, and German.

## 🌐 Live Demo

**[Visit the Live Website](https://blazejh.eu.pythonanywhere.com/)**

## ✨ Features

- **Multilingual Interface:** Three language versions (Polish, English, and German) implemented using Django Internationalization (i18n) and `django-modeltranslation`.
- **Dynamic Portfolio:** Professional experience, education, skills, and projects are retrieved dynamically from the database.
- **Custom Dark Theme:** Modern interface with glowing gradient effects, glassmorphism-inspired components, and a cosmic visual aesthetic.
- **Animated Background:** Custom HTML5 Canvas animation featuring interactive, floating particles and glowing visual effects.
- **Responsive Design:** Optimized for desktop computers, tablets, and mobile devices.
- **Content Management:** Django Admin panel allows convenient management of portfolio content without modifying the source code.
- **Initial Database Data:** The `initial_data.json` fixture provides predefined portfolio content that can be loaded into a fresh database.
- **Production Deployment:** Hosted on PythonAnywhere with environment-based configuration and production security settings.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Backend | Python 3, Django |
| Frontend | HTML5, CSS3, JavaScript |
| UI Framework | Bootstrap 5 |
| Database | SQLite |
| Internationalization | Django i18n, django-modeltranslation |
| Animations | HTML5 Canvas API, CSS |
| Configuration | python-dotenv |
| Image Handling | Pillow |
| Deployment | PythonAnywhere |
| Version Control | Git, GitHub |

## 📂 Project Structure

```text
BUSINESS_CARD/
│
├── business_card/           # Main Django project configuration
│   ├── __init__.py
│   ├── settings.py           # Application and security settings
│   ├── urls.py               # Main URL configuration
│   ├── asgi.py
│   └── wsgi.py
│
├── core/                    # Main Django application
│   ├── fixtures/             # Initial database data
│   │   └── initial_data.json
│   ├── migrations/          # Database migrations
│   ├── templates/           # HTML templates
│   ├── templatetags/        # Custom template filters
│   ├── static/              # CSS, JavaScript and images
│   ├── models.py             # Database models
│   ├── views.py              # Application views
│   ├── urls.py               # Application URL configuration
│   ├── admin.py              # Django Admin registration
│   └── apps.py
│
├── locale/                  # Translation files
│
├── .env                     # Local environment variables (not committed)
├── .gitignore               # Git exclusion rules
├── requirements.txt         # Python dependencies
├── manage.py                # Django management utility
└── README.md
```

**Note:** `db.sqlite3` and `staticfiles/` are intentionally excluded from the Git repository through `.gitignore`. The database is created locally through Django migrations, while `staticfiles/` is generated when collecting static assets for deployment.

## 🚀 Local Installation

Follow these steps to run the project on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/8AHHA8/BUSINESS_CARD.git
cd BUSINESS_CARD
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate the environment:

**Windows:**
```bash
venv\Scripts\activate
```

**macOS / Linux:**
```bash
source venv/bin/activate
```

### 3. Install dependencies

Install all required Python packages using the provided requirements file:

```bash
pip install -r requirements.txt
```

### 4. Configure environment variables

Create a `.env` file in the root directory of the project.

Add the following configuration:

```env
DJANGO_SECRET_KEY=replace_with_your_own_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost
DJANGO_CSRF_TRUSTED_ORIGINS=http://127.0.0.1:8000,http://localhost:8000
```

**Important:** Never commit your `.env` file or expose your Django secret key in a public repository.

### 5. Apply database migrations

Create the database structure by running:

```bash
python manage.py migrate
```

### 6. Load initial database data

Populate the database with the predefined portfolio content:

```bash
python manage.py loaddata initial_data.json
```

Django automatically discovers fixtures stored in the `fixtures/` directory of installed applications, including `core/fixtures/`.

### 7. Create an administrator account

```bash
python manage.py createsuperuser
```

Follow the instructions in the terminal to configure your administrator credentials.

### 8. Run the development server

```bash
python manage.py runserver
```

Open your browser and navigate to:

**Website:** http://127.0.0.1:8000/

**Admin Panel:** http://127.0.0.1:8000/admin/

## ⚙️ Content Management

The application uses Django's built-in administration interface to manage dynamic portfolio content.

After creating a superuser, access the administration panel to manage:

- **Skills:** Technical and soft skills, including their display order.
- **Experience:** Professional positions, companies, employment periods, and descriptions.
- **Education:** Educational institutions, degrees, fields of study, and dates.
- **Projects:** Project titles, descriptions, technologies, and GitHub links.
- **Contact Messages:** Stored contact information and submitted messages.

Portfolio content is stored in the SQLite database and rendered dynamically through Django templates.

## 🌍 Internationalization

The website supports three languages:

- 🇵🇱 Polish
- 🇬🇧 English
- 🇩🇪 German

Language support is implemented using Django's internationalization framework (`i18n`) and `django-modeltranslation`.

This approach allows the website interface and supported database content to be presented in multiple languages.

## 🔒 Security & Production Configuration

The project includes several security-related configurations for production deployment:

- Environment-based Django secret key configuration.
- Configurable `DEBUG` mode.
- Configurable `ALLOWED_HOSTS`.
- CSRF trusted origins configuration.
- HTTPS redirection when `DEBUG=False`.
- HTTP Strict Transport Security (HSTS).
- Secure session and CSRF cookies.
- `X_FRAME_OPTIONS = 'DENY'`.
- Content type sniffing protection.
- Referrer policy configuration.

Sensitive configuration values should be provided through environment variables rather than committed to source control.

## ☁️ Deployment

The application is deployed using **PythonAnywhere**.

The production configuration uses environment variables and Django security settings to support HTTPS-based hosting.

**Live application:** [https://blazejh.eu.pythonanywhere.com/](https://blazejh.eu.pythonanywhere.com/)

## 📄 License

This project is intended for educational and professional portfolio purposes.

No separate open-source license is currently specified.