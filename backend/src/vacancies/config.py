from pydantic_settings import BaseSettings
from typing import Any


class VacanciesSettings(BaseSettings):
    base_relocation_keyword: str = "relocation"

    relocation_keywords_supported: list[str] = [
        "relocation assistance",
        "relocation provided",
        "relocation available",
        "willing to relocate",
        "work remotely",
        "remote",
        "telecommute",
        "work from home",
        "remote work",
        "virtual position",
        "relocation support",
        "relocation covered",
        "company sponsored relocation",
        "ability to relocate",
    ]

    relocation_keywords_not_supported: list[str] = [
        "no relocation",
        "relocation not provided",
        "relocation assistance unavailable",
        "must reside in",
        "must be located in",
        "location-specific",
        "must live in",
        "no remote",
    ]

    stack_keywords: Any = {
        "frontend": [
            {
                "name": "React",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                "name": "Angular",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
            },
            {
                "name": "Vue.js",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
            },
            {
                "name": "Svelte",
                "icon": "https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg",
            },
            {
                "name": "HTML",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            },
            {
                "name": "CSS",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            },
            {
                "name": "JavaScript",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            },
            {
                "name": "TypeScript",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            },
            {
                "name": "Webpack",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
            },
            {"name": "Vite", "icon": "https://vitejs.dev/logo.svg"},
            {"name": "Parcel", "icon": "https://parceljs.org/favicon.a4b04f34.svg"},
            {
                "name": "Jest",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
            },
            {
                "name": "Mocha",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
            },
            {"name": "Cypress", "icon": "https://www.cypress.io/img/favicon.ico"},
            {
                "name": "Bootstrap",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
            },
            {
                "name": "Tailwind CSS",
                "icon": "https://tailwindcss.com/favicons/favicon-32x32.png",
            },
            {
                "name": "Material UI",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
            },
        ],
        "backend": [
            {
                "name": "Python",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            },
            {
                "name": "Node.js",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            },
            {
                "name": "Java",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
                "name": "Ruby",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
            },
            {
                "name": "Go",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
            },
            {
                "name": "Django",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
            },
            {
                "name": "Flask",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
            },
            {"name": "Express", "icon": "https://expressjs.com/images/favicon.png"},
            {"name": "Spring Boot", "icon": "https://spring.io/images/favicon.ico"},
            {
                "name": "Ruby on Rails",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg",
            },
            {
                "name": "PostgreSQL",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
            {
                "name": "MongoDB",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
                "name": "MySQL",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
                "name": "SQLite",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            },
            {
                "name": "Redis",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
            },
            {"name": "REST", "icon": "https://restfulapi.net/favicon.ico"},
            {
                "name": "GraphQL",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
            },
            {"name": "gRPC", "icon": "https://grpc.io/img/favicon.png"},
            {"name": "JWT", "icon": "https://jwt.io/img/pic_logo.svg"},
            {"name": "OAuth", "icon": "https://oauth.net/images/oauth-icon.png"},
            {
                "name": "Passport.js",
                "icon": "http://www.passportjs.org/images/favicon.png",
            },
        ],
        "devops": [
            {
                "name": "Docker",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            },
            {
                "name": "Kubernetes",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
            },
            {
                "name": "AWS",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
            },
            {
                "name": "Azure",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
            },
            {
                "name": "Google Cloud",
                "icon": "https://cloud.google.com/images/favicon.png",
            },
            {"name": "Jenkins", "icon": "https://www.jenkins.io/images/favicon.ico"},
            {
                "name": "GitHub Actions",
                "icon": "https://github.githubassets.com/favicons/favicon.svg",
            },
            {
                "name": "GitLab CI",
                "icon": "https://about.gitlab.com/images/favicon.png",
            },
            {
                "name": "Prometheus",
                "icon": "https://prometheus.io/assets/prometheus_logo.svg",
            },
            {"name": "Grafana", "icon": "https://grafana.com/static/img/favicon.ico"},
            {"name": "New Relic", "icon": "https://newrelic.com/favicon.ico"},
            {
                "name": "Git",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            },
            {
                "name": "SVN",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/subversion/subversion-original.svg",
            },
        ],
        "mobile": [
            {
                "name": "React Native",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            },
            {
                "name": "Flutter",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
            },
            {"name": "Ionic", "icon": "https://ionicframework.com/favicon.ico"},
            {
                "name": "Swift",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
            },
            {
                "name": "Kotlin",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
            },
            {
                "name": "Java",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            },
            {
                "name": "Dart",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
            },
            {
                "name": "SQLite",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            },
            {"name": "Realm", "icon": "https://realm.io/favicon.ico"},
            {"name": "Firebase", "icon": "https://firebase.google.com/favicon.ico"},
        ],
        "database": [
            {
                "name": "PostgreSQL",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            },
            {
                "name": "MySQL",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            },
            {
                "name": "SQLite",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            },
            {
                "name": "Oracle",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
            },
            {
                "name": "MongoDB",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            },
            {
                "name": "Cassandra",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cassandra/cassandra-original.svg",
            },
            {"name": "CouchDB", "icon": "https://couchdb.apache.org/favicon.ico"},
            {"name": "Firebase", "icon": "https://firebase.google.com/favicon.ico"},
            {
                "name": "Elasticsearch",
                "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg",
            },
            {"name": "Solr", "icon": "https://lucene.apache.org/solr/favicon.ico"},
            {
                "name": "Redshift",
                "icon": "https://docs.aws.amazon.com/images/redshift/latest/dg/images/favicon.ico",
            },
            {
                "name": "BigQuery",
                "icon": "https://cloud.google.com/images/favicons/favicon.ico",
            },
            {
                "name": "Snowflake",
                "icon": "https://www.snowflake.com/wp-content/themes/snowflake/favicon.ico",
            },
        ],
    }


vacancies_settings = VacanciesSettings()
